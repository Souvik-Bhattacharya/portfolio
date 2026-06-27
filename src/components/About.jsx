import PROFILE_PICTURE from "/PROFILE_PICTURE.jpg";

function About() {
  return (
    <div className="flex flex-wrap-reverse page">
      <div className="flex flex-col w-1/2 small:w-full pr-4">
        <div className="text-gray-600 pl-20 small:pl-10 web">&lt;h1&gt;</div>
        <div className="flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-1 text-cyan h">
          <span className="text-cyan inline-block at">About Me</span>
          <span className="dot">...</span>
        </div>
        <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/h1&gt;</div>
        <div className="text-gray-600 pl-20 small:pl-10 web">&lt;p&gt;</div>
        <p className="text-lg mini:text-sm pl-32 small:pl-14 py-1">
          I&apos;m Souvik Bhattacharya, a Systems Engineer at Tata Consultancy
          Services Ltd. I&apos;ve been working here as a backend developer since
          February 2026. Currently I&apos;m working with technologies such as
          Java Spring Framework, AngularJS, and PL/SQL.
        </p>
        <p className="text-lg mini:text-sm pl-32 small:pl-14 py-1">
          I&apos;ve completed B.Tech in Computer Science and Engineering from
          RCCIIT. I was also a part of the tech club of my college, RCCTechZ.
          I&apos;m familiar with different progrmming languages such as Java,
          Python, JavaScript, and TypeScript. Apart from that I also have
          hands-on experience with several frameworks like React.js, Next.js,
          Node.js, and Spring Boot. I&apos;m familiar with different databases
          such as MySQL and MongoDB. I&apos;ve participated in different
          hackathons like SIH 2023, SBH 2024, and Hack4Bengal 2024. I also have
          a strong interest in the field of AI/ML.
        </p>
        <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/p&gt;</div>
      </div>
      <div className="flex flex-col h-auto justify-center w-fit pr-4 ml-20 small:ml-10 items-start">
        <div className="text-gray-600 web">
          &lt;img src=
          <br />
          &quot;
        </div>
        <img
          src={PROFILE_PICTURE}
          alt="Profile Pic"
          className="mb-1 h-64 rounded-tr-lg rounded-bl-lg rotate-3 grayscale"
        />
        <div className="text-gray-600 web text-end self-end">
          &quot;
          <br />
          alt=&quot;souvik&quot;/&gt;
        </div>
      </div>
    </div>
  );
}

export default About;
