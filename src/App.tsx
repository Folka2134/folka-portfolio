import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    [],
  );

  const particleOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 70,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      move: {
        enable: true,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 10,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.2, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative h-full min-h-screen min-w-[450px] bg-black">
      <Particles
        className="absolute left-0 top-0 z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />

      <div className="relative z-20  pt-5 xl:pt-0">
        <Header />
        <main className="mx-10 my-5 h-full  rounded-2xl font-body xl:my-12">
          <section
            id="about-container"
            className="flex flex-col justify-center gap-5"
          >
            <About />
            <Banner />
          </section>
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
