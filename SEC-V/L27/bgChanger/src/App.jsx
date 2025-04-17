import React, { useState } from 'react'
import "./App.css"

function App() {
  let [color,setColor] = useState("black")
  return (
    <div className='parent' style={{backgroundColor:color}}>
      <button onClick={()=>{setColor("red")}} className='btn btn-red'>Red</button>
      <button onClick={()=>{setColor("blue")}} className='btn btn-blue'>blue</button>
      <button onClick={()=>{setColor("green")}} className='btn btn-green'>green</button>
    </div>
  )
}

export default App
