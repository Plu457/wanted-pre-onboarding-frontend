const TodoItem = ({ onDeleteTodo, onUpdateTodo, onCompleted, id, todo, isCompleted }) => {
  return (
    <li className="flex items-center py-2 gap-2">
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onCompleted({ id, todo, isCompleted: !isCompleted })}
        />
        <span className={`w-full pl-2 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
          {todo}
        </span>
      </label>
      <button
        type="button"
        data-testid="modify-button"
        className="w-16 bg-gray-100 rounded-md text-gray-500 text-sm hover:bg-gray-200"
        onClick={() => onUpdateTodo({ id, todo, isCompleted })}
      >
        수정
      </button>
      <button
        type="button"
        data-testid="delete-button"
        className="w-16 bg-gray-100 rounded-md text-gray-500 text-sm"
        onClick={() => onDeleteTodo(id)}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
