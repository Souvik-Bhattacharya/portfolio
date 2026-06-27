import academics from "../assets/academics.json";
import Education from "./Education";

function Academics() {
  return (
    <div className="page">
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;h1&gt;</div>
      <div className="flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-1 h">
        <p>
          My <span className="inline-block at text-cyan">Education</span>
        </p>
        <span className="dot">...</span>
      </div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/h1&gt;</div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;div&gt;</div>
      <div className="grid grid-cols-card mini:grid-cols-card-mini gap-2 pl-32 pr-4 small:pl-14 py-1">
        {academics.map((a) => {
          return (
            <Education
              key={a.id}
              logo={a.logo}
              degree={a.degree}
              institute={a.institute}
              affiliation={a.affiliation}
              grade={a.grade}
              passout={a.passout}
              web={a.web}
            />
          );
        })}
      </div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/div&gt;</div>
    </div>
  );
}

export default Academics;
