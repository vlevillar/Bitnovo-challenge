import { useState, useEffect } from 'react';

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://payments.pre-bnvo.com/api/v1/currencies';

      try {
        const response = await fetch(apiUrl, {
          headers: {
            'X-Device-Id': process.env.NEXT_PUBLIC_DEVICE_ID,
          },
        });

        const data = await response.json();
        setCurrencies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { currencies, loading, error };
};

export default useCurrencies;
