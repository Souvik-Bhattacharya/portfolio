import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div>
        <ul className = "flex justify-around">
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/experience">Experience</Link>
            <Link to = "/projects">Projects</Link>
            <Link to = "/contact">Contact</Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
