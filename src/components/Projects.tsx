import { projectData } from "../assets/data/projects";

const Projects = () => {
  return (
    <div
      id="projects-container"
      className="mb-5 flex flex-col items-center justify-center rounded-2xl pt-5 lg:mb-52"
    >
      <h1 className="my-2 h-16 text-2xl text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {projectData.map((project) => (
          <div className="mx-5 mb-8 overflow-hidden rounded-2xl bg-white bg-opacity-95 shadow-md transition-all duration-300 ease-linear hover:shadow-2xl">
            <img className="w-full" src={project.image} alt="Mountain" />
            <div className="flex px-6 py-4">
              <div className="flex-1 border-r-[1px] p-4">
                <header className="mb-2 text-xl font-bold">
                  {project.title}
                </header>
                <p className="text-lg text-gray-700">
                  {project.description}
                  <br></br>
                  <br></br>
                  {project.functionality}
                </p>
              </div>
              <div className="flex-1 p-4 pl-6">
                <header className="text-xl font-bold">
                  Project Improvements
                </header>
                <ul className="list-disc p-2 text-lg text-gray-700">
                  {project.improvements.map((improvement) => (
                    <li>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              {project.tags.map((tag) => (
                <span className="tag gap-2 text-white hover:scale-110 ">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-2 ">
              <span className="button mb-2 mr-2 inline-block px-3 py-1 text-sm font-semibold hover:bg-[#0068B1] hover:text-white">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              </span>
              <span className="button mb-2 mr-2 inline-block px-3 py-1 text-sm font-semibold hover:bg-[#E94E31] hover:text-white">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  Github
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
