import React from 'react'
import bg from '/bg.jpg';

function About() {
    return (
        <div className='flex flex-wrap-reverse page'>
            <div className='flex flex-col w-1/2'>
                <div className='text-gray-600 pl-20 web'>
                    &lt;h1&gt;
                </div>
                <div className='flex whitespace-nowrap text-4xl pl-32 py-3 text-cyan h'>About Me <p className='dot text-cyan'>...</p></div>
                <div className='text-gray-600 pl-20 web'>
                    &lt;/h1&gt;
                </div>
                <div className='text-gray-600 pl-20 web'>
                    &lt;p&gt;
                </div>
                <p className='text-lg pl-32 py-5'>I'm Souvik Bhattacharya, a 3rd-year student of computer science and engineering. I'm a MERN stack developer and currently, I'm learning more different JS libraries and frameworks and also exploring the world of web technology. I'm also learning and practicing DSA and Algorithms for improving my problem solving skills. I'm enthusiastic about machine learning.</p>
                <p className='text-lg pl-32 py-5'>I've worked on some projects in online remote internships and also enjoyed team work in some Hackathons like SIH 2023, etc. I've also contributed to Hacktoberfest'22 and am looking for open source projects to contribute to.</p>
                <div className='text-gray-600 pl-20 web'>
                    &lt;/p&gt;
                </div>
            </div>
            <div className='flex flex-col h-auto justify-center w-2/5 ml-20 items-start'>
                <div className='text-gray-600 mb-5 web'>
                    &lt;img src="
                </div>
                <img src={bg} alt="" className='ml-12 h-64 shadow-md hover:shadow-lg hover:shadow-cyan shadow-cyan rounded-3xl hover:rotate-3 hover:grayscale' />
                <div className='text-gray-600 mt-5 web'>
                    " alt="souvik"/&gt;
                </div>
            </div>
        </div>
    )
}

export default About
