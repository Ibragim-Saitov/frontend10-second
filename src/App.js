import { useState } from "react";
import ToDo from './ToDo'
import ToDoForm from "./ToDoForm"

function App() {
    const [todos, setTodos] = useState()[0]

    const addTask = (userInput) =>{
      if(userInput){
        const newItem = {
          id: Math.random().toString(36).substr(from(2), length(9)),
          task: userInput,
          complete: false
        }
        setTodos( [...todos, newItem])
      }
    }
}
const removeTask = (id) =>{
   setTodos([...todos.filter((todo) => todo.id !== id)])
}
const handlerToggle = (id) =>{
     setTodos( [
      ...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
     )])
}

 return(
 <div className="App">
 <header>
 <h1>Список задач: {todos.length}</h1>
 </header>

  {...todo.map((todo) =>{
    <ToDo
    todo={todo}
    key={todo.id}
    removeTask={removeTask}
    handlerToggle={handlerToggle}
    />
  })}
  <ToDoForm addTask={addTask}/>
  </div>
 );

