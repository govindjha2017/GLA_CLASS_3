import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Project from './pages/Project'

function App() {
  return (
    <div>
      <h1>welcome to react router dom</h1>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/project' element={<Project/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
