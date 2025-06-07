import React, { useMemo } from 'react';

const ReviewSidebar = ({ isOpen, onClose, selectedCards = [], skipQuantities = {} }) => {
  // Skip data (same as in other components)
  const skipData = [
    {
      "id": 17933,
      "size": 4,
      "hire_period_days": 14,
      "price_before_vat": 278,
      "vat": 20,
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17934,
      "size": 6,
      "hire_period_days": 14,
      "price_before_vat": 305,
      "vat": 20,
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17935,
      "size": 8,
      "hire_period_days": 14,
      "price_before_vat": 375,
      "vat": 20,
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17936,
      "size": 10,
      "hire_period_days": 14,
      "price_before_vat": 400,
      "vat": 20,
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17937,
      "size": 12,
      "hire_period_days": 14,
      "price_before_vat": 439,
      "vat": 20,
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17938,
      "size": 14,
      "hire_period_days": 14,
      "price_before_vat": 470,
      "vat": 20,
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17939,
      "size": 16,
      "hire_period_days": 14,
      "price_before_vat": 496,
      "vat": 20,
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 15124,
      "size": 20,
      "hire_period_days": 14,
      "price_before_vat": 992,
      "vat": 20,
      "allowed_on_road": false,
      "allows_heavy_waste": true
    },
    {
      "id": 15125,
      "size": 40,
      "hire_period_days": 14,
      "price_before_vat": 992,
      "vat": 20,
      "allowed_on_road": false,
      "allows_heavy_waste": false
    }
  ];

  // Calculate total amount
  const totalAmount = useMemo(() => {
    return selectedCards.reduce((total, skipId) => {
      const skip = skipData.find(s => s.id === skipId);
      if (skip) {
        const quantity = skipQuantities[skipId] || 0;
        const skipTotal = Math.round(skip.price_before_vat * (1 + skip.vat/100));
        return total + (skipTotal * Math.max(1, quantity));
      }
      return total;
    }, 0);
  }, [selectedCards, skipQuantities]);

  // Get selected skip details
  const selectedSkipDetails = useMemo(() => {
    return selectedCards.map(skipId => {
      const skip = skipData.find(s => s.id === skipId);
      const quantity = skipQuantities[skipId] || 1;
      return {
        ...skip,
        quantity,
        totalPrice: Math.round(skip.price_before_vat * (1 + skip.vat/100)) * quantity
      };
    });
  }, [selectedCards, skipQuantities]);

  const handleContinue = () => {
    // For now, just show an alert or navigate to next stage
    alert('Proceeding to next stage of hiring process...');
    onClose();
  };

  const totalSkips = selectedCards.reduce((total, skipId) => {
    return total + (skipQuantities[skipId] || 1);
  }, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar - Right on desktop/tablet, Left on mobile */}
      <div className={`fixed top-0 h-full bg-neutral-800 text-white z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'md:translate-x-full -translate-x-full'}
        left-0 w-80 max-w-[85vw] md:left-auto md:right-0 md:w-96
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-700">
            <h2 className="text-xl font-bold text-white">Order Review</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Summary</h3>
              <div className="bg-neutral-700 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Number of Skips:</span>
                  <span className="font-semibold">{totalSkips}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#0037C1] border-t border-neutral-600 pt-2 mt-2">
                  <span>Total Amount:</span>
                  <span>£{totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Skip Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Selected Skips</h3>
              <div className="space-y-3">
                {selectedSkipDetails.map((skip) => (
                  <div key={skip.id} className="bg-neutral-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold text-white">{skip.size} Yard Skip</div>
                        <div className="text-sm text-gray-300">Hire Period: {skip.hire_period_days} days</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-300">Qty: {skip.quantity}</div>
                        <div className="font-semibold text-[#0037C1]">£{skip.totalPrice}</div>
                      </div>
                    </div>
                    
                    {/* Warning indicators */}
                    <div className="flex gap-2 text-xs">
                      {!skip.allowed_on_road && (
                        <span className="text-yellow-400">⚠ Private land only</span>
                      )}
                      {!skip.allows_heavy_waste && (
                        <span className="text-red-400">⚠ Light waste only</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-neutral-700">
            <button
              onClick={handleContinue}
              className="w-full bg-[#0037C1] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#0037C1]/90 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSidebar; 