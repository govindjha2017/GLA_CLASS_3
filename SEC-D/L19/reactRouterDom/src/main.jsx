import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
         <Navbar/>
         <App/>
    </BrowserRouter>
  </StrictMode>,
)
