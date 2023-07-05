import React from 'react';

const Filter = ({ cardType, onCardTypeChange }) => {
  const handleSelectChange = event => {
    const value = event.target.value;
    onCardTypeChange(value);
  };

  return (
    <div className="filter">
      <select value={cardType} onChange={handleSelectChange}>
        <option value="all">Filter</option>
        <option value="burner">Burner</option>
        <option value="subscription">Subscription</option>
      </select>
    </div>
  );
};

export default Filter;
