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
        <p className='text-cyan at'>It&apos;s Souvik - Portfolio</p>
        <p className='text-gray-600 web'>&lt;title/&gt;</p>
      </div>
      <div className='flex whitespace-nowrap pl-20 small:pl-10'>
        <p className='text-gray-600 web'>&lt;meta content=</p>
        <Link to="/resume" className={`${(location.pathname == "/resume") ? "text-cyan" : "text-gray-600"}`}>&quot;<span className='hover:text-cyan'>Resume</span>&quot;</Link>
        <p className='text-gray-600 web'>/&gt;</p>
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
        <Link to="/" className={`at ${(location.pathname == "/") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>Home</span>/&gt;
        </Link>
        <Link to="/about" className={`at ${(location.pathname == "/about") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>About</span>/&gt;
        </Link>
        <Link to="/edu" className={`at ${(location.pathname == "/edu") ? "text-cyan" : "text-gray-600"}`}>
          &lt;<span className='hover:text-cyan'>Education</span>/&gt;
        </Link>
        <Link to="/exp" className={`at ${(location.pathname == "/exp") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Experience</span>/&gt;
        </Link>
        <Link to="/projects" className={`at ${(location.pathname == "/projects") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Projects</span>/&gt;
        </Link>
        <Link to="/contact" className={`at ${(location.pathname == "/contact") ? "text-cyan" : "text-gray-600"}`}>&lt;<span className='hover:text-cyan'>Contact</span>/&gt;
        </Link>
      </div>
      <div className='text-gray-600 pl-20 small:pl-10 web'>
        &lt;/nav&gt;
      </div>
    </div>
  )
}

export default Navbar
