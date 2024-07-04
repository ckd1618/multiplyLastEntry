import React, { createContext, useState, useCallback } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  // Using useCallback to memoize the function
  const multiplyLastEntry = useCallback((multiplier) => {
    setEntries((prevEntries) => {
      if (prevEntries.length === 0) return prevEntries;
      const lastEntry = prevEntries[prevEntries.length - 1];
      let newEntry;
      if (typeof lastEntry === 'number') {
        newEntry = lastEntry * multiplier;
      } else {
        newEntry = lastEntry.repeat(multiplier);
      }
      return [...prevEntries.slice(0, -1), newEntry];
    });
  }, []);

  return (
    <AppContext.Provider value={{ 
      entries, 
      setEntries, 
      multiplyCallback: multiplyLastEntry
    }}>
      {children}
    </AppContext.Provider>
  );
};
