import React from 'react';
import TicketCard from './TicketCard';

const CustomerTickets = ({ tickets, onCardClick, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Tickets</h2>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading tickets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.length === 0 ? (
          <div className="col-span-full">
            <p className="text-gray-500 text-center py-8">No customer tickets available</p>
          </div>
        ) : (
          tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onCardClick={onCardClick}
              isClickable={true}
              showCompleteButton={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerTickets;