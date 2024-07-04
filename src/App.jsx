// src/App.js
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>Multiply Last Entry</h1>
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    </AppProvider>
  );
};

export default App;
