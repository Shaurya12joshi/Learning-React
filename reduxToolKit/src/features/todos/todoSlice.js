import { createSlice, nanoid } from "@reduxjs/toolkit";
// intial state of the store
const initialState = {
    todos:[],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        // hamesha state aur action ko parameter ke roop me pass karna hota hai
        addTodo: (state, action)=>{
            const todos = {
                id: nanoid(),
                // payload ek object hota hai jisme hum data bhejte hai
                text: action.payload,
            }
            state.todos.push(todos)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            state.todos.map((todos)=>{
                if(todos.id === action.payload.id){
                    todos.text = action.payload.text
                }
            })
        }
    }
})
// ye syntax hai jisse hum action ko export karte hai taki hum use kar sake
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer