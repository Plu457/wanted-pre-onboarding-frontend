import { useState, useEffect } from 'react';
import { Storage } from 'utils';
import { Constants } from 'commons';

const useFetch = (fetchAPI, url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!Storage.getAuthToken({ name: Constants.AuthTokenName })) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetchAPI(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}. Response status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error, isError: error !== null };
};

export default useFetch;
