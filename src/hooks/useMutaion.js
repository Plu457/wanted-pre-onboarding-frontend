import { useReducer, useCallback } from 'react';

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return { ...state, isLoading: true };
    case 'LOADING_SUCCESS':
      return { ...state, data: action.payload, isLoading: false };
    case 'LOADING_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

const useMutation = (fetchAPI, { onSuccess, onError }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading, error } = state;

  const mutation = useCallback(
    async requestData => {
      try {
        dispatch({ type: 'LOADING_START' });

        const response = await fetchAPI(requestData);
        if (response.status === 201) {
          if (onSuccess) onSuccess(requestData);
          return;
        }

        if (!response.ok) {
          const { error, message, statusCode } = await response.json();
          throw new Error(`statusCode: ${statusCode}, message: ${message}, error: ${error}`);
        }

        const responseData = await response.json();

        dispatch({ type: 'LOADING_SUCCESS', payload: responseData });

        if (onSuccess) onSuccess(responseData);
      } catch (error) {
        dispatch({ type: 'LOADING_ERROR', payload: error });
        if (onError) onError(error);
      }
    },
    [fetchAPI, onSuccess, onError],
  );

  return [mutation, { data, isLoading, error, isError: error !== null }];
};

export default useMutation;
