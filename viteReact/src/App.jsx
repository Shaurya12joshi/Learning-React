import { useState } from "react"
import First from "./First"
function App() {
  let [counter, setCounter] = useState(15) 
  const addCounter= ()=>{
    setCounter(counter+1)
    if(counter>=20){
      setCounter(counter=20)
    }
  }
  const removeCounter=()=>{
    setCounter(counter-1)
    if(counter<=0){
      setCounter(counter=0)
    }
  }
  
  return (
    <>
    <First/>
    <h1>Vite kae sath React</h1>
    <button onClick={addCounter}>Counter Add</button>
    <button onClick={removeCounter}>Remove </button>
    <h1>Counter Value: {counter}</h1>
    
    </>
  )
}

export default App
