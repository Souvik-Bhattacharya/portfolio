import React from 'react'
import bg from '/bg.jpg';

function Home() {
  return (
    <div className='flex'>
      <div className='flex-col'>
        <div className='text-gray-600 pl-20 web'>
          &lt;h1&gt;
        </div>
        <p className='text-4xl pl-32 py-3'>Hi! I'm...</p>
        <p className='text-cyan text-6xl pl-32 py-3'>Souvik Bhattacharya</p>
        <div className='text-gray-600 pl-20 web'>
          &lt;/h1&gt;
        </div>
        <div className='text-gray-600 pl-20 web'>
          &lt;p&gt;
        </div>
        <p className='text-2xl pl-32 py-5'>I'm a <span className='text-cyan'>MERN Stack</span> Developer...</p>
        <div className='text-gray-600 pl-20 web'>
          &lt;/p&gt;
        </div>
      </div>
      <div className='flex flex-col mx-10 items-start'>
        <div className='text-gray-600 mb-5 web'>
          &lt;img src="
        </div>
        <img src={bg} alt="" className='h-64 w-full shadow-md hover:shadow-lg hover:shadow-cyan shadow-cyan rounded-xl' />
        <div className='text-gray-600 mt-5 web'>
          " alt="souvik"/&gt;
        </div>
      </div>
    </div>
  )
}

export default Home
