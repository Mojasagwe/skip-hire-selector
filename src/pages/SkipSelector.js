import React, { useState, useMemo } from 'react';
import { skipData } from '../data/skipData';
import SkipFilter from '../components/SkipFilter';
import SkipCard from '../components/SkipCard';

const SkipSelector = ({ selectedCards, setSelectedCards, skipQuantities, setSkipQuantities }) => {
  const [filters, setFilters] = useState({
    allowedOnRoad: null, // null = all, true = road allowed, false = road not allowed
    allowsHeavyWaste: null, // null = all, true = heavy waste allowed, false = heavy waste not allowed
    sizeCategory: null, // null = all, 'small' = 4-8 yards, 'medium' = 10-16 yards, 'large' = 20+ yards
    priceSort: null // null = default, 'lowToHigh' = lowest to highest, 'highToLow' = highest to lowest
  });

  // Filter and sort the skip data based on current filters
  const filteredSkips = useMemo(() => {
    let result = skipData.filter(skip => {
      // Filter by allowed_on_road
      if (filters.allowedOnRoad !== null && skip.allowed_on_road !== filters.allowedOnRoad) {
        return false;
      }
      
      // Filter by allows_heavy_waste
      if (filters.allowsHeavyWaste !== null && skip.allows_heavy_waste !== filters.allowsHeavyWaste) {
        return false;
      }
      
      // Filter by size category
      if (filters.sizeCategory !== null) {
        if (filters.sizeCategory === 'small' && (skip.size < 4 || skip.size > 8)) {
          return false;
        }
        if (filters.sizeCategory === 'medium' && (skip.size < 10 || skip.size > 16)) {
          return false;
        }
        if (filters.sizeCategory === 'large' && skip.size < 20) {
          return false;
        }
      }
      
      return true;
    });

    // Sort by price if sorting is selected
    if (filters.priceSort === 'lowToHigh') {
      result.sort((a, b) => {
        const priceA = Math.round(a.price_before_vat * (1 + a.vat/100));
        const priceB = Math.round(b.price_before_vat * (1 + b.vat/100));
        return priceA - priceB;
      });
    } else if (filters.priceSort === 'highToLow') {
      result.sort((a, b) => {
        const priceA = Math.round(a.price_before_vat * (1 + a.vat/100));
        const priceB = Math.round(b.price_before_vat * (1 + b.vat/100));
        return priceB - priceA;
      });
    }

    return result;
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
      allowsHeavyWaste: null,
      sizeCategory: null,
      priceSort: null
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
              className="mt-4 bg-[#2563EB] text-white px-6 py-2 rounded hover:bg-[#2563EB]/80 transition-colors"
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