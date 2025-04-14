import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'
import Counter from './Counter.jsx'

let userData = [
  {name:'rahul',age:45},{name:'ajay',age:23},{name:'abhay', age:20}
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <App />
    {/* <App></App>
    {App()} */}

    {Card(userData[0])}
    {Card(userData[1])}
    {Card(userData[2])}

    {/* <Card/>
    <Card  />
    <Card  /> */}

    <Counter/>
  </StrictMode>,
)
