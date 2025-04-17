import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
         <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">project</Link></li>
         </ul>
    </div>
  )
}

export default Navbar
