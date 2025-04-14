import React from 'react'
import "./App.css"
import { useState } from 'react'
function App() {
  // let x = 10
  let [x, setX] = useState(10)
  let [color,setColor] = useState('black')
  return (
    <div className='parent' style={{background:color}}>
      <button onClick={()=>{setColor("red")}} className='btn btn-red'>Red</button>
      <button onClick={()=>{setColor("blue")}} className='btn btn-blue'>Blue</button>
      <button onClick={()=>{setColor("green")}} className='btn btn-green'>green</button>
    </div>

    <div>
      <p>{x}</p>
      <button onClick={()=>{setX(x+1)}}>increase</button>
    </div>
  )
}

export default App
