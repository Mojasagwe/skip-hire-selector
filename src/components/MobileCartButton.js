import React, { useState, useRef } from 'react';

const MobileCartButton = ({ selectedCount, onClick }) => {
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: 16 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialTouch, setInitialTouch] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const buttonRef = useRef(null);

  const handleStart = (clientX, clientY) => {
    setInitialTouch({ x: clientX, y: clientY });
    setHasMoved(false);
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y
    });
  };

  const handleMove = (clientX, clientY) => {
    // Check if we've moved enough to consider it a drag (5px threshold)
    const moveDistance = Math.sqrt(
      Math.pow(clientX - initialTouch.x, 2) + Math.pow(clientY - initialTouch.y, 2)
    );
    
    if (moveDistance > 5 && !isDragging) {
      setIsDragging(true);
      setHasMoved(true);
    }
    
    if (!isDragging) return;
    
    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;
    
    // Keep button within screen bounds
    const buttonSize = 48; // w-12 h-12 = 48px
    const maxX = window.innerWidth - buttonSize;
    const maxY = window.innerHeight - buttonSize;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
    // Reset after a small delay to allow click to process
    setTimeout(() => setHasMoved(false), 100);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    handleEnd();
  };

  // Handle click (only if not dragging)
  const handleClick = (e) => {
    if (!hasMoved) {
      onClick();
    }
  };

  // Add global event listeners for mouse events
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart.x, dragStart.y]);

  if (selectedCount === 0) return null;

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`md:hidden fixed w-12 h-12 bg-[#2563EB] hover:bg-[#2563EB]/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-20 cursor-move ${isDragging ? 'scale-110' : 'hover:scale-105'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none'
      }}
    >
      <div className="relative">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="22" 
          height="22" 
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
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {selectedCount}
        </div>
      </div>
    </button>
  );
};

export default MobileCartButton; 