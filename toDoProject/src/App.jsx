/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import { TodoProvider } from "./context"
import { TodoForm, TodoItem } from "./components"

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todos)=>{
    setTodos((prev)=>[{id:Date.now(),...todos}, ...prev])
  }
  const updatedTodo = (id,todos)=>{
    setTodos((prev)=> prev.map((prevTodos)=>(prevTodos.id) === id? todos : prevTodos) )
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevTodos)=> prevTodos.id !== id))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodos)=>(prevTodos.id === id ? {...prevTodos,completed:!prevTodos.completed} : prevTodos )) )
  }
// to load already existing todos we will use useEffect
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
    
  },[])

  // to add todos to local storage->
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
               {todos.map((todos)=>(
                // key is given bcz we need to differentiate between divs
                <div className="w-full mb-3" key={todos.id}>
                  <TodoItem todos={todos}/>
                </div>
               ))}

            </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
