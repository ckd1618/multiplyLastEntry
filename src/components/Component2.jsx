import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

const Component2 = () => {
  const { entries, multiplyCallback } = useContext(AppContext);
  const [internalMultiplier, setInternalMultiplier] = useState(2);

  const handleInternalMultiply = () => {
    multiplyCallback(internalMultiplier);
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
