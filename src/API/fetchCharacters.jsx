import { useEffect, useState } from "react";

// Custom hook to consume the Rick and Morty API
const useRickAndMortyApi = (endpoint) => {
  const [data, setData] = useState([]); // State to store the data
  const [loading, setLoading] = useState(true); // State for login management
  const [error, setError] = useState(null); // State to handling errors

  const fetchAllData = async (url, accumulatedData = []) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      // Acumulate of responses in a single array
      const newData = [...accumulatedData, ...result.results];

      // If there is one next page, we call the function recursively
      if (result.info.next) {
        await fetchAllData(result.info.next, newData);
      } else {
        // if there isn´t more pages, we update the states
        setData(newData);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message || 'Error fetching data');
      setLoading(false);
    }
  };

  // useEffect for fetch when endpoint changes
  useEffect(() => {
    if (endpoint) {
      setLoading(true);
      setError(null);
      setData([]); // Clear recently data
      const baseUrl = 'https://rickandmortyapi.com/api';
      const fullUrl = `${baseUrl}/${endpoint}`;
      fetchAllData(fullUrl);
    }
  }, [endpoint]); // The fetch will be executed when the endpoint changes   

  return { data, loading, error };
};

export default useRickAndMortyApi;