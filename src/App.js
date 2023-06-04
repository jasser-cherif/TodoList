import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = e => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      title: newTodo
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Ajouter</button>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;

