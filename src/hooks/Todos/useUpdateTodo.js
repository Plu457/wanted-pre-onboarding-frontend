import useMutation from 'hooks/useMutaion';
import { Fetch } from 'utils';

const useUpdateTodo = setTodos => {
  const [updateTodo] = useMutation(Fetch.updateTodo, {
    onSuccess: res => {
      setTodos(prev => {
        return prev.map(todo => {
          if (todo.id === res.id) return res;

          return todo;
        });
      });
    },
  });

  return { updateTodo };
};

export default useUpdateTodo;
