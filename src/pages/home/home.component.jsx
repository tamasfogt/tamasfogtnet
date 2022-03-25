import ProjectsOverview from "../../components/projects-overview/projects-overview.component";

function Home() {
  return (
    <div>
      <div className=" rounded-xl p-4 mb-16">
        <div>
          <div className="text-6xl font-bold text-center">Welcome</div>
          <div className="my-5">
            <div className="text-center mx-auto max-w-xl text-gray-300 text-lg font-semibold">
              The purpose of this website is to give you and idea about who I am
              and what I'm good at. At the bottom of the page you can find my
              tech stack and past experiences.
            </div>
          </div>
        </div>
      </div>
      <ProjectsOverview></ProjectsOverview>
      <div className="mt-12 mb-4 text-3xl font-semibold">My Story</div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col">
          <div className="mr-6">
            <div className="max-w-xl rounded-xl overflow-hidden shadow-lg mx-1 bg-gray-900 p-4  mb-3">
              <p className="text-lg font-semibold">In short</p>
              <p>
                I am a Full stack developer now focusing on mostly JavaScript.
                (React, Vue, Angular, NodeJs )
              </p>
            </div>
          </div>
          <div className="ml-6">
            <div className="max-w-xl  rounded-xl rounded overflow-hidden shadow-lg mx-1 bg-gray-900 text-gray-200 p-4 ">
              <p className="text-lg font-semibold">Little longer:</p>
              <p>
                I went to University of Miskolc after high school and got my BSC
                as a Software Engineer. During the University years I went to
                some programming competitions and joined to an robot building
                club. It was a fun time.
              </p>
              <p className="mt-3 font-semibold">Corporate experience:</p>
              <p className="my-1">
                In the last year of University I started to work for Misys. We
                built banking software in JAVA. Angular just came out at that
                time and in a new project they started to use it so I applied
                and joined to that project. It was the beginning of my front end
                developer career.
              </p>
              <p className="my-1">
                I learned a lot about Angular there but then wanted more so I
                joined a company which was focusing on Fronted development. It
                was also angular and I was a full stack developer there.
                (Angular + Java)
              </p>
              <p className="mt-3 font-semibold">Freelancing:</p>
              <p className="my-1">
                Then I got bored and wanted to travel so I started freelancing.
                I was a freelancer for 5 years.
              </p>
              <p className="my-1">
                I worked mostly with Angular. But also worked with Laravel and
                Yii2. We mostly used relational databases like Mysql but
                recently I had more Mongo projects.
              </p>
              <p className="my-3 font-bold">
                My motto is: "Never stop learning"
              </p>
              <p className="my-1 font-semibold text-lg">
                Now I'm focusing on NodeJs, Mongo and react as my tech stack.
                It's just more convenient to write everything in JS.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="max-w-xl ml-auto ">
              <div className="flex">
                <img
                  className=" h-14"
                  src="https://gitlab.com/uploads/-/system/project/avatar/24920805/logo-extra-whitespace.png"
                  alt="gitlab"
                />
                <img
                  className=" h-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                  alt="tailwind"
                />
                <img
                  className=" h-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt="react"
                />
                <img
                  className=" h-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                  alt="nodejs"
                />
                <img
                  className=" h-14"
                  src="https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
                  alt="nodejs"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:px-16">
          <img
            className="max-w-sm mx-auto rounded-full"
            src="https://www.getbidbar.com/assets/blog/programming_topics.jpg"
            alt="project"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
