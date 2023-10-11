import React from 'react'
import bg from '/bg.jpg';
import express from '/express.png';

function Home() {
  return (
    <div className='flex flex-col page'>
      <div className='flex flex-wrap-reverse'>
        <div className='flex flex-col w-1/2'>
          <div className='text-gray-600 pl-20 web'>
            &lt;h1&gt;
          </div>
          <p className='flex whitespace-nowrap text-4xl pl-32 py-3'>Hi! I'm<p className='dot'>...</p></p>
          <p className='text-cyan text-5xl pl-32 py-3 at'>Souvik Bhattacharya</p>
          <div className='text-gray-600 pl-20 web'>
            &lt;/h1&gt;
          </div>
          <div className='text-gray-600 pl-20 web'>
            &lt;p&gt;
          </div>
          <p className='text-2xl pl-32 py-5'>I'm a <span className='text-cyan'>MERN Stack</span> Developer</p>
          <div className='text-gray-600 pl-20 web'>
            &lt;/p&gt;
          </div>
          <div className='text-gray-600 pl-20 web'>
            &lt;h1&gt;
          </div>
          <p className='text-4xl flex whitespace-nowrap pl-32 py-3 text-cyan h'>My Tech Stack <p className='dot text-cyan'>...</p></p>
          <div className='text-gray-600 pl-20 web'>
            &lt;/h1&gt;
          </div>
          <div className='text-gray-600 pl-20 web'>
            &lt;div&gt;
          </div>
          <div className='pl-32 z-50'>
            <div className='flex flex-wrap slider'>
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src={express} />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
              <img height="50" width="50" className='mr-5 my-3 hover:mt-1 hover:shadow-lg hover:shadow-black' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" />
            </div>
          </div>
          <div className='text-gray-600 pl-20 web'>
            &lt;/div&gt;
          </div>
        </div>
        <div className='flex flex-col h-auto justify-center ml-20 items-start w-2/5'>
          <div className='text-gray-600 mb-5 web'>
            &lt;img src="
          </div>
          <img src={bg} alt="" className='ml-12 h-64 shadow-md hover:shadow-lg hover:shadow-cyan shadow-cyan rounded-3xl hover:rotate-3 hover:grayscale' />
          <div className='text-gray-600 mt-5 web'>
            " alt="souvik"/&gt;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
