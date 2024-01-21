import React from 'react'
import bg from '/bg.jpg';

function Home() {
  return (
    <div className='flex flex-col page'>
      <div className='flex flex-wrap-reverse'>
        <div className='flex flex-col w-1/2 small:w-full pr-4'>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;h1&gt;
          </div>
          <div className='flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-1 h'>Hi! I'm<p className='dot'>...</p></div>
          <p className='text-cyan text-5xl mini:text-3xl pl-32 small:pl-14 py-1 at'>Souvik Bhattacharya</p>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;/h1&gt;
          </div>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;p&gt;
          </div>
          <p className='text-2xl mini:text-lg pl-32 small:pl-14'>I'm a <span className='text-cyan'>MERN Stack</span> Developer</p>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;/p&gt;
          </div>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;h1&gt;
          </div>
          <div className='text-4xl mini:text-2xl flex whitespace-nowrap pl-32 small:pl-14 py-3 text-cyan h'>My Tech Stack <p className='dot text-cyan'>...</p></div>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;/h1&gt;
          </div>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;div&gt;
          </div>
          <div className='pl-32 small:pl-14'>
            <div className='flex flex-wrap gap-5 items-center'>
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <i className="devicon-nextjs-original-wordmark at text-7xl"></i>
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <i className="devicon-express-original at text-5xl"></i>
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
              <i className="devicon-socketio-original at text-5xl"></i>
              <i className="devicon-handlebars-plain-wordmark at text-7xl"></i>
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" />
              <img height="50" width="50" className='at' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" />
            </div>
          </div>
          <div className='text-gray-600 pl-20 small:pl-10 web'>
            &lt;/div&gt;
          </div>
        </div>
        <div className='flex flex-col h-auto justify-center ml-20 small:ml-10 items-start w-2/5 small:w-full pr-4'>
          <div className='text-gray-600 mb-5 web'>
            &lt;img src="
          </div>
          <img src={bg} alt="" className='ml-12 small:ml-4 h-64 shadow-md hover:shadow-lg hover:shadow-cyan shadow-cyan rounded-3xl hover:rotate-3 hover:grayscale' />
          <div className='text-gray-600 mt-5 web'>
            " alt="souvik"/&gt;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
