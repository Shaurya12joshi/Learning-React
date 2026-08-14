/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "anff",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updatedTodo: (id,todo)=>{},
    toggleComplete: (id)=>{}

})

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext)
}