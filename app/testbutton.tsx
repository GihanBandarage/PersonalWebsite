"use client";
import React, { useState } from 'react';

const TestButton = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  };
  
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md m-4">
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Click Me!
      </button>
      <p className="mt-2">
        Button clicked: {count} times
      </p>
    </div>
  );
};

export default TestButton;