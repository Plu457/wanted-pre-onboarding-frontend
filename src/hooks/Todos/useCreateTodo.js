import { Fetch } from 'utils';
import useMutaion from '../useMutaion';

const useCreateTodo = setTodos => {
  const [createTodo] = useMutaion(Fetch.createTodo, {
    onSuccess: res => {
      setTodos(prev => [...prev, res]);
    },
  });

  return { createTodo };
};

export default useCreateTodo;
