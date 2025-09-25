import { toast, ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CustomerTickets from './components/CustomerTickets';
import TaskStatus from './components/TaskStatus';
import ResolvedTask from './components/ResolvedTask';
import Footer from './components/Footer';
// import { toast } from 'react-toastify';
// import {  ToastContainer } from 'react-toastify';



const App = () => {
  // State for managing tickets
  const [tickets, setTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        console.log('📋 Loading tickets...');
        
        const response = await fetch('/tickets.json');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`✅ Found ${data.length} tickets in the system`);
        
        setTickets(data);
        setError(null);
      } catch (err) {
        console.log('❌ Oops! Could not load tickets:', err.message);
        setError(`Unable to load tickets: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Show ALL tickets in Customer Tickets section
  const customerTickets = tickets;
  const inProgressTickets = tickets.filter(ticket => ticket.status === 'In-Progress');

  //moving ticket from Customer Tickets to Task Status
  const handleMoveToInProgress = (ticketId) => {
    const ticketToMove = tickets.find(ticket => ticket.id === ticketId);
    if (ticketToMove && ticketToMove.status === 'Open') {
      toast(` Ticket "${ticketToMove.title}" moved to In-Progress`);
      console.log(` Moving ticket #${ticketId} to In-Progress`);
      
      const updatedTicket = {
        ...ticketToMove,
        status: 'In-Progress'
      };

      setTickets(prevTickets => 
        prevTickets.map(ticket => 
          ticket.id === ticketId ? updatedTicket : ticket
        )
      );
    }
  };

  //  completing a tiCket
  const handleCompleteTicket = (ticketId) => {
    const ticketToResolve = tickets.find(ticket => ticket.id === ticketId);
    if (ticketToResolve && ticketToResolve.status === 'In-Progress') {
      toast(` Ticket "${ticketToResolve.title}" marked as Resolved!`);
      console.log(` Ticket #${ticketId} completed! Moving to resolved.`);
      
      const resolvedTicket = {
        ...ticketToResolve,
        status: 'Resolved'
      };

      setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId));
      setResolvedTickets(prevResolved => [...prevResolved, resolvedTicket]);
    }
  };

  // Error HANdl
  if (error && !loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Something went wrong!</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner 
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />
      
      <div className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          
          {error && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">
                     There was an issue loading your data file.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <CustomerTickets 
                tickets={customerTickets}
                onCardClick={handleMoveToInProgress}
                loading={loading}
              />
            </div>

            <div>
              <TaskStatus 
                tickets={inProgressTickets}
                onComplete={handleCompleteTicket}
                loading={loading}
              />
              
              <ResolvedTask 
                tickets={resolvedTickets} 
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
       {/* <ToastContainer position="top-right" autoClose={3000} /> */}
       <ToastContainer />

    </div>
  )
}

export default App;
