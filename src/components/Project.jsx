import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = ({ title, thumbnail, github, web, description, techStack }) => {
  const hasWebLink = web;
  return (
    <div className="flex flex-col hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-2xl bg-sec">
      {hasWebLink ? (
        <Link to={web} target="blank">
          <img src={thumbnail} alt="" className="rounded-t-2xl" />
        </Link>
      ) : (
        <div>
          <img src={thumbnail} alt="" className="rounded-t-2xl" />
        </div>
      )}
      <div className="flex flex-col justify-between h-full">
        <div className="text-gray-600 web px-3 pt-3">&lt;div&gt;</div>
        <div className="flex flex-col px-6">
          <div className="flex justify-between items-center py-2">
            <p className="text-cyan text-lg small:text-base pr-1 at">{title}</p>
            <div className="flex gap-3">
              <Link
                to={github}
                target="blank"
                className="at"
                title="GitHub Repository"
              >
                <i className="devicon-github-original text-cyan text-2xl"></i>
              </Link>
              {hasWebLink ? (
                <Link to={web} target="blank" className="at" title="Live Demo">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-2xl web-icon"
                  />
                </Link>
              ) : null}
            </div>
          </div>
          <p className="py-1 small:text-sm">{description}</p>
          <div className="flex flex-wrap items-center gap-3 py-2">
            {techStack.map((tech, i) => {
              return (
                <i
                  key={i}
                  className={`${tech.icon} text-cyan text-2xl inline-block at`}
                  title={tech.name}
                ></i>
              );
            })}
          </div>
        </div>
        <div className="text-gray-600 web px-3 pb-3">&lt;/div&gt;</div>
      </div>
    </div>
  );
};

export default Project;
