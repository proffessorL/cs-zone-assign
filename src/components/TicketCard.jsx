import React from 'react';

const TicketCard = ({ ticket, onComplete, onCardClick, showCompleteButton = false, isClickable = false }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Open':
                return 'bg-green-100 text-green-800';
            case 'In-Progress':
                return 'bg-yellow-100 text-yellow-800';
            case 'Resolved':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'text-red-600';
            case 'Medium':
                return 'text-yellow-600';
            case 'Low':
                return 'text-green-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div
            className={`bg-white border border-gray-200 rounded-lg p-4 mb-4 ${isClickable ? 'cursor-pointer hover:bg-gray-50 hover:border-purple-300 transition-colors' : ''
                }`}
            onClick={isClickable ? () => onCardClick(ticket.id) : undefined}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{ticket.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                    <span>#{ticket.id}</span>
                    <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority.toUpperCase()} PRIORITY
                    </span>
                    <span>{ticket.customer}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span>{ticket.createdAt}</span>
                    {showCompleteButton && (
                        <button
                            onClick={() => onComplete(ticket.id)}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-medium"
                        >
                            Complete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicketCard;