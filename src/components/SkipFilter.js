import React from 'react';

const SkipFilter = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  resultCount, 
  totalCount 
}) => {
  return (
    <div className="mb-6 bg-neutral-800 p-4 rounded-lg">
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

        {/* Clear Filters */}
        <button 
          onClick={onClearFilters}
          className="bg-[#0037C1] text-white px-3 py-1 rounded text-sm hover:bg-[#0037C1]/80 transition-colors"
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