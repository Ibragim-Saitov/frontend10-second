import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForms from "./ToDoForms";


function App() {
  const [todos, setTodos] = useState([]);
  const addTask = (input) => {
    if(input) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: input,
        complete: false,
      }
      setTodos([...todos, newItem]);
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
    )
    ])
  }

  return (
    <main className="flex flex-col items-center">
      {console.log(todos)}
    <h1 className="text-center text-sky-300 font-bold text-[32px] sm:mt-[70px] mt-10 pb-3 border-b-2 border-gray-200 sm:w-[415px] inline-block">Количество задач:{todos.length}</h1>
    {todos.map((todo) => {
      return (
        <ToDo key={todo.id} todo = {todo} removeTask = {removeTask} handleToggle = {handleToggle}/>
      )
    })}
    <ToDoForms addTask = {addTask}/>
    </main>
  );
}

export default App;
