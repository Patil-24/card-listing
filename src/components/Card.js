import React from 'react';

const Card = ({
  name,
  budgetName,
  spent,
  availableToSpend,
  cardType,
  expiry,
  limit,
  status,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="fire-icon"></div> 
        <div className="card-type">{cardType}</div>
      </div>
      <div className="card-body">
        <div className="budget-name">
          <span className="big-bold-text">{name}</span>
        </div>
        <div className="card-info">
          {spent && (
            <div className="spent-info">
              <div className="label">Spent</div>
              <div className="value">{spent.value}</div>
              <div className="currency">{spent.currency}</div>
            </div>
          )}
          {availableToSpend && (
            <div className="available-info">
              <div className="label">Available to Spend</div>
              <div className="value">{availableToSpend.value}</div>
              <div className="currency">{availableToSpend.currency}</div>
            </div>
          )}
        </div>
        {expiry && <div className="expiry">Expiry: {expiry}</div>}
        {limit && <div className="limit">Limit: {limit}</div>}
        <div className="status">{status}</div>
        <div className="progress-bar">
          <div className="spent-color"></div>
          <div className="balance-color"></div>
        </div>
        <div className="progress-labels">
          <div className="dot spent-dot"></div>
          <div>Spent</div>
          <div className="dot balance-dot"></div>
          <div>Balance</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
