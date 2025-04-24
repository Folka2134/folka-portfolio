import { projectData } from "../assets/data/projects";

const Projects = () => {
  return (
    <div
      id="projects-container"
      className="flex flex-col items-center justify-center lg:mb-52"
    >
      <h1 className="my-8 text-2xl text-white">Projects</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {projectData.map((project) => (
          <div className="flex flex-col rounded-2xl bg-white bg-opacity-95 shadow-md transition-all duration-300 ease-linear hover:shadow-2xl">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="h-80 w-full"
              />
            </a>
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mt-3 px-8">
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
                <div className="mt-3 px-8">
                  <header className="text-lg font-bold">
                    Further development...
                  </header>
                  <ul className="list-disc text-lg text-gray-700">
                    {project.improvements.map((improvement) => (
                      <li>{improvement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span className="tag text-white hover:scale-110 ">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-2">
                  <span className="button mb-2 mr-2 inline-block px-3 py-1 text-sm font-semibold hover:bg-[#0068B1] hover:text-white">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </span>
                  <span className="button mb-2 mr-2 inline-block px-3 py-1 text-sm font-semibold hover:bg-[#E94E31] hover:text-white">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
