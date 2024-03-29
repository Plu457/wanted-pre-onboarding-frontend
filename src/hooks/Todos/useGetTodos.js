import useFetch from 'hooks/useFetch';
import { Fetch } from 'utils';

const useGetTodos = () => {
  const url = '/todos';
  const { data } = useFetch(Fetch.getTodos, url);

  return { data };
};

export default useGetTodos;
