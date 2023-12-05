import { IconContext } from "react-icons";

import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  // FaGitAlt,
  FaCss3Alt,
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
        <div className="mt-2 overflow-hidden rounded-2xl bg-[#011B32] bg-opacity-90 p-10 ">
          <div className="flex w-full flex-wrap justify-around text-2xl md:text-3xl">
            <div className="group text-center">
              <FaHtml5 className="group-hover:text-[#e94546]" />
              <span className="transition-all duration-500 group-hover:text-white">
                HTML
              </span>
            </div>
            <div className="group text-center">
              <FaCss3Alt className="hover:text-blue-600" />{" "}
              <span className="transition-all duration-500 group-hover:text-white">
                CSS
              </span>
            </div>
            <div className="group text-center">
              <FaJsSquare className="hover:text-[#f7df1e]" />
              <span className="transition-all duration-500 group-hover:text-white">
                JavaScript
              </span>
            </div>
            <div className="group text-center">
              <FaReact className="hover:text-blue-400" />{" "}
              <span className="transition-all duration-500 group-hover:text-white">
                React
              </span>
            </div>
            <div className="group text-center">
              <FaNodeJs className="hover:text-[#83cd29]" />
              <span className="transition-all duration-500 group-hover:text-white">
                NodeJs
              </span>
            </div>
            <div className="group text-center">
              <SiExpress className="hover:text-red-700" />
              <span className="transition-all duration-500 group-hover:text-white">
                Express
              </span>
            </div>
            <div className="group text-center">
              <FaPython className="hover:text-[#316192]" />
              <span className="transition-all duration-500 group-hover:text-white">
                Python
              </span>
            </div>
            <div className="group text-center">
              <SiPostgresql className="hover:text-[#316192]" />
              <span className="transition-all duration-500 group-hover:text-white">
                Prostgres
              </span>
            </div>
            <div className="group text-center">
              <SiMongodb className="hover:text-[#4c8e42]" />
              <span className="transition-all duration-500 group-hover:text-white">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Banner;
