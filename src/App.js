import React, { useState } from 'react';
import ProcessPath from './components/ProcessPath';
import SkipSelector from './pages/SkipSelector';
import ReviewSidebar from './components/ReviewSidebar';
import MobileCartButton from './components/MobileCartButton';
import './App.css';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [skipQuantities, setSkipQuantities] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App relative">
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
      <MobileCartButton 
        selectedCount={selectedCards.length}
        onClick={() => setIsSidebarOpen(true)}
      />

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
