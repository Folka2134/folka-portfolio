import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="flex h-52 items-center justify-center rounded-2xl bg-[url(src/assets/images/header-background.jpg)] bg-contain opacity-70 md:h-96 xl:min-h-screen xl:bg-cover xl:bg-no-repeat">
      <Link to="about-container" smooth={true}>
        <h1 className="font-header duration-5 animate-pulse cursor-pointer px-3 text-4xl text-[#A32F31] outline-dashed outline-2 outline-offset-2 md:text-7xl">
          folka.dev
        </h1>
      </Link>
    </div>
  );
};

export default Header;
