import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Quotes from './pages/Quotes'


function App(x) {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/quotes' element={<Quotes/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default App
