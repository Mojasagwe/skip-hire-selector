import React, { useState } from 'react';

const ProcessPath = ({ selectedCards = [], skipQuantities = {}, onReviewClick }) => {
  const [currentStep, setCurrentStep] = useState(3); // Set to "Select Skip" step
  const maxAllowedStep = 3; // Only allow up to "Select Skip" for now



  const steps = [
    {
      id: 1,
      name: 'Postcode',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Waste Type',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          <line x1="10" x2="10" y1="11" y2="17"></line>
          <line x1="14" x2="14" y1="11" y2="17"></line>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Select Skip',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
          <path d="M15 18H9"></path>
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
          <circle cx="17" cy="18" r="2"></circle>
          <circle cx="7" cy="18" r="2"></circle>
        </svg>
      )
    },
    {
      id: 4,
      name: 'Permit Check',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      )
    },
    {
      id: 5,
      name: 'Choose Date',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      )
    },
    {
      id: 6,
      name: 'Payment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      )
    }
  ];

  return (
    <nav className="bg-neutral-900 p-2 md:p-4 md:sticky md:top-0 md:z-50">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between">
          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-1 md:space-x-3 overflow-x-auto scrollbar-hide px-3 flex-1">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Button */}
              <button 
                className={`flex items-center whitespace-nowrap transition-colors flex-shrink-0 ${
                  step.id <= maxAllowedStep 
                    ? 'cursor-pointer' 
                    : 'cursor-not-allowed opacity-50'
                } ${
                  currentStep >= step.id 
                    ? 'text-[#0037C1] hover:text-[#0037C1]' 
                    : step.id <= maxAllowedStep
                    ? 'text-gray-500 hover:text-gray-400'
                    : 'text-gray-600'
                }`}
                onClick={() => step.id <= maxAllowedStep && setCurrentStep(step.id)}
                disabled={step.id > maxAllowedStep}
              >
                <div className={`p-1 md:p-1.5 rounded-full ${
                  currentStep >= step.id 
                    ? 'bg-[#0037C1]' 
                    : step.id <= maxAllowedStep 
                    ? 'bg-gray-600' 
                    : 'bg-gray-700'
                }`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <span className="ml-1 md:ml-1.5 text-white text-xs font-medium hidden sm:inline">
                  {step.name}
                </span>
              </button>

              {/* Separator Line */}
              {index < steps.length - 1 && (
                <div className={`w-6 md:w-12 h-px ${
                  currentStep > step.id ? 'bg-[#0037C1]' : 'bg-[#2A2A2A]'
                } flex-shrink-0 hidden xl:block`}></div>
              )}
            </React.Fragment>
          ))}
          </div>

          {/* Review Button */}
          {selectedCards.length > 0 && (
            <button 
              onClick={onReviewClick}
              className="hidden md:flex items-center bg-[#0037C1] hover:bg-[#0037C1]/90 text-white px-4 py-2 rounded-md ml-4 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4m-5 0v-5a3 3 0 0 1 6 0v5m-6 0h6"></path>
              </svg>
              <span className="text-sm font-medium">Review ({selectedCards.length})</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ProcessPath; 