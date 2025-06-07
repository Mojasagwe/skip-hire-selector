import React from 'react';

const MobileCartButton = ({ selectedCount, onClick }) => {
  if (selectedCount === 0) return null;

  return (
    <button
      onClick={onClick}
      className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#0037C1] hover:bg-[#0037C1]/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-30"
    >
      <div className="relative">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.09 9H5.12"></path>
        </svg>
        {/* Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {selectedCount}
        </div>
      </div>
    </button>
  );
};

export default MobileCartButton; 