import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Supprimer</button>
    </div>
  );
};

export default TodoItem;
