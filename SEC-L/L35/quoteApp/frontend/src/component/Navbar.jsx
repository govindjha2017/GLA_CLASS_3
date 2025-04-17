import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <>
        <nav>
            <h1>Logo</h1>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/craete" >create-quote</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
