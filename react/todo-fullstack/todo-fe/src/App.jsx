import { useState } from 'react'
import ToDoList from './ToDoList'
import AddToDo from './AddToDo'
import { useEffect } from "react";
import { getTodos } from "../service/ToDoService";


function App() {
  const [todos, setTodos] = useState([]);

  function updateTodoList() {
    getTodos().then(
      data => setTodos(data)
    );
  }
  useEffect(() => {
    updateTodoList();
  }, []);

  

  return (
    <>
      <ToDoList todos={todos} />
      <AddToDo handleTodoAdded={updateTodoList} />
    </>
  )
}

export default App
