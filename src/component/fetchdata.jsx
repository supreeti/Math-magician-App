import { useState, useEffect } from 'react';

const FetchData = () => {
  const [quote, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          {
            headers: {
              'X-Api-Key': 'yLpVtNRgYO0rmsTwWWlZoA==qY5MvAay3LrWTA4Q',
            },
          },
        );
        const data = await response.json();
        const { author, quote } = data[0];
        setData({ author, quote });
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch the quote.');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quotes">
      {isLoading && <p>Page Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          <p>{quote.quote}</p>
          <h2>{quote.author}</h2>
        </>
      )}
    </div>
  );
};

export default FetchData;
