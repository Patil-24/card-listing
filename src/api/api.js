const mockApi = (page, perPage, searchTerm, cardType) => {
    
  
  // Mock JSON data


    const data = [
      {
        name: 'Mixmax',
        budgetName: 'Software subscription',
        ownerId: 1,
        spent: {
          value: 100,
          currency: 'SGD'
        },
        availableToSpend: {
          value: 1000,
          currency: 'SGD'
        },
        cardType: 'burner',
        expiry: '9 Feb',
        limit: 100,
        status: 'active'
      },
      {
        name: 'Quickbooks',
        budgetName: 'Software subscription',
        ownerId: 2,
        spent: {
          value: 50,
          currency: 'SGD'
        },
        availableToSpend: {
          value: 250,
          currency: 'SGD'
        },
        cardType: 'subscription',
        limit: 10,
        status: 'active'
      },
      {
        name: 'Quickbooks',
        budgetName: 'Software subscription',
        ownerId: 2,
        spent: {
          value: 50,
          currency: 'SGD'
        },
        availableToSpend: {
          value: 250,
          currency: 'SGD'
        },
        cardType: 'subscription',
        limit: 10,
        status: 'active'
      },
      {
        name: 'Mixmax',
        budgetName: 'Software subscription',
        ownerId: 1,
        spent: {
          value: 100,
          currency: 'SGD'
        },
        availableToSpend: {
          value: 1000,
          currency: 'SGD'
        },
        cardType: 'burner',
        expiry: '9 Feb',
        limit: 100,
        status: 'active'
      },
      {
        name: 'Quickbooks',
        budgetName: 'Software subscription',
        ownerId: 2,
        spent: {
          value: 50,
          currency: 'SGD'
        },
        availableToSpend: {
          value: 250,
          currency: 'SGD'
        },
        cardType: 'subscription',
        limit: 10,
        status: 'active'
      },
      {
        name: 'Quickbooks',
        budgetName: 'Software subscription',
        ownerId: 2,
        spent: {
          value: 50,
          currency: 'SGD'
        },
        availableToSpend: {
          value: 250,
          currency: 'SGD'
        },
        cardType: 'subscription',
        limit: 10,
        status: 'active'
      }
    ];
  
    // Apply pagination and filtering
    let filteredData = data.filter(card => {
      if (cardType === 'all') {
        return true;
      } else {
        return card.cardType === cardType;
      }
    });
  
    if (searchTerm) {
      filteredData = filteredData.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);
  
    // Simulate API delay
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: paginatedData,
          page,
          perPage,
          total: filteredData.length
        });
      }, 500);
    });
  };
  
  export default mockApi;
  