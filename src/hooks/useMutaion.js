import { useCallback, useState } from 'react';

const useMutation = (fetchAPI, { onSuccess, onError }) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const mutation = useCallback(
    async requestData => {
      try {
        setIsLoading(true);

        const response = await fetchAPI(requestData);
        if (response.status >= 200 && response.status < 300) {
          if (onSuccess) onSuccess(requestData);
          return;
        }

        if (!response.ok) {
          const { error, message, statusCode } = await response.json();
          throw new Error(`statusCode: ${statusCode}, message: ${message}, error: ${error}`);
        }

        const responseData = await response.json();
        setData(responseData);
        if (onSuccess) onSuccess(responseData);
      } catch (error) {
        setError(error);
        if (onError) onError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchAPI, onSuccess, onError],
  );

  return [mutation, { data, isLoading, error, isError: error !== null }];
};

export default useMutation;
