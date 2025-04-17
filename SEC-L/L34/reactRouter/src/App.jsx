import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project  from './pages/Project'

function App() {
    let [x,setX] = useState(10)
    useEffect(()=>{
       console.log('console from useEffect')
    },[x])
  return (
    <div>
      <h1>Welcome to react router dom</h1>
      <p>{x}</p>
      <button onClick={()=>{setX(20)}}>Click me</button>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/project' element={<Project/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
