import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='page'>
            <div className='text-gray-600 pl-20 web'>
                &lt;h1&gt;
            </div>
            <div className='flex whitespace-nowrap text-4xl pl-32 py-3 text-cyan h'>My Projects <p className='dot text-cyan'>...</p></div>
            <div className='text-gray-600 pl-20 web'>
                &lt;/h1&gt;
            </div>
            <div className='text-gray-600 pl-20 web'>
                &lt;div&gt;
            </div>
            <div className='grid grid-cols-card gap-2 pl-32'>
                <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3'>
                    <div className='text-gray-600 web'>
                        &lt;project&gt;
                    </div>
                    <div className='flex flex-col p-5'>
                        <div className='flex justify-between py-2'>
                            <p className='text-cyan text-lg pr-1 at'>E-Waste Facility Locator - SIH 2023</p>
                            <div className='flex gap-5'>
                                <Link to='https://github.com/Souvik-Bhattacharya/SIH2023_E-Waste_Facility_Locator' target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                <Link to='https://e-waste-facility-locator.onrender.com/' target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                            </div>
                        </div>
                        <p className='py-2'>
                            A web application to find the nearest e-waste facility locators near you. It also gives redeemable credit points based on the amount of valuable elements predicted to be present and can be extracted after proper recycling.
                        </p>
                        <div className='flex items-center gap-5 py-5'>
                            <i className="text-cyan fa-brands fa-html5 fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-css3-alt fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-js fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-react fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-node-js fa-xl at"></i>
                            <i className="text-cyan devicon-express-original text-xl at"></i>
                            <i className="text-cyan fa-brands fa-npm fa-xl at"></i>
                            <i className="text-cyan devicon-mongodb-plain text-xl at"></i>
                        </div>
                    </div>
                    <div className='text-gray-600 web'>
                        &lt;/project&gt;
                    </div>
                </div>
                <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3'>
                    <div className='text-gray-600 web'>
                        &lt;project&gt;
                    </div>
                    <div className='flex flex-col p-5'>
                        <div className='flex justify-between py-2'>
                            <p className='text-cyan text-lg pr-1 at'>College Seeker - Cloud Counselage</p>
                            <div className='flex gap-5'>
                                <Link to='https://github.com/Souvik-Bhattacharya/CollegeSeeker_CloudCounselage' target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                <Link to='https://college-seeker-cloud-counselage.onrender.com/' target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                            </div>
                        </div>
                        <p className='py-2'>
                            A web application for helping students find Indian colleges with different college names, courses offered, and states. They can know about course fees and the different ratings of the colleges as well.
                        </p>
                        <div className='flex items-center gap-5 py-5'>
                            <i className="text-cyan fa-brands fa-html5 fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-css3-alt fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-js fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-node-js fa-xl at"></i>
                            <i className="text-cyan devicon-express-original text-xl at"></i>
                            <i className="text-cyan fa-brands fa-npm fa-xl at"></i>
                            <i className="text-cyan devicon-mysql-plain text-xl at"></i>
                        </div>
                    </div>
                    <div className='text-gray-600 web'>
                        &lt;/project&gt;
                    </div>
                </div>
                <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3'>
                    <div className='text-gray-600 web'>
                        &lt;project&gt;
                    </div>
                    <div className='flex flex-col p-5'>
                        <div className='flex justify-between py-2'>
                            <p className='text-cyan text-lg pr-1 at'>To Do List - Web Application</p>
                            <div className='flex gap-5'>
                                <Link to='https://github.com/Souvik-Bhattacharya/ToDoList' target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                <Link to='https://souvik-bhattacharya.github.io/ToDoList/' target='blank'><i className="fa-solid fa-link fa-xl text-cyan"></i></Link>
                            </div>
                        </div>
                        <p className='py-2'>
                            A web application for managing your to-dos and provide the interface to add, update, bookmark. remove tasks from your list.
                        </p>
                        <div className='flex items-center gap-5 py-5'>
                            <i className="text-cyan fa-brands fa-html5 fa-xl"></i>
                            <i className="text-cyan fa-brands fa-css3-alt fa-xl at"></i>
                            <i className="text-cyan fa-brands fa-js fa-xl at"></i>
                        </div>
                    </div>
                    <div className='text-gray-600 web'>
                        &lt;/project&gt;
                    </div>
                </div>
                <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3'>
                    <div className='text-gray-600 web'>
                        &lt;project&gt;
                    </div>
                    <div className='flex flex-col p-5'>
                        <div className='flex justify-between py-2'>
                            <p className='text-cyan text-lg pr-1 at'>Snake Game</p>
                            <div className='flex gap-5'>
                                <Link to='https://github.com/Souvik-Bhattacharya/Snake_Game' target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                <Link to='https://www.youtube.com/watch?v=81RoVotTcdw' target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                            </div>
                        </div>
                        <p className='py-2'>
                            A python GUI gaming application to entertain users with an endless gaming experience and with the classic feel of their childhood.
                        </p>
                        <div className='flex items-center gap-5 py-5'>
                            <i className="text-cyan fa-brands fa-python fa-xl at"></i>
                        </div>
                    </div>
                    <div className='text-gray-600 web'>
                        &lt;/project&gt;
                    </div>
                </div>
            </div>
            <div className='text-gray-600 pl-20 web'>
                &lt;/div&gt;
            </div>
        </div>
    )
}

export default Projects
