import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="nav">
        <div className="logo">
            <h1>Medium</h1>
        </div>
        <div className="link">
            <a href="#">Our story</a>
            <a href="#">Membership</a>
            <a href="#">Write</a>
            <a href="#">Sign in</a>
            <a id="linkSpcl" href="#">Get started</a>
        </div>
    </div>
  )
}

export default Navbar
