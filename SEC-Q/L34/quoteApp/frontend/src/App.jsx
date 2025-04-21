import React from 'react'
import Navbar from './component/Navbar'
import {Routes,Route} from 'react-router-dom'
import AllQuote from './pages/AllQuote'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AllQuote/>}></Route>
      </Routes>
    </div>
  )
}

export default App
