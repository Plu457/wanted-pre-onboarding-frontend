import { useState, useCallback } from 'react';

const useMutation = (fetchAPI, { onSuccess, onError }) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const handleResponse = async response => {
    if (!response.ok) {
      const { error, message, statusCode } = await response.json();
      throw new Error(`statusCode: ${statusCode}, message: ${message}, error: ${error}`);
    }

    const contentType = response.headers.get('Content-Type') || '';
    if (
      (response.status === 200 || response.status === 201) &&
      contentType.includes('application/json')
    ) {
      return await response.json();
    }

    return null;
  };

  const mutation = useCallback(
    async requestData => {
      setIsLoading(true);

      try {
        const response = await fetchAPI(requestData);
        const responseData = await handleResponse(response);

        setData(responseData);
        if (onSuccess) onSuccess(responseData || requestData);
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
