import React from 'react';

const ReviewButton = ({ selectedCount, onClick }) => {
  if (selectedCount === 0) return null;

  return (
    <button 
      onClick={onClick}
      className="hidden md:flex items-center bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-4 py-2 rounded-md ml-4 transition-colors"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="mr-2"
      >
        <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4m-5 0v-5a3 3 0 0 1 6 0v5m-6 0h6"></path>
      </svg>
      <span className="text-sm font-medium">Review ({selectedCount})</span>
    </button>
  );
};

export default ReviewButton; 