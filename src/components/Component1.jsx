import React, { useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Component1 = () => {
  const [input, setInput] = useState('');
  const { entries, setEntries } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = isNaN(input) ? input : Number(input);
    setEntries([...entries, entry]);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or number"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Component1;