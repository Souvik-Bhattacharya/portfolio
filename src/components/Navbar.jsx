import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  let location = useLocation();
  return (
    <div className='inset-0'>
      <div className='text-gray-600 web'>
        &lt;html&gt;
      </div>
      <div className='text-gray-600 pl-10 small:pl-5 web'>
        &lt;head&gt;
      </div>
      <div className='flex whitespace-nowrap pl-20 small:pl-10'>
        <p className='text-gray-600 web'>&lt;title&gt;</p>
        <p className='text-cyan at'>It's Souvik - Portfolio</p>
        <p className='text-gray-600 web'>&lt;title/&gt;</p>
      </div>
      <div className='flex whitespace-nowrap pl-20 small:pl-10'>
        <p className='text-gray-600 web'>&lt;meta content="</p>
        <Link to="https://drive.google.com/file/d/1RXCla3slfBPpO3FTH3SeNBuJXpmdW6Cc/view" target='blank' className='text-cyan'>Resume</Link>
        <p className='text-gray-600 web'>"/&gt;</p>
      </div>
      <div className='text-gray-600 pl-10 small:pl-5 web'>
        &lt;/head&gt;
      </div>
      <div className='text-gray-600 pl-10 small:pl-5 web'>
        &lt;body&gt;
      </div>
      <div className='text-gray-600 pl-20 small:pl-10 web'>
        &lt;nav&gt;
      </div>
      <div className='flex gap-3 pl-32 small:pl-14 text-lg small:flex-col'>
        <Link to="/" className={`hover:-translate-y-2 small:hover:translate-x-2 ${(location.pathname == "/") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>Home</span>/&gt;
        </Link>
        <Link to="/about" className={`hover:-translate-y-2 small:hover:translate-x-2 ${(location.pathname == "/about") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>About</span>/&gt;
        </Link>
        <Link to="/edu" className={`hover:-translate-y-2 small:hover:translate-x-2 ${(location.pathname == "/edu") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>Education</span>/&gt;
        </Link>
        <Link to="/exp" className={`hover:-translate-y-2 small:hover:translate-x-2 ${(location.pathname == "/exp") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Experience</span>/&gt;
        </Link>
        <Link to="/projects" className={`hover:-translate-y-2 small:hover:translate-x-2 ${(location.pathname == "/projects") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Projects</span>/&gt;
        </Link>
        <Link to="/contact" className={`hover:-translate-y-2 small:hover:translate-x-2 ${(location.pathname == "/contact") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Contact</span>/&gt;
        </Link>
      </div>
      <div className='text-gray-600 pl-20 small:pl-10 web'>
        &lt;/nav&gt;
      </div>
    </div>
  )
}

export default Navbar
