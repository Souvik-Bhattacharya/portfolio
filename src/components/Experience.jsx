function Experience({ designation, company, duration, techStack }) {
  return (
    <div className="flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec p-3 gap-2">
      <div className="text-gray-600 web">&lt;div&gt;</div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg small:text-base text-cyan at">{designation}</p>
        <p>{company}</p>
        <p>{duration}</p>
        <div className="flex flex-wrap items-center gap-3">
          {techStack.map((tech, i) => {
            if (tech.name === "Spring Boot") {
              return (
                <img
                  key={i}
                  src={tech.icon}
                  className={`h-[24px] at`}
                  title={tech.name}
                ></img>
              );
            } else {
              return (
                <i
                  key={i}
                  className={`${tech.icon} text-cyan text-2xl inline-block at`}
                  title={tech.name}
                ></i>
              );
            }
          })}
        </div>
      </div>
      <div className="text-gray-600 web">&lt;/div&gt;</div>
    </div>
  );
}

export default Experience;
