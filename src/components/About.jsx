import bg from '/bg.webp';

function About() {
    return (
        <div className='flex flex-wrap-reverse page'>
            <div className='flex flex-col w-1/2 small:w-full pr-4'>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;h1&gt;
                </div>
                <div className='flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-3 text-cyan h'>About Me <p className='dot text-cyan'>...</p></div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;/h1&gt;
                </div>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;p&gt;
                </div>
                <p className='text-lg mini:text-sm pl-32 small:pl-14 py-5'>I&apos;m Souvik Bhattacharya, a student of computer science and engineering. I&apos;m a MERN stack developer. I&apos;m also learning and practicing DSA to improve my problem solving skills. I&apos;m enthusiastic about machine learning.</p>
                <p className='text-lg mini:text-sm pl-32 small:pl-14 py-5'>I&apos;ve made some projects and also enjoyed team work in some Hackathons like SIH-2023 and Hack4Bengal-2024 etc. I&apos;ve also contributed to Hacktoberfest-2022 and I&apos;m looking for open source projects to contribute to.</p>
                <div className='text-gray-600 pl-20 small:pl-10 web'>
                    &lt;/p&gt;
                </div>
            </div>
            <div className='flex flex-col h-auto justify-center w-2/5 small:w-full pr-4 ml-20 small:ml-10 items-start'>
                <div className='text-gray-600 mb-5 web'>
                    &lt;img src=&quot;
                </div>
                <img src={bg} alt="" className='ml-12 small:ml-4 h-64 shadow-md hover:shadow-lg hover:shadow-cyan shadow-cyan rounded-3xl hover:rotate-3 hover:grayscale' />
                <div className='text-gray-600 mt-5 web'>
                    &quot; alt=&quot;souvik&quot;/&gt;
                </div>
            </div>
        </div>
    )
}

export default About
