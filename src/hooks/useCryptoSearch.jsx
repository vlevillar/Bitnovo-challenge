import { useState, useEffect } from 'react';

const useCryptoSearch = (currencies) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  useEffect(() => {
    const filterCurrencies = () => {
      setFilteredCurrencies(
        currencies.filter((crypto) =>
          crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    };

    filterCurrencies();
  }, [searchQuery, currencies]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const resetSearch = () => {
    setSearchQuery('');
  };

  return {
    searchQuery,
    filteredCurrencies,
    handleSearch,
    resetSearch,
  };
};

export default useCryptoSearch;
