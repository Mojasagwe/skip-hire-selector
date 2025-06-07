import React from 'react';
import { calculateTotalPrice, getSkipImageUrl } from '../data/skipData';

const SkipCard = ({ 
  skip, 
  isSelected, 
  quantity, 
  onCardSelection, 
  onIncreaseQuantity, 
  onDecreaseQuantity 
}) => {
  return (
    <div 
      className={`
        h-80
        border-2 
        rounded-lg 
        cursor-pointer 
        transition-all
        overflow-hidden
        ${isSelected 
          ? 'border-[#2563EB] ring-2 ring-[#2563EB]/50' 
          : 'border-transparent hover:border-[#2563EB]/60'
        }
      `}
      onClick={() => onCardSelection(skip.id)}
    >
      {/* Top Section - Skip Image (60%) */}
      <div className="h-3/5 relative overflow-hidden">
        {/* Skip Image */}
        <img 
          src={getSkipImageUrl(skip.size)}
          alt={`${skip.size} Yard Skip`} 
          className="w-full h-full object-cover" 
        />

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-2 right-2 bg-[#2563EB] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            ✓
          </div>
        )}
      </div>

      {/* Bottom Section - Skip Details (40%) */}
      <div className="h-2/5 p-3 pb-2 flex flex-col relative bg-[#292929]">
        {/* Warning Icons - Top Right of Details Section */}
        <div className="absolute top-2 right-2 flex gap-2">
          {/* Road Placement Warning */}
          {!skip.allowed_on_road && (
            <div className="relative group">
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
                className="w-5 h-5 text-yellow-500 shrink-0"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Private land only - road placement not allowed
                <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-black"></div>
              </div>
            </div>
          )}

          {/* Heavy Waste Warning */}
          {!skip.allows_heavy_waste && (
            <div className="relative group">
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
                className="w-5 h-5 text-red-500 shrink-0"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Light waste only - heavy waste not allowed
                <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-black"></div>
              </div>
            </div>
          )}
        </div>

        {/* Skip Details */}
        <div className="text-left">
          {/* Skip Size */}
          <div className="text-lg font-bold text-white mb-1">{skip.size} Yard</div>
          
          {/* Hire Period */}
          <div className="text-lg text-white mb-1">Hire Period {skip.hire_period_days} days</div>
          
          {/* Price and Quantity Selector - Inline */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-[#2563EB]">£{calculateTotalPrice(skip)}</div>
            
            <div className="flex items-center bg-gray-100 rounded text-sm">
              <button
                onClick={(e) => onDecreaseQuantity(skip.id, e)}
                className="px-1.5 py-0.5 text-[#2563EB] hover:bg-gray-200 rounded-l transition-colors font-medium"
                disabled={quantity === 0}
              >
                -
              </button>
              <span className="px-1.5 py-0.5 text-[#2563EB] bg-gray-100 min-w-[1.5rem] text-center font-medium">
                {quantity}
              </span>
              <button
                onClick={(e) => onIncreaseQuantity(skip.id, e)}
                className="px-1.5 py-0.5 text-[#2563EB] hover:bg-gray-200 rounded-r transition-colors font-medium"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipCard; 