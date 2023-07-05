import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ['Your', 'All', 'Blocked'];

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
