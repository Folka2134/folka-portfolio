import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
  const controls = useAnimation();

  const handleScroll = () => {
    // Get the vertical scroll position
    const scrollY = window.scrollY;

    // Define the trigger point (adjust as needed)
    const triggerPoint = window.innerHeight * 0.1;

    // Check if the element is in the viewport
    if (scrollY > triggerPoint) {
      controls.start({ y: 0, opacity: 1 });
    }
  };

  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)

  let viewVariants = {};
  let initialVariants = {};
  if (!isMobile) {
    viewVariants = {
      duration: 0.8,
      type: "spring",
      stiffness: 70,
    };
    initialVariants = {
      y: "200%",
      opacity: 0,
    };
  }

  // Attach the scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={initialVariants}
      variants={viewVariants}
      animate={controls}
    >
      <div>
        <IconContext.Provider
          value={{
            size: "155",
            className: "opacity-80 transition-all duration-500",
          }}
        >
          <div className="mt-4 overflow-hidden rounded-2xl bg-[#0068B1] bg-opacity-25 p-10 ">
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
    </motion.div>
  );
};

export default Banner;
