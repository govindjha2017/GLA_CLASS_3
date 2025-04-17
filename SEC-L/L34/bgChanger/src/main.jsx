import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Crad.jsx'
import Navbar from './Navbar.jsx'

let userData = [
  {name:'rahul',age:34},{name:'ajay',age:45},{name:'mohan',age:20}
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    {/* <App /> */}
    {Card(userData[0])}
    {Card(userData[1])}
    {Card(userData[2])}
  </StrictMode>,
)
