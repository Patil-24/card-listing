import React, { useState, useEffect } from 'react';
import Card from './Card';
import mockApi from '../api/api';

const CardList = ({ activeTab, searchTerm, cardType }) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCards(activeTab, page, searchTerm, cardType);
  }, [activeTab, page, searchTerm, cardType]);

  const fetchCards = async (activeTab, page, searchTerm, cardType) => {
    try {
      const response = await mockApi(page, 10, searchTerm, cardType);
      setCards(response.data);
      setPage(response.page);
      setTotal(response.total);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="card-list">
      {cards.map(card => (
        <Card
          key={card.name}
          name={card.name}
          budgetName={card.budget_name}
          spent={card.spent}
          availableToSpend={card.available_to_spend}
          cardType={card.card_type}
          expiry={card.expiry}
          limit={card.limit}
          status={card.status}
        />
      ))}
      {cards.length < total && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CardList;
