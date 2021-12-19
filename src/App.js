import React, { useState, useRef } from 'react';
import Todolist from './Todolist';
import uuidv4 from 'uuid/v4';

function App() {

  const [todos, setTodos] = useState([]);
  const todonameref = useRef();

  function handleaddtodo(e){

    const name = todonameref.current.value;

    if (name === '') return;

    const newtodo = {
      text: todonameref.current.value,
      id: uuidv4(),
      completed: false
    }

    setTodos(prevTodos => {
      return [...prevTodos, newtodo];
    });
    todonameref.current.value = null;

  }



  return (
    <>
      <Todolist todos={todos} />
      <input ref={ todonameref } type="text" />
      <button onClick={handleaddtodo} >Add</button>
      <button>clear</button>
    </>
  );
}

export default App;
