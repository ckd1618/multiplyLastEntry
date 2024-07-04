import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

const Component2 = () => {
  const { entries, setEntries, setMultiplyCallback } = useContext(AppContext);
  const [internalMultiplier, setInternalMultiplier] = useState(2);

  const multiplyLastEntry = (multiplier) => {
    if (entries.length > 0) {
      const lastEntry = entries[entries.length - 1];
      let newEntry;
      if (typeof lastEntry === 'number') {
        newEntry = lastEntry * multiplier;
      } else {
        newEntry = lastEntry.repeat(multiplier);
      }
      setEntries([...entries.slice(0, -1), newEntry]);
    }
  };

  useEffect(() => {
    setMultiplyCallback(() => multiplyLastEntry);
  }, [entries, setEntries, setMultiplyCallback]);

  const handleInternalMultiply = () => {
    multiplyLastEntry(internalMultiplier);
  };

  return (
    <div>
      <div style={{ height: '200px', overflowY: 'scroll', border: '1px solid black', marginBottom: '10px' }}>
        {entries.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
      <div>
        <input
          type="number"
          value={internalMultiplier}
          onChange={(e) => setInternalMultiplier(parseInt(e.target.value, 10) || 2)}
          min="1"
          style={{ width: '50px', marginRight: '10px' }}
        />
        <button onClick={handleInternalMultiply}>
          Multiply Last Entry (Internal)
        </button>
      </div>
    </div>
  );
};

export default Component2;