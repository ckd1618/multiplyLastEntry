import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [multiplyCallback, setMultiplyCallback] = useState(() => () => {});

  return (
    <AppContext.Provider value={{ 
      entries, 
      setEntries, 
      multiplyCallback,
      setMultiplyCallback
    }}>
      {children}
    </AppContext.Provider>
  );
};