// src/contexts/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const multiplyLastEntry = () => {
    if (entries.length > 0) {
      const lastEntry = entries[entries.length - 1];
      const newEntry =
        typeof lastEntry === 'number' ? lastEntry * 2 : lastEntry + lastEntry;
      setEntries([...entries.slice(0, -1), newEntry]);
    }
  };

  return (
    <AppContext.Provider value={{ entries, addEntry, multiplyLastEntry }}>
      {children}
    </AppContext.Provider>
  );
};
