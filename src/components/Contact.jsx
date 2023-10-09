import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div>
            <div className='text-gray-600 pl-20 web'>
                &lt;h1&gt;
            </div>
            <p className='text-4xl pl-32 py-3 text-cyan'>Contact Me...</p>
            <div className='text-gray-600 pl-20 web'>
                &lt;/h1&gt;
            </div>
            <div className='text-gray-600 pl-20 web'>
                &lt;p&gt;
            </div>
            <p className='text-lg pl-32 py-3'>I’m currently looking for new opportunities, and my inbox is always open.</p>
            <p className='text-lg pl-32 py-3'>just want to say hi? I’ll get back to you!</p>
            <div className='text-gray-600 pl-20 web'>
                &lt;/p&gt;
            </div>
            <div className='text-gray-600 pl-20 web'>&lt;Link&gt;</div>
            <div className='flex pl-32'>
                <div className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='https://www.linkedin.com/in/souvik-bhattacharya763' target='blank' className='px-2'><i className="fa-brands fa-linkedin fa-2xl text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
                <div className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='https://github.com/Souvik-Bhattacharya' target='blank' className='px-2'><i className="fa-brands fa-github fa-2xl text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
                <div className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='https://stackoverflow.com/users/22549884/souvik-bhattacharya' target='blank' className='px-2'><i className="fa-brands fa-stack-overflow fa-2xl text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
                <div className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black'>
                    <span className='text-gray-600 web'>to="</span>
                    <Link to='mailto:souvik.bhattacharya763@gmail.com' target='blank' className='px-2'><i className="fa-solid fa-envelope fa-2xl text-cyan"></i></Link>
                    <span className='text-gray-600 web'>"</span>
                </div>
            </div>
            <div className='text-gray-600 pl-20 web'>&lt;/Link&gt;</div>
        </div>
    )
}

export default Contact
