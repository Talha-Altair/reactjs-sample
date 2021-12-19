import React, { useState, useRef, useEffect } from 'react';
import Todolist from './Todolist';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todos';

function App() {

  const [todos, setTodos] = useState([]);
  const todonameref = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) { setTodos(storedTodos); }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleaddtodo(e) {

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

  function handlecleartodo() {
    setTodos([]);
  }

  return (
    <>
      <Todolist todos={todos} />
      <input ref={todonameref} type="text" />
      <button onClick={handleaddtodo} >Add</button>
      <button onClick={handlecleartodo}>clear</button>
    </>
  );
}

export default App;
