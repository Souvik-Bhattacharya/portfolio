import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Project = ({ title, image, github, deploy, desc, techStack }) => {
    Project.propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        deploy: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    return (
        <div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-2xl bg-sec'>
            <img src={image} alt="" className='rounded-t-2xl' />
            <div className='text-gray-600 web px-3 pt-3'>
                &lt;project&gt;
            </div>
            <div className='flex flex-col px-6'>
                <div className='flex justify-between py-2'>
                    <p className='text-cyan text-lg small:text-base pr-1 at'>{title}</p>
                    <div className='flex gap-3'>
                        <Link to={github} target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                        <Link to={deploy} target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                    </div>
                </div>
                <p className='py-2 small:text-sm'>
                    {desc}
                </p>
                <div className='flex flex-wrap items-center gap-3 py-5'>
                    {
                        techStack.map((ts, i) => {
                            return <i key={i} className={`${ts} text-cyan fa-xl at`}></i>
                        })
                    }
                </div>
            </div>
            <div className='text-gray-600 web px-3 pb-3'>
                &lt;/project&gt;
            </div>
        </div>
    )
};

export default Project;