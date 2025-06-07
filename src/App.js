import React, { useState } from 'react';
import ProcessPath from './components/ProcessPath';
import SkipSelector from './components/SkipSelector';
import ReviewSidebar from './components/ReviewSidebar';
import './App.css';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [skipQuantities, setSkipQuantities] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <ProcessPath 
        selectedCards={selectedCards}
        skipQuantities={skipQuantities}
        onReviewClick={() => setIsSidebarOpen(true)}
      />
      <SkipSelector 
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        skipQuantities={skipQuantities}
        setSkipQuantities={setSkipQuantities}
      />
      
      {/* Mobile Floating Action Button */}
      {selectedCards.length > 0 && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#0037C1] hover:bg-[#0037C1]/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-30"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.09 9H5.12"></path>
            </svg>
            {/* Badge */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {selectedCards.length}
            </div>
          </div>
        </button>
      )}

      <ReviewSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        selectedCards={selectedCards}
        skipQuantities={skipQuantities}
      />
    </div>
  );
}

export default App;
