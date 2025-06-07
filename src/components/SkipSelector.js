import React, { useState, useMemo } from 'react';

const SkipSelector = ({ selectedCards, setSelectedCards, skipQuantities, setSkipQuantities }) => {
  const [filters, setFilters] = useState({
    allowedOnRoad: null, // null = all, true = road allowed, false = road not allowed
    allowsHeavyWaste: null // null = all, true = heavy waste allowed, false = heavy waste not allowed
  });

  // Skip data
  const skipData = [
    {
      "id": 17933,
      "size": 4,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 278,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:52.813",
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17934,
      "size": 6,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 305,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:52.992",
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17935,
      "size": 8,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 375,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.171",
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17936,
      "size": 10,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 400,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.339",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17937,
      "size": 12,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 439,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.516",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17938,
      "size": 14,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 470,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.69",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 17939,
      "size": 16,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 496,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.876",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    },
    {
      "id": 15124,
      "size": 20,
      "hire_period_days": 14,
      "transport_cost": 248,
      "per_tonne_cost": 248,
      "price_before_vat": 992,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:40.344435",
      "updated_at": "2025-04-07T13:16:52.434",
      "allowed_on_road": false,
      "allows_heavy_waste": true
    },
    {
      "id": 15125,
      "size": 40,
      "hire_period_days": 14,
      "transport_cost": 248,
      "per_tonne_cost": 248,
      "price_before_vat": 992,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:40.344435",
      "updated_at": "2025-04-07T13:16:52.603",
      "allowed_on_road": false,
      "allows_heavy_waste": false
    }
  ];

  // Filter the skip data based on current filters
  const filteredSkips = useMemo(() => {
    return skipData.filter(skip => {
      // Filter by allowed_on_road
      if (filters.allowedOnRoad !== null && skip.allowed_on_road !== filters.allowedOnRoad) {
        return false;
      }
      
      // Filter by allows_heavy_waste
      if (filters.allowsHeavyWaste !== null && skip.allows_heavy_waste !== filters.allowsHeavyWaste) {
        return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleCardSelection = (cardId) => {
    setSelectedCards(prev => {
      if (prev.includes(cardId)) {
        // Deselecting: remove from selected cards and set quantity to 0
        setSkipQuantities(prevQuantities => ({
          ...prevQuantities,
          [cardId]: 0
        }));
        return prev.filter(id => id !== cardId);
      } else {
        // Selecting: add to selected cards and set quantity to 1
        setSkipQuantities(prevQuantities => ({
          ...prevQuantities,
          [cardId]: 1
        }));
        return [...prev, cardId];
      }
    });
  };

  const increaseQuantity = (skipId, event) => {
    event.stopPropagation(); // Prevent card selection
    
    // If card is not selected, select it first
    if (!selectedCards.includes(skipId)) {
      setSelectedCards(prev => [...prev, skipId]);
    }
    
    setSkipQuantities(prev => ({
      ...prev,
      [skipId]: (prev[skipId] || 0) + 1
    }));
  };

  const decreaseQuantity = (skipId, event) => {
    event.stopPropagation(); // Prevent card selection
    const currentQuantity = skipQuantities[skipId] || 0;
    
    if (currentQuantity <= 1) {
      // If quantity is 1 or less, deselect the card
      setSelectedCards(prev => prev.filter(id => id !== skipId));
      setSkipQuantities(prev => ({
        ...prev,
        [skipId]: 0
      }));
    } else {
      // Otherwise just decrease quantity
      setSkipQuantities(prev => ({
        ...prev,
        [skipId]: currentQuantity - 1
      }));
    }
  };

  const getQuantity = (skipId) => {
    return skipQuantities[skipId] || 0;
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      allowedOnRoad: null,
      allowsHeavyWaste: null
    });
  };

  const calculateTotalPrice = (skip) => {
    return Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  };

  return (
    <div className="skip-selector bg-neutral-900 min-h-screen text-white p-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Choose Your Skip Size</h2>
        <p className="text-xl text-center text-gray-300 mb-8">Select the skip size that best suits your needs</p>
        
        {/* Filter Controls */}
        <div className="mb-6 bg-neutral-800 p-4 rounded-lg">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-white font-semibold">Filters:</span>
            
            {/* Allowed on Road Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300">Road Placement:</label>
              <select 
                value={filters.allowedOnRoad === null ? 'all' : filters.allowedOnRoad.toString()}
                onChange={(e) => handleFilterChange('allowedOnRoad', e.target.value === 'all' ? null : e.target.value === 'true')}
                className="bg-neutral-700 text-white px-3 py-1 rounded text-sm"
              >
                <option value="all">All</option>
                <option value="true">Road Allowed</option>
                <option value="false">Private Land Only</option>
              </select>
            </div>

            {/* Heavy Waste Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300">Heavy Waste:</label>
              <select 
                value={filters.allowsHeavyWaste === null ? 'all' : filters.allowsHeavyWaste.toString()}
                onChange={(e) => handleFilterChange('allowsHeavyWaste', e.target.value === 'all' ? null : e.target.value === 'true')}
                className="bg-neutral-700 text-white px-3 py-1 rounded text-sm"
              >
                <option value="all">All</option>
                <option value="true">Heavy Waste Allowed</option>
                <option value="false">Light Waste Only</option>
              </select>
            </div>

            {/* Clear Filters */}
            <button 
              onClick={clearFilters}
              className="bg-[#0037C1] text-white px-3 py-1 rounded text-sm hover:bg-[#0037C1]/80 transition-colors"
            >
              Clear Filters
            </button>

            {/* Results Count */}
            <span className="text-sm text-gray-400">
              Showing {filteredSkips.length} of {skipData.length} skips
            </span>
          </div>
        </div>
        
        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {filteredSkips.map((skip) => (
            <div 
              key={skip.id}
              className={`
                h-80
                border-2 
                rounded-lg 
                cursor-pointer 
                transition-all
                overflow-hidden
                ${selectedCards.includes(skip.id) 
                  ? 'border-[#0037C1] ring-2 ring-[#0037C1]/50' 
                  : 'border-transparent hover:border-[#0037C1]/60'
                }
              `}
              onClick={() => handleCardSelection(skip.id)}
            >
              {/* Top Section - Skip Image (60%) */}
              <div className="h-3/5 relative overflow-hidden">
                {/* Skip Image */}
                <img 
                  src={skip.size >= 20 
                    ? "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg"
                    : skip.size >= 10
                    ? "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
                    : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
                  }
                  alt={`${skip.size} Yard Skip`} 
                  className="w-full h-full object-cover" 
                />

                {/* Selection Indicator */}
                {selectedCards.includes(skip.id) && (
                  <div className="absolute top-2 right-2 bg-[#0037C1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
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
                  <div className="text-lg font-bold text-white mb-1">Hire Period {skip.hire_period_days} days</div>
                  
                  {/* Price and Quantity Selector - Inline */}
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-[#0037C1]">£{calculateTotalPrice(skip)}</div>
                    
                    <div className="flex items-center bg-neutral-700 rounded text-sm">
                      <button
                        onClick={(e) => decreaseQuantity(skip.id, e)}
                        className="px-1.5 py-0.5 text-white hover:bg-neutral-600 rounded-l transition-colors"
                        disabled={getQuantity(skip.id) === 0}
                      >
                        -
                      </button>
                      <span className="px-1.5 py-0.5 text-white bg-neutral-800 min-w-[1.5rem] text-center">
                        {getQuantity(skip.id)}
                      </span>
                      <button
                        onClick={(e) => increaseQuantity(skip.id, e)}
                        className="px-1.5 py-0.5 text-white hover:bg-neutral-600 rounded-r transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredSkips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No skips match your current filters.</p>
            <button 
              onClick={clearFilters}
              className="mt-4 bg-[#0037C1] text-white px-6 py-2 rounded hover:bg-[#0037C1]/80 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipSelector; 