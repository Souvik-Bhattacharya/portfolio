import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  let location = useLocation();
  return (
    <div className='inset-0'>
      <div className='text-gray-600 web'>
        &lt;html&gt;
      </div>
      <div className='text-gray-600 pl-10 web'>
        &lt;head&gt;
      </div>
      <p className='text-gray-600 pl-20 my-3'>
        &lt;title&gt;<span className='text-cyan at'>It's Souvik - Portfolio</span>&lt;title/&gt;
      </p>
      <p className='text-gray-600 pl-20 my-3'>
        &lt;meta content="<Link to="https://drive.google.com/file/d/1RXCla3slfBPpO3FTH3SeNBuJXpmdW6Cc/view" target='blank' className='text-cyan'>Resume</Link>" /&gt;
      </p>
      <div className='text-gray-600 pl-10 web'>
        &lt;/head&gt;
      </div>
      <div className='text-gray-600 pl-10 web'>
        &lt;body&gt;
      </div>
      <div className='text-gray-600 pl-20 web'>
        &lt;nav&gt;
      </div>
      <div className='flex pl-32 h-7 text-lg'>
        <Link to="/" className={`pr-3 hover:my-1 ${(location.pathname == "/") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>Home</span>/&gt;
        </Link>
        <Link to="/about" className={`flex pr-3 hover:my-1 ${(location.pathname == "/about") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>About</span>/&gt;
        </Link>
        <Link to="/edu" className={`flex pr-3 hover:my-1 ${(location.pathname == "/edu") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>Education</span>/&gt;
        </Link>
        <Link to="/exp" className={`flex pr-3 hover:my-1 ${(location.pathname == "/exp") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Experience</span>/&gt;
        </Link>
        <Link to="/projects" className={`flex pr-3 hover:my-1 ${(location.pathname == "/projects") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Projects</span>/&gt;
        </Link>
        <Link to="/contact" className={`flex pr-3 hover:my-1 ${(location.pathname == "/contact") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Contact</span>/&gt;
        </Link>
      </div>
      <div className='text-gray-600 pl-20 web'>
        &lt;/nav&gt;
      </div>
    </div>
  )
}

export default Navbar
