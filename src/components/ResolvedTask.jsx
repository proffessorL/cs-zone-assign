
import TicketCard from './TicketCard';

const ResolvedTask = ({ tickets, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Resolved Task</h2>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading resolved tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Resolved Task</h2>
      <div className="space-y-4">
        {tickets.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No resolved tickets yet</p>
        ) : (
          tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              showCompleteButton={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ResolvedTask;