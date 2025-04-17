import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  let [x,setX] = useState(10)

  useEffect(()=>{
      console.log('console from useEffecet')
  },[x])

  return (
    <div>
      <h2>Welcome to react router dom</h2>
      <p>{x}</p>
      <button onClick={()=>{setX(20)}}>click me</button>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
