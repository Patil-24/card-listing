import React from 'react';

const Search = ({ searchTerm, onSearchTermChange }) => {
  const handleSearchChange = event => {
    onSearchTermChange(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by card name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
