import useGetTodos from 'hooks/Todos/useGetTodos';
import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const { data: getTodos } = useGetTodos();

  return <h1>Hello Todo</h1>;
};

export default Todo;
