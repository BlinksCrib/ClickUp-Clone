import { useState } from "react";
// import image from "../../assets/images/HeaderLogo.png";
// import logo from "../../assets/svg/kampusly.svg";
// import times from "../../assets/svg/times.svg";
// import menubar from "../../assets/svg/menubar.svg";
// import 'animate.css'
import { Link } from "react-router-dom";
// import DarkModeSwitch from './DarkModeSwitch'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handClick = () => {
    setNav(!nav);
  };

  const handClose = () => {
    setNav(!nav);
  };

  return (
    <header
      className={
        nav
          ? " bg-orange_light h-[70px] py-[10.5px] fd:px-[0] sm:px-[64px] px-[36px] w-full fixed z-[10] "
          : " bg-orange_light h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10] mb-[5rem]"
      }
    >
      <nav className="flex justify-between h-full w-full items-center">
        <Link to="/">
          {/* <img src={logo} alt="home" className="lg:w-[80%] w-[70%]" /> */}
        </Link>

        <ul className="md:flex hidden items-center space-x-6">
          <li>
            <Link
              to="/about"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/notification"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Notification
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link
              to="/payment"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Payment
            </Link>
          </li> */}
          <li>
            <Link
              to="/subscription"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              subscription
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              profile
            </Link>
          </li>
          <li>
            <Link
              to="/find-roomate"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
             Find Roomate
            </Link>
          </li>
          
          <li>
            <Link
              to="/find-friend"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              friend-request
            </Link>
          </li>        

          {/* <DarkModeSwitch /> */}
        </ul>

        <button className="md:hidden cursor-pointer " onClick={handClick}>
          {nav ? (
            <h1>c</h1>
            // <Times className='w-20 h-7' />
            // <img src={times} alt="times" />
          ) : (
            <h1>o</h1>
            // <img src={menubar} alt="times" />
          )}
        </button>
      </nav>

      {/* mobile view */}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 bg-white  w-full h-full ease-in duration-500"
            : "fixed left-[-100%] h-screen  ease-out duration-700"
        }
      >
        <ul className="text-center space-y-10 py-10">
          <li onClick={handClose}>
            <Link
              to="/"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Home
            </Link>
          </li>
          <li onClick={handClose}>
            <Link
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li onClick={handClose}>
            <Link
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link
              to="/payment"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Payment
            </Link>
          </li> */}
          <li>
            <Link
              to="/friendreq"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Friend Request
            </Link>
          </li>
          <li>
            <Link
              to="/subscription"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              subscription
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              profile
            </Link>
          </li>
          {/* <li>
            <Link
              to="/full-notification"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              full-notification
            </Link>
          </li> */}
          <li>
            <Link
              to="/find-roomate"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
             Find Roomate
            </Link>
          </li>
        
          <div className="flex justify-center items-center">
            {/* <DarkModeSwitch /> */}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;