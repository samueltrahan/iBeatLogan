import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div>
          <Link to="/"><img alt="" src="/images/ibeatlogan.png"></img></Link>
        </div>
      </nav>
    </>
  )
}

