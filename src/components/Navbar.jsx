import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b-0 px-6 py-4">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800">
            <span className="text-black">CS</span>
            <span className="text-gray-600 ml-1">— Ticket System</span>
          </h1>
        </div>

        
        <div className="flex items-center space-x-6">
          <a href="" className="text-black hover:text-gray-400">Home</a>
          <a href="" className="text-black hover:text-gray-400">FAQ</a>
          <a href="" className="text-black hover:text-gray-400">Changelog</a>
          <a href="" className="text-black hover:text-gray-400">Blog</a>
          <a href="" className="text-black hover:text-gray-400">Download</a>
          <a href="" className="text-black hover:text-gray-400">Contact</a>
          <button className="bg-gradient-to-r from-[#422AD5] to-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium">
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar