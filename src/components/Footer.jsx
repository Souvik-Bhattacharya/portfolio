import React from 'react'

function Footer() {
    return (
        <div className=''>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;footer&gt;
            </div>
            <div className='flex mini:flex-col text-lg pl-32 small:pl-14 py-2'>
                <p>
                    &copy;2023&nbsp;<span className='text-cyan'>Souvik Bhattacharya</span>,
                </p>
                <div className='flex whitespace-nowrap'>
                    Thanks for visiting <p className='dot'>...</p>
                </div>
            </div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;/footer&gt;
            </div>
            <div className='text-gray-600 pl-10 small:pl-5 web'>
                &lt;/body&gt;
            </div>
            <div className='text-gray-600 web'>
                &lt;/html&gt;
            </div>
        </div>

    )
}

export default Footer
