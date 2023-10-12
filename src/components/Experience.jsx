import React from 'react'
import { Link } from 'react-router-dom'

function Experience() {
    return (
        <div>
            <div className='page'>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;h1&gt;
                </div>
                <div className='flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-3 text-cyan h'>My Experience <p className='dot text-cyan'>...</p></div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;/h1&gt;
                </div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;div&gt;
                </div>
                <div className='grid grid-cols-card gap-2 pl-32 small:pl-14'>
                    <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3'>
                        <div className='text-gray-600 web'>
                            &lt;experience&gt;
                        </div>
                        <div className='flex flex-col p-5'>
                            <div className='flex flex-col'>
                                <p className='text-lg at'>Web Development Project Intern</p>
                                <p className='text-lg'>July 2023 - September 2023</p>
                            </div>
                            <div className='flex justify-between py-2'>
                                <Link to='https://www.industryacademiacommunity.com/' target='blank' className='text-cyan text-lg pr-1 at'>Cloud Counselage Pvt. Ltd.</Link>
                                <div className='flex gap-5'>
                                    <Link to='https://github.com/Souvik-Bhattacharya/CollegeSeeker_CloudCounselage' target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                    <Link to='https://college-seeker-cloud-counselage.onrender.com/' target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                                </div>
                            </div>
                            <p className='flex flex-col gap-2 py-2'>
                                <li>Completed internship training and new product development expertise.</li>
                                <li>Developing an efficient and user friendly online platform for prospective students to search colleges in India along with detailed information about the courses offered and the contact details of the institutions for Cloud Counselage Pvt. Ltd.</li>
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
                            &lt;/experience&gt;
                        </div>
                    </div>
                    <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3'>
                        <div className='text-gray-600 web'>
                            &lt;experience&gt;
                        </div>
                        <div className='flex flex-col p-5'>
                            <div className='flex flex-col'>
                                <p className='text-lg at'>Frontend Developer</p>
                                <p className='text-lg'>September 2023</p>
                            </div>
                            <div className='flex justify-between py-2'>
                                <Link to='https://www.sih.gov.in/' target='blank' className='text-cyan text-lg pr-1 at'>SIH 2023</Link>
                                <div className='flex gap-5'>
                                    <Link to='https://github.com/Souvik-Bhattacharya/SIH2023_E-Waste_Facility_Locator' target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                    <Link to='https://e-waste-facility-locator.onrender.com/' target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                                </div>
                            </div>
                            <p className='flex flex-col gap-2 py-2'>
                                <li>A web application to find the nearest e-waste facility locators near you. It also gives redeemable credit points based on the amount of valuable elements predicted to be present and can be extracted after proper recycling.</li>
                                <li>Developed the frontend of the web-application and helped other team members also.</li>
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
                            &lt;/experience&gt;
                        </div>
                    </div>
                    <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3'>
                        <div className='text-gray-600 web'>
                            &lt;experience&gt;
                        </div>
                        <div className='flex flex-col p-5'>
                            <div className='flex flex-col'>
                                <p className='text-lg at'>Contributor</p>
                                <p className='text-lg'>October 2022</p>
                            </div>
                            <div className='flex justify-between py-2'>
                                <Link to='https://hacktoberfest.com/' target='blank' className='text-cyan text-lg pr-1 at'>Hacktoberfest 2022</Link>
                                <div className='flex gap-5'>
                                    <Link to='https://github.com/Souvik-Bhattacharya' target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                    <Link to='https://www.holopin.io/@souvik763#badges' target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                                </div>
                            </div>
                            <p className='py-2'>
                                <li>Contributed in many open source projects and completed the challenge of this month-long
                                    annual celebration of open source projects and the community conducted by DigitalOcean.</li>
                            </p>
                            <div className='flex items-center gap-5 py-5'>
                                <i className="text-cyan fa-brands fa-html5 fa-xl at"></i>
                                <i className="text-cyan fa-brands fa-css3-alt fa-xl at"></i>
                                <i className="text-cyan fa-brands fa-js fa-xl at"></i>
                            </div>
                        </div>
                        <div className='text-gray-600 web'>
                            &lt;/experience&gt;
                        </div>
                    </div>
                </div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;/div&gt;
                </div>
            </div>
            <div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;h1&gt;
                </div>
                <div className='flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-3 text-cyan h'>Community Involvement <p className='dot text-cyan'>...</p></div>
                <div className='text-gray-600 pl-20 web'>
                    &lt;/h1&gt;
                </div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;div&gt;
                </div>
                <div className='flex flex-col gap-2 pl-32 small:pl-14'>
                    <li className='text-cyan'>
                        Senior Technical Team member - RCCTechz, official tech club of RCCIIT
                    </li>
                    <p>
                        - coordinating coding contests and tech quizzes with active involvement
                    </p>
                    <li className='text-cyan'>
                        <Link to='https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS31S2365048202202324' target='blank'>NPTEL certification - The Joy of Computing using Python</Link>
                        
                    </li>
                    <p>
                        - certified by NPTEL for successfully completing the course in top 5%
                    </p>
                    <li className='text-cyan'>
                        1st prize in intra college frontend development competition ‘Webify’
                    </li>
                </div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;/div&gt;
                </div>
            </div>
        </div>
    )
}

export default Experience
