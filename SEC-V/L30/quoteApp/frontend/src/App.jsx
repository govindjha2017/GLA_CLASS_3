import React from 'react'
import Navbar from './component/Navbar'
import {Routes,Route} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AllQuotes/>}></Route>
      </Routes>
    </div>
  )
}

export default App
