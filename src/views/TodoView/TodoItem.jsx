import Input from 'components/Input';
import { useState } from 'react';

const TodoItem = ({ onDeleteTodo, onUpdateTodo, onCompleted, id, todo, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleEditChange = e => {
    setEditValue(e.target.value);
  };

  const handleUpdateTodo = () => {
    onUpdateTodo({ id, todo: editValue, isCompleted });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(todo);
  };

  return (
    <li className="flex items-center py-2 gap-2">
      {isEditing ? (
        <EditingView
          editValue={editValue}
          handleEditChange={handleEditChange}
          handleUpdateTodo={handleUpdateTodo}
          handleCancelEdit={handleCancelEdit}
        />
      ) : (
        <DefaultView
          todo={todo}
          isCompleted={isCompleted}
          onCompleted={onCompleted}
          setIsEditing={setIsEditing}
          onDeleteTodo={onDeleteTodo}
          id={id}
        />
      )}
    </li>
  );
};

const DefaultView = ({ todo, isCompleted, onCompleted, setIsEditing, onDeleteTodo, id }) => (
  <>
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
      onClick={() => setIsEditing(true)}
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
  </>
);

const EditingView = ({ editValue, handleEditChange, handleUpdateTodo, handleCancelEdit }) => (
  <>
    <Input data-testid="modify-input" type="text" value={editValue} onChange={handleEditChange} />
    <button
      type="button"
      className="w-16 bg-gray-100 rounded-md text-gray-500 text-sm hover:bg-gray-200"
      data-testid="submit-button"
      onClick={handleUpdateTodo}
    >
      제출
    </button>
    <button
      type="button"
      className="w-16 bg-gray-100 rounded-md text-gray-500 text-sm"
      data-testid="cancel-button"
      onClick={handleCancelEdit}
    >
      취소
    </button>
  </>
);

export default TodoItem;
