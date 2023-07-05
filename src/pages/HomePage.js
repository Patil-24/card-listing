import React, { useState, useEffect } from 'react';
import Tabs from '../components/Tabs';
import Search from '../components/Search';
import Filter from '../components/Filter';
import CardList from '../components/CardList';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Your');
  const [searchTerm, setSearchTerm] = useState('');
  const [cardType, setCardType] = useState('all');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  const handleSearchTermChange = term => {
    setSearchTerm(term);
  };

  const handleCardTypeChange = type => {
    setCardType(type);
  };

  return (
    <div className="container">
      <div className="header">
        <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="search-filter-section">
          <Search searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
          <Filter cardType={cardType} onCardTypeChange={handleCardTypeChange} />
        </div>
      </div>
      <CardList activeTab={activeTab} searchTerm={searchTerm} cardType={cardType} />
    </div>
  );
};

export default HomePage;
