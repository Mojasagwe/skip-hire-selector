import React from 'react';

const SkipFilter = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  resultCount, 
  totalCount 
}) => {
  return (
    <div className="mb-6 bg-neutral-900 p-4 rounded-lg">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-white font-semibold">Filters:</span>
        
        {/* Allowed on Road Filter */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300">Road Placement:</label>
          <select 
            value={filters.allowedOnRoad === null ? 'all' : filters.allowedOnRoad.toString()}
            onChange={(e) => onFilterChange('allowedOnRoad', e.target.value === 'all' ? null : e.target.value === 'true')}
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
            onChange={(e) => onFilterChange('allowsHeavyWaste', e.target.value === 'all' ? null : e.target.value === 'true')}
            className="bg-neutral-700 text-white px-3 py-1 rounded text-sm"
          >
            <option value="all">All</option>
            <option value="true">Heavy Waste Allowed</option>
            <option value="false">Light Waste Only</option>
          </select>
        </div>

        {/* Size Filter */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300">Size:</label>
          <select 
            value={filters.sizeCategory || 'all'}
            onChange={(e) => onFilterChange('sizeCategory', e.target.value === 'all' ? null : e.target.value)}
            className="bg-neutral-700 text-white px-3 py-1 rounded text-sm"
          >
            <option value="all">All Sizes</option>
            <option value="small">Small (4-8 yards)</option>
            <option value="medium">Medium (10-16 yards)</option>
            <option value="large">Large (20+ yards)</option>
          </select>
        </div>

        {/* Price Sorting Filter */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300">Sort by Price:</label>
          <select 
            value={filters.priceSort || 'none'}
            onChange={(e) => onFilterChange('priceSort', e.target.value === 'none' ? null : e.target.value)}
            className="bg-neutral-700 text-white px-3 py-1 rounded text-sm"
          >
            <option value="none">Default</option>
            <option value="lowToHigh">Lowest to Highest</option>
            <option value="highToLow">Highest to Lowest</option>
          </select>
        </div>

        {/* Clear Filters */}
        <button 
          onClick={onClearFilters}
          className="bg-[#2563EB] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB]/80 transition-colors"
        >
          Clear Filters
        </button>

        {/* Results Count */}
        <span className="text-sm text-gray-400">
          Showing {resultCount} of {totalCount} skips
        </span>
      </div>
    </div>
  );
};

export default SkipFilter; 