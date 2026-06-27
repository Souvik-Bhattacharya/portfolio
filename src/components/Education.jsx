import { Link } from "react-router-dom";

const Education = ({
  logo,
  degree,
  institute,
  affiliation,
  grade,
  passout,
  web,
}) => {
  return (
    <div className="flex flex-col hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-2xl bg-sec justify-between">
      <Link
        to={web}
        target="blank"
        className="flex flex-col justify-between items-center bg-white rounded-t-2xl p-1"
      >
        <img
          src={logo}
          alt="logo"
          height={200}
          width={200}
          className="p-5 rounded-full"
        />
      </Link>
      <div className="flex flex-col gap-2 justify-between p-3">
        <div className="text-gray-600 web">&lt;div&gt;</div>
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-cyan text-xl at">{degree}</p>
          <p>{institute}</p>
          <p>
            <span className="text-cyan inline-block at">
              {affiliation.name}
            </span>
            : {affiliation.value}
          </p>
          <p>
            <span className="text-cyan inline-block at">{grade.name}</span>:{" "}
            {grade.value}
          </p>
          <p>
            <span className="text-cyan inline-block at">Passout</span>:{" "}
            {passout}
          </p>
        </div>
        <div className="text-gray-600 web">&lt;div/&gt;</div>
      </div>
    </div>
  );
};

export default Education;
