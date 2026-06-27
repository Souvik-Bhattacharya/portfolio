import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="page">
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;h1&gt;</div>
      <div className="flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-1 h">
        <span className="text-cyan inline-block at">Contact Me</span>
        <span className="dot">...</span>
      </div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/h1&gt;</div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;p&gt;</div>
      <p className="text-lg mini:text-sm pl-32 small:pl-14 py-1">
        If you want to connect with me or just want to say hi?
      </p>
      <p className="text-lg mini:text-sm pl-32 small:pl-14 py-1">
        My inbox is always open. Ping me and I&apos;ll get back to you!
      </p>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/p&gt;</div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;div&gt;</div>
      <div className="flex flex-wrap gap-5 mini:gap-2 pl-32 small:pl-14 py-1">
        <div className="flex gap-1 items-center">
          <span className="text-gray-600 web">&lt;a href=&quot;</span>
          <Link
            to="https://www.linkedin.com/in/souvik-bhattacharya763"
            target="blank"
          >
            <i
              className="devicon-linkedin-plain text-2xl inline-block text-cyan at"
              title="LinkedIn"
            ></i>
          </Link>
          <span className="text-gray-600 web">&quot; &gt;&lt;/a&gt;</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-gray-600 web">&lt;a href=&quot;</span>
          <Link to="https://github.com/Souvik-Bhattacharya" target="blank">
            <i
              class="devicon-github-original text-2xl inline-block at text-cyan"
              title="GitHub"
            ></i>
          </Link>
          <span className="text-gray-600 web">&quot;</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-gray-600 web">&lt;a href=&quot;</span>
          <Link
            to="https://stackoverflow.com/users/22549884/souvik-bhattacharya"
            target="blank"
          >
            <i
              class="devicon-stackoverflow-plain inline-block at text-cyan text-2xl"
              title="Stack Overflow"
            ></i>
          </Link>
          <span className="text-gray-600 web">&quot; &gt;&lt;/a&gt;</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-gray-600 web">&lt;a href=&quot;</span>
          <Link
            to="mailto:souvik.bhattacharya763@gmail.com"
            target="blank"
            title="E-Mail"
          >
            <FontAwesomeIcon
              icon={faEnvelopesBulk}
              className="at text-2xl mail-icon"
            />
          </Link>
          <span className="text-gray-600 web">&quot; &gt;&lt;/a&gt;</span>
        </div>
      </div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/div&gt;</div>
    </div>
  );
}

export default Contact;
