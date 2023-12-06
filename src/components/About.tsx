import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";

const About = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    // Get the vertical scroll position
    const scrollY = window.scrollY;

    // Define the trigger point (adjust as needed)
    const triggerPoint = window.innerHeight * 0.5;

    // Check if the element is in the viewport
    if (scrollY > triggerPoint) {
      controls.start({ x: 0, opacity: 1 });
    }
  };

  const isMobile = window.innerWidth < 768;
  let viewVariants = {};
  let initialVariants = {};
  if (!isMobile) {
    viewVariants = { duration: 0.8 };
    initialVariants = { x: "-200%", opacity: 0 };
  }

  // Attach the scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={initialVariants}
      animate={controls}
      transition={viewVariants}
    >
      <section
        id="about"
        className="rounded-2xl border-[1px] border-[#F1A277] bg-white bg-opacity-80 p-8 md:w-2/3 lg:w-1/2 xl:w-1/3 xl:p-12"
      >
        <h2 className="p-3 text-2xl font-semibold xl:text-4xl">Hey!</h2>
        <p className="text-md text-[#212832] xl:text-2xl">
          I'm Otis, AKA Folka. A fresh software developer from Brighton, UK.{" "}
          <br />
          Currently on the hunt for coding oppotunities to expand my knowledge.
          <br />
          <br />
          Check out my{" "}
          <Link to="projects-container" smooth={true}>
            <span className="cursor-pointer font-semibold text-[#A32F31] underline underline-offset-4 transition-all hover:text-[#0090A5]">
              Projects
            </span>
          </Link>
        </p>
      </section>
    </motion.div>
  );
};

export default About;
