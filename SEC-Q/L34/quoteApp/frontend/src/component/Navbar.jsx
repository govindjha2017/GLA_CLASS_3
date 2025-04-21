import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav'>
      <h1>Logo</h1>
      <ul className='navList'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
