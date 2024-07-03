// src/components/Component3.js
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';

const Component3 = () => {
  const { multiplyLastEntry } = useContext(AppContext);

  return (
    <button style={{ border: '1px solid black' }} onClick={multiplyLastEntry}>
      Multiply Last Entry
    </button>
  );
};

export default Component3;
