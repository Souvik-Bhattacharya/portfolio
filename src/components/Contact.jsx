import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='page'>
            <div className='text-gray-600 pl-20 web'>
                &lt;h1&gt;
            </div>
            <div className='flex whitespace-nowrap text-4xl pl-32 py-3 text-cyan h'>Contact Me <p className='dot text-cyan'>...</p></div>
            <div className='text-gray-600 pl-20 web'>
                &lt;/h1&gt;
            </div>
            <div className='text-gray-600 pl-20 web'>
                &lt;p&gt;
            </div>
            <p className='text-lg pl-32 py-1'>I’m currently looking for new opportunities, and my inbox is always open.</p>
            <p className='text-lg pl-32 py-1'>just want to say hi? I’ll get back to you!</p>
            <div className='text-gray-600 pl-20 web'>
                &lt;/p&gt;
            </div>
            <div className='text-gray-600 pl-20 web'>&lt;Link&gt;</div>
            <div className='flex gap-5 pl-32'>
                <div className='my-3'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='https://www.linkedin.com/in/souvik-bhattacharya763' target='blank' className='px-2'><i className="fa-brands fa-linkedin fa-2xl at text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
                <div className='my-3'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='https://github.com/Souvik-Bhattacharya' target='blank' className='px-2'><i className="fa-brands fa-github fa-2xl at text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
                <div className='my-3'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='https://stackoverflow.com/users/22549884/souvik-bhattacharya' target='blank' className='px-2'><i className="fa-brands fa-stack-overflow fa-2xl at text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
                <div className='my-3'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='mailto:souvik.bhattacharya763@gmail.com' target='blank' className='px-2'><i className="fa-solid fa-envelope fa-2xl at text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
            </div>
            <div className='text-gray-600 pl-20 web'>&lt;/Link&gt;</div>
        </div>
    )
}

export default Contact
