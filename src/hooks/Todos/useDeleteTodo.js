import useMutation from 'hooks/useMutaion';
import { Fetch } from 'utils';

const useDeleteTodo = setTodos => {
  const [deleteTodo] = useMutation(Fetch.deleteTodo, {
    onSuccess: ({ id }) => {
      setTodos(prev => [...prev.filter(prev => prev.id !== id)]);
    },
  });

  return { deleteTodo };
};

export default useDeleteTodo;
