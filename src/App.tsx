import React, { useState } from 'react';
import TodoUpdate from './components/TodoUpdate';

interface Todo {
  id: number | string;
  description: string;
  done: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', description: 'Aprender TypeScript', done: false },
    { id: '2', description: 'Estudiar React', done: false },
  ]);

  const handleUpdateTodo = (id: number | string, description: string) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, description }
        : todo
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map(todo => (
        <TodoUpdate
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </div>
  );
};

export default App;
