import React from 'react';
import { TodoProvider } from './components/TodoProvider';
import { TodoListComponent } from './components/TodoListComponent';
import { CreateTodoComponent } from './components/CreateTodoComponent';


function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoListComponent />
        <CreateTodoComponent />
      </TodoProvider>
    </div>
  );
}

export default App;
