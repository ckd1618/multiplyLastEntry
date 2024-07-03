// src/components/Component2.js
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Component2 = () => {
  const { entries } = useContext(AppContext);

  return (
    <div
      style={{
        height: '200px',
        overflowY: 'scroll',
        border: '1px solid black',
      }}
    >
      {entries.map((entry, index) => (
        <div key={index}>{entry}</div>
      ))}
    </div>
  );
};

export default Component2;
