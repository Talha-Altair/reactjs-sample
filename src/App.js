import React, { useState } from 'react';
import Todolist from './Todolist';

function App() {
  const [todos, setTodos] = useState([{ id : 1, text : 'talha altair', completed : false }]);
  return (
    <>
      <Todolist todos={todos} />
      <input type="text" />
      <button>Add</button>
      <button>clear</button>
    </>
  );
}

export default App;
