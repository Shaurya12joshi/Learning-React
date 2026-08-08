import { useState } from "react"


function App() {
  let [color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="p-5 rounded-3xl flex flex-column  shadow-lg justify-center gap-3"
        style={{backgroundColor: "white"}}
        >
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}
          >Red</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}
          >Green</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "olive"}}
          onClick={() => setColor("olive")}
          >Olive</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "gray"}}
          onClick={() => setColor("gray")}
          >Gray</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "yellow"}}
          onClick={() => setColor("yellow")}
          >Yellow</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "pink"}}
          onClick={() => setColor("pink")}
          >Pink</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "purple"}}
          onClick={() => setColor("purple")}
          >Purple</button>
          <button className="px-5 py-3 text-white outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "lavender"}}
          onClick={() => setColor("lavender")}
          >Lavender</button>
          <button className="px-5 py-3 text-black outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "white"}}
          onClick={() => setColor("white")}
          >White</button>
          <button className="px-5 py-3 text-white  outline-none shadow-lg  w-full rounded-full"
          style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}
          >Black</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
