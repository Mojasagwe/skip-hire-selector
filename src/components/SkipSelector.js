import React, { useState, useMemo } from 'react';
import { skipData } from '../data/skipData';
import SkipFilter from './SkipFilter';
import SkipCard from './SkipCard';

const SkipSelector = ({ selectedCards, setSelectedCards, skipQuantities, setSkipQuantities }) => {
  const [filters, setFilters] = useState({
    allowedOnRoad: null, // null = all, true = road allowed, false = road not allowed
    allowsHeavyWaste: null // null = all, true = heavy waste allowed, false = heavy waste not allowed
  });

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



  return (
    <div className="skip-selector bg-neutral-900 min-h-screen text-white p-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Choose Your Skip Size</h2>
        <p className="text-xl text-center text-gray-300 mb-8">Select the skip size that best suits your needs</p>
        
        {/* Filter Controls */}
        <SkipFilter 
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          resultCount={filteredSkips.length}
          totalCount={skipData.length}
        />
        
        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {filteredSkips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedCards.includes(skip.id)}
              quantity={getQuantity(skip.id)}
              onCardSelection={handleCardSelection}
              onIncreaseQuantity={increaseQuantity}
              onDecreaseQuantity={decreaseQuantity}
            />
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