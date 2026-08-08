import {useCallback, useEffect, useState, useRef } from 'react'

function App() {
  
  const [length, setLength] = new useState(6)
  const [numAllowed, setNumAllowed] = new useState(false)
  const [charAllowed, setCharAllowed] = new useState(false)
  const [passWord, setPassWord] = new useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "%&*@!£$?><"
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassWord(pass)
  },[length, numAllowed, charAllowed, setPassWord])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed]
  )
  const passRef = useRef(null)
  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(passWord)
  },[passWord])
  
  

  return (
    <>
    <div className='flex  justify-center'>

      <div class="w-[900px] rounded-3xl bg-[#222B3D] p-10 shadow-2xl">

        <h1 class="text-5xl font-semibold text-white text-center mb-10">
            Password generator
        </h1>
        <div class="flex overflow-hidden rounded-2xl bg-white">

            <input
                type="text"
                value={passWord}
                readonly
                ref={passRef}
                class="flex-1 px-8 py-6 text-4xl text-orange-500 outline-none bg-white"
            />

            <button
                onClick={()=> copyPassword()}
                class="bg-blue-700 hover:bg-blue-800 transition px-10 text-white text-4xl font-medium hover:cursor-pointer">
                copy
            </button>

        </div>

        <div class="mt-10 flex items-center gap-8">
            <input
                type="range"
                min="6"
                max="100"
                value={length}
                class="w-64 accent-blue-500 cursor-pointer"
                onChange={(e)=>{setLength(e.target.value)}}
            />

            <span class="text-4xl text-orange-500">
                Length: {length}
            </span>

            <label class="flex items-center gap-3 text-3xl text-orange-500 cursor-pointer">
                <input
                    type="checkbox"
                    defaultChecked={numAllowed}
                    class="w-6 h-6 accent-blue-600"
                    onChange={()=>{
                      setNumAllowed((prev)=> !prev)
                    }}
                />
                Numbers
            </label>

            <label class="flex items-center gap-3 text-3xl text-orange-500 cursor-pointer">
                <input
                    type="checkbox"
                    class="w-6 h-6 accent-blue-600"
                    defaultChecked={charAllowed}
                    onChange={()=>{
                      setCharAllowed((prev)=> !prev)
                    }}
                />
                Characters
            </label>

        </div>

    </div>
    </div>
    
   
    </>
  )
}

export default App
