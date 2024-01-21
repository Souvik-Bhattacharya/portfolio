import React from 'react'

const Resume = () => {
    return (
        <div className='page'>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;h1&gt;
            </div>
            <div className='flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-3 text-cyan h'>My Resume <p className='dot text-cyan'>...</p></div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;/h1&gt;
            </div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;resume&gt;
            </div>
            <div className='w-full h-screen px-32 small:px-14 py-1'>
                <iframe src="https://souvik-resume.tiiny.site" className='w-full h-full border-2 border-cyan rounded-3xl shadow-md hover:shadow-lg hover:shadow-cyan shadow-cyan' allowFullScreen></iframe>
            </div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;/resume&gt;
            </div>
        </div>
    )
}

export default Resume
