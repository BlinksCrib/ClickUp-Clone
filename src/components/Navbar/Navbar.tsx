import { useEffect, useState } from "react";
// import 'animate.css'
import { Link } from "react-router-dom";
import { Logo } from "../../utils/Icons";
import Links from "../../utils/Links";
// import DarkModeSwitch from './DarkModeSwitch'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  // to show background or not
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // to show background or not

  const handClick = () => {
    setNav(!nav);
  };

  const handClose = () => {
    setNav(!nav);
  };

  return (
    <header
      className={`
        ${
          nav
            ? " bg-[#ffffff] h-[70px] py-[10.5px] w-full fixed z-[10] flex justify-center-items-center"
            : "bg-[#ffffff] h-[70px] py-[10.5px] w-full fixed z-[10] mb-[5rem] flex justify-center items-center"
        } ${isVisible ? "header-shadow" : ""}`}
    >
      <nav className="flex justify-between h-full w-[95%] items-center">
        <aside className="flex justify-center items-center">
          <Link to="/" className="mr-6">
            <Logo />
          </Link>
          <div>
            <aside className="lg:block hidden">
              <Links />

              {/* <DarkModeSwitch /> */}
            </aside>
          </div>
        </aside>

        <aside className="flex justify-center items-center">
          <button className="py-2 px-6 font-bold lg:block hidden">Contact sales</button>
          <button className="mx-6 bg-[rgb(123,104,238)] px-6 py-2 rounded-lg font-bold text-[#ffffff]">Sign Up</button>
          <button className="bg-[rgba(233,235,240)] px-6 py-2 rounded-lg font-bold md:block hidden">Log In</button>
        </aside>

        <button className="lg:hidden cursor-pointer " onClick={handClick}>
          {nav ? (
            <i className="fa-solid fa-x"></i>
            ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </nav>

      {/* mobile view */}

      <div
        className={
          nav
            ? "lg:hidden fixed left-0 bg-[#ffffff] mt-[4rem]  w-full h-full ease-in duration-500"
            : "fixed left-[-100%] h-screen  ease-out duration-700"
        }
      >
        <ul className="text-center space-y-10 py-10">
          <Links handClose={handClose} />

          <div className="flex justify-center items-center">
            {/* <DarkModeSwitch /> */}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
