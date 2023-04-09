import { useEffect, useState } from 'react';

import useCreateTodo from 'hooks/Todos/useCreateTodo';
import useDeleteTodo from 'hooks/Todos/useDeleteTodo';
import useGetTodos from 'hooks/Todos/useGetTodos';

import TodoView from 'views/TodoView';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const { data: getTodos } = useGetTodos();
  const { createTodo } = useCreateTodo(setTodos);
  const { deleteTodo } = useDeleteTodo(setTodos);

  useEffect(() => {
    setTodos(getTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTodos]);

  const onSubmitTodo = todo => e => {
    e.preventDefault();
    if (!todo) return;

    createTodo({ todo });
  };

  const onDeleteTodo = id => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteTodo({ id });
    }
  };

  return <TodoView todoList={todos} onSubmitTodo={onSubmitTodo} onDeleteTodo={onDeleteTodo} />;
};

export default Todo;
