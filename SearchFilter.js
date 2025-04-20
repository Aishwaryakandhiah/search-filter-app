import React, { useState } from 'react';
import data from './data';
import './styles.css';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search Filter App</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
        {filteredData.length === 0 && <li>No matches found</li>}
      </ul>
    </div>
  );
};

export default SearchFilter;
