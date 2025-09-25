import React from 'react';
import TicketCard from './TicketCard';

const TaskStatus = ({ tickets, onComplete, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Task Status</h2>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Task Status</h2>
      <div className="space-y-4">
        {tickets.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No tasks in progress</p>
        ) : (
          tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onComplete={onComplete}
              isClickable={false}
              showCompleteButton={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;