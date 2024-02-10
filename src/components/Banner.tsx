import { IconContext } from "react-icons";

import {
  // FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  // FaGitAlt,
  // FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiPostgresql, SiExpress, SiMongodb } from "react-icons/si";

const Banner = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: "155",
          className: "opacity-80 transition-all duration-500",
        }}
      >
        <div className="mt-4 hidden overflow-hidden rounded-2xl bg-[#0068B1] bg-opacity-25 p-10 md:block">
          <div className="flex w-full flex-wrap justify-center text-2xl md:text-3xl">
            {/* <div className="group p-5 text-center">
              <FaHtml5 className="hover:text-[#e94546]" />
              <span className="transition-all duration-500 group-hover:text-white">
                HTML
              </span>
            </div>
            <div className="group p-5 text-center">
              <FaCss3Alt className="hover:text-blue-600" />
              <span className="transition-all duration-500 group-hover:text-white">
                CSS
              </span>
            </div> */}
            <div className="group p-5 text-center">
              <FaJsSquare className="hover:text-[#f7df1e]" />
              <span className="transition-all duration-500 group-hover:text-white">
                JavaScript
              </span>
            </div>
            <div className="group p-5 text-center">
              <FaReact className="hover:text-blue-400" />
              <span className="transition-all duration-500 group-hover:text-white">
                React
              </span>
            </div>
            <div className="group p-5 text-center">
              <FaNodeJs className="hover:text-[#83cd29]" />
              <span className="transition-all duration-500 group-hover:text-white">
                NodeJs
              </span>
            </div>
            <div className="group p-5 text-center">
              <SiExpress className="hover:text-red-700" />
              <span className="transition-all duration-500 group-hover:text-white">
                Express
              </span>
            </div>
            <div className="group p-5 text-center">
              <FaPython className="hover:text-[#316192]" />
              <span className="transition-all duration-500 group-hover:text-white">
                Python
              </span>
            </div>
            <div className="group p-5 text-center">
              <SiPostgresql className="hover:text-[#316192]" />
              <span className="transition-all duration-500 group-hover:text-white">
                Prostgres
              </span>
            </div>
            <div className="group p-5 text-center">
              <SiMongodb className="hover:text-[#4c8e42]" />
              <span className="transition-all duration-500 group-hover:text-white">
                MongoDB
              </span>
            </div>
            <div className="group group p-5 text-center">
              <FaGitAlt className="hover:text-[#f05033]" />
              <span className="transition-all duration-500 group-hover:text-white">
                Git
              </span>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Banner;
