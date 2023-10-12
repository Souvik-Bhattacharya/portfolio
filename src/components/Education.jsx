import React from 'react'
import { Link } from 'react-router-dom'
import bakp from '/bakp.jpg';
import RCC from '/RCC.png';

function Education() {
    return (
        <div className='page'>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;h1&gt;
            </div>
            <div className='flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-3 text-cyan h'>My Education <p className='dot text-cyan'>...</p></div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;/h1&gt;
            </div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;div&gt;
            </div>
            <div className='grid grid-cols-edu mini:grid-cols-edu-mini pr-4 gap-2 pl-32 small:pl-14'>
                <div className='flex mini:flex-col-reverse hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3 justify-around'>
                    <div className='flex flex-col justify-between'>
                        <div className='text-gray-600 web mb-2'>&lt;card&gt;</div>
                        <div className='flex flex-col items-center text-center'>
                            <p className='text-cyan text-xl at'>Bachelor of Technology - CSE</p>
                            <p className='mt-5'>RCC Institute of Information Technology - MAKAUT</p>
                            <p><span className='text-cyan mt-5'>CGPA: </span>9.26</p>
                            <p><span className='text-cyan '>Expected passing year: </span>2025</p>
                            <Link target='blank' to='https://www.rcciit.org/' className='text-cyan mt-5 w-1/2 py-5 border-2 border-cyan rounded-xl hover:bg-cyan hover:text-black shadow-md hover:shadow-sm hover:shadow-cyan shadow-cyan'>Visit</Link>
                        </div>
                        <div className='text-gray-600 web items-start mt-2'>&lt;card/&gt;</div>
                    </div>
                    <div className='flex flex-col h-auto justify-between '>
                        <div className='text-gray-600 mb-2 web'>
                            &lt;img src="
                        </div>
                        <img src={RCC} alt="logo" className='p-5 rounded-full' />
                        <div className='text-gray-600 mt-2 web'>
                            " alt="college"/&gt;
                        </div>
                    </div>
                </div>
                <div className='flex mini:flex-col-reverse hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3 justify-around'>
                    <div className='flex flex-col justify-between'>
                        <div className='text-gray-600 web items-start mb-2'>&lt;card&gt;</div>
                        <div className='flex flex-col items-center text-center'>
                            <p className='text-cyan text-xl at'>Higher Secondery (12th) - PCMB</p>
                            <p className='mt-5'>Bhatpara Amar Krishna Pathsala (H.S) - WBCHSE</p>
                            <p><span className='text-cyan mt-5'>Overall Grade: </span>93.8%</p>
                            <p><span className='text-cyan '>Passout: </span>2021</p>
                            <Link target='blank' to='https://bakp2014.wixsite.com/main' className='text-cyan mt-5 w-1/2 py-5 border-2 border-cyan rounded-xl hover:bg-cyan hover:text-black shadow-md hover:shadow-sm hover:shadow-cyan shadow-cyan'>Visit</Link>
                        </div>
                        <div className='text-gray-600 web items-start mt-2'>&lt;card/&gt;</div>
                    </div>
                    <div className='flex flex-col h-auto justify-between '>
                        <div className='text-gray-600 mb-2 web'>
                            &lt;img src="
                        </div>
                        <img src={bakp} alt="logo" className='rounded-full' />
                        <div className='text-gray-600 mt-2 web'>
                            " alt="school"/&gt;
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;/div&gt;
            </div>
        </div>
    )
}

export default Education
