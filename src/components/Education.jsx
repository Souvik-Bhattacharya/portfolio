import React from 'react'
import { Link } from 'react-router-dom'
import bakp from '/bakp.jpg';
import RCC from '/RCC.png';

function Education() {
    return (
        <div className='page'>
            <div className='text-gray-600 pl-20 web'>
                &lt;h1&gt;
            </div>
            <p className='flex whitespace-nowrap text-4xl pl-32 py-3 text-cyan h'>My Education <p className='dot text-cyan'>...</p></p>
            <div className='text-gray-600 pl-20 web'>
                &lt;/h1&gt;
            </div>
            <div className='text-gray-600 pl-20 web'>
                &lt;div&gt;
            </div>
            <div className='flex flex-wrap pl-32'>
                <div className='flex hover:mt-1 hover:shadow-lg hover:shadow-black rounded-3xl  bg-sec p-5 m-2 justify-center w-2/5'>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='text-gray-600 web items-start mb-2'>&lt;card&gt;</div>
                        <div className='flex flex-col items-center text-center justify-center'>
                            <p className='text-cyan text-xl at'>Higher Secondery (12th) - PCMB</p>
                            <p className='mt-5'>Bhatpara Amar Krishna Pathsala (H.S) - WBCHSE</p>
                            <p><span className='text-cyan mt-5'>Overall Grade: </span>93%</p>
                            <p><span className='text-cyan '>Passout: </span>2021</p>
                            <Link target='blank' to='https://bakp2014.wixsite.com/main' className='text-cyan mt-5 w-1/2 py-5 border-2 border-cyan rounded-xl hover:bg-cyan hover:text-black shadow-md hover:shadow-sm hover:shadow-cyan shadow-cyan'>Visit</Link>
                        </div>
                        <div className='text-gray-600 web items-start mt-2'>&lt;card/&gt;</div>
                    </div>
                    <div className='flex flex-col h-auto justify-center w-2/5'>
                        <div className='text-gray-600 mb-2 web'>
                            &lt;img src="
                        </div>
                        <img src={bakp} alt="logo" className='rounded-full' />
                        <div className='text-gray-600 mt-2 web'>
                            " alt="school"/&gt;
                        </div>
                    </div>
                </div>
                <div className='flex hover:mt-1 hover:shadow-lg hover:shadow-black rounded-3xl justify-center bg-sec p-5 m-2 w-2/5'>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='text-gray-600 web items-start mb-2'>&lt;card&gt;</div>
                        <div className='flex flex-col items-center text-center justify-center'>
                            <p className='text-cyan text-xl at'>Bachelor of Technology - CSE</p>
                            <p className='mt-5'>RCC Institute of Information Technology - MAKAUT</p>
                            <p><span className='text-cyan mt-5'>CGPA: </span>9.23</p>
                            <p><span className='text-cyan '>Expected passing year: </span>2025</p>
                            <Link target='blank' to='https://www.rcciit.org/' className='text-cyan mt-5 w-1/2 py-5 border-2 border-cyan rounded-xl hover:bg-cyan hover:text-black shadow-md hover:shadow-sm hover:shadow-cyan shadow-cyan'>Visit</Link>
                        </div>
                        <div className='text-gray-600 web items-start mt-2'>&lt;card/&gt;</div>
                    </div>
                    <div className='flex flex-col h-auto justify-center w-1/2'>
                        <div className='text-gray-600 mb-2 web'>
                            &lt;img src="
                        </div>
                        <img src={RCC} alt="logo" className='p-5 rounded-full' />
                        <div className='text-gray-600 mt-2 web'>
                            " alt="college"/&gt;
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-gray-600 pl-20 web'>
                &lt;/div&gt;
            </div>
        </div>
    )
}

export default Education
