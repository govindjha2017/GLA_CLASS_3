import React, { useState } from 'react'
import "./App.css"
function App() {
  // let color = "black"
  let [color,setColor] = useState("black")
  return (
    <div className='parent' style={{backgroundColor:color}}>
      <button onClick={()=>{setColor("red")}} className='btn btn-red'>Red</button>
      <button onClick={()=>{setColor("blue")}} className='btn btn-blue'>Blue</button>
      <button onClick={()=>{setColor("green")}} className='btn btn-green'>Green</button>
    </div>
  )
}

export default App
