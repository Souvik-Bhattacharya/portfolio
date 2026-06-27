import PROFILE_PICTURE from "/PROFILE_PICTURE.jpg";
import SPRING_BOOT from "/SPRING_BOOT.svg";

function Home() {
  return (
    <div className="flex flex-col page">
      <div className="flex flex-wrap-reverse">
        <div className="flex flex-col w-1/2 small:w-full pr-4">
          <div className="text-gray-600 pl-20 small:pl-10 web">&lt;h1&gt;</div>
          <div className="flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-1 h">
            Hi! I&apos;m<span className="dot">...</span>
          </div>
          <p className="text-cyan text-5xl mini:text-3xl pl-32 small:pl-14 py-1 at">
            Souvik Bhattacharya
          </p>
          <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/h1&gt;</div>
          <div className="text-gray-600 pl-20 small:pl-10 web">&lt;p&gt;</div>
          <p className="text-2xl mini:text-lg pl-32 small:pl-14">
            I&apos;m a{" "}
            <span className="text-cyan inline-block at">Full Stack</span>{" "}
            Developer
          </p>
          <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/p&gt;</div>
          <div className="text-gray-600 pl-20 small:pl-10 web">&lt;h1&gt;</div>
          <div className="text-4xl mini:text-2xl flex whitespace-nowrap pl-32 small:pl-14 py-1 h">
            <p>
              My <span className="text-cyan inline-block at">Tech Stack</span>
            </p>
            <span className="dot">...</span>
          </div>
          <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/h1&gt;</div>
          <div className="text-gray-600 pl-20 small:pl-10 web">&lt;div&gt;</div>
          <div className="pl-32 small:pl-14">
            <div className="flex flex-wrap gap-5 items-center">
              <i
                className="devicon-c-original colored at text-5xl"
                title="C"
              ></i>
              <i class="devicon-r-plain colored at text-5xl" title="R"></i>
              <i
                className="devicon-python-plain colored at text-5xl"
                title="Python"
              ></i>
              <i
                class="devicon-numpy-plain colored at text-5xl"
                title="Numpy"
              ></i>
              <i
                class="devicon-pandas-plain-wordmark at text-5xl"
                title="Pandas"
              ></i>
              <i
                className="devicon-java-plain colored at text-5xl"
                title="Java"
              ></i>
              <i
                class="devicon-spring-original colored at text-5xl"
                title="Spring Framework"
              ></i>
              <img
                src={SPRING_BOOT}
                alt="Spring Boot"
                title="Spring Boot"
                className="h-[48px] at"
              />
              <i
                class="devicon-hibernate-plain colored at text-5xl"
                title="Hibernate"
              ></i>
              <i
                className="devicon-html5-plain colored at text-5xl"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain colored at text-5xl"
                title="CSS"
              ></i>
              <i
                class="devicon-bootstrap-plain colored at text-5xl"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-tailwindcss-plain colored at text-5xl"
                title="Tailwind CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored at text-5xl"
                title="JavaScript"
              ></i>
              <i
                className="devicon-typescript-plain colored at text-5xl"
                title="TypeScript"
              ></i>
              <i
                className="devicon-react-original colored at text-5xl"
                title="React.js"
              ></i>
              <i
                className="devicon-nextjs-plain at text-5xl"
                title="Next.js"
              ></i>
              <i
                class="devicon-angularjs-plain colored at text-5xl"
                title="AngularJS"
              ></i>
              <i
                class="devicon-angular-plain colored at text-5xl"
                title="Angular"
              ></i>
              <i
                className="devicon-nodejs-plain-wordmark colored at text-5xl"
                title="Node.js"
              ></i>
              <i
                className="devicon-express-original at text-5xl"
                title="Express.js"
              ></i>
              <i
                class="devicon-handlebars-original-wordmark at text-5xl"
                title="Handlebars"
              ></i>
              <i
                className="devicon-php-plain colored at text-5xl"
                title="PHP"
              ></i>
              <i
                className="devicon-laravel-original colored at text-5xl"
                title="Laravel"
              ></i>
              <i
                className="devicon-mongodb-plain-wordmark colored at text-5xl"
                title="MongoDB"
              ></i>
              <i
                className="devicon-mysql-plain colored at text-5xl"
                title="MySQL"
              ></i>
              <i
                className="devicon-git-plain colored at text-5xl"
                title="Git"
              ></i>
            </div>
          </div>
          <div className="text-gray-600 pl-20 small:pl-10 web">
            &lt;/div&gt;
          </div>
        </div>
        <div className="flex flex-col h-auto justify-center ml-20 small:ml-10 items-start w-fit pr-4">
          <div className="text-gray-600 web">
            &lt;img src=
            <br />
            &quot;
          </div>
          <img
            src={PROFILE_PICTURE}
            alt="Profile Pic"
            className="h-64 mb-1 rounded-tr-lg rounded-bl-lg rotate-3 grayscale"
          />
          <div className="text-gray-600 text-end self-end web">
            &quot;
            <br />
            alt=&quot;souvik&quot;/&gt;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
