import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <TodoList title="Monday" />
      <TodoList title="Tuesday" />
      <TodoList title="Wed" />
    </div>
  );
}

export default App;
