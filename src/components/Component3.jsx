import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Component3 = () => {
  const { multiplyCallback } = useContext(AppContext);

  const handleMultiply = (multiplier) => {
    if (!isNaN(multiplier)) {
      multiplyCallback(multiplier);
    }
  };

  return (
    <div>
      <input
        type="number"
        defaultValue={2}
        min="1"
        style={{ width: '50px', marginRight: '10px' }}
      />
      <button onClick={(e) => handleMultiply(parseInt(e.target.previousElementSibling.value, 10))}>
        Multiply Last Entry
      </button>
    </div>
  );
};

export default Component3;
