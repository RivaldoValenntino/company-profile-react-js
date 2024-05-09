import { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    console.log(mobileMenuOpen);
    const handleScrolling = () => {
      if (window.scrollY > 1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScrolling);
  });
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (event, elementId) => {
    event.preventDefault();
    scrollToElement(elementId);
    setMobileMenuOpen(false);
  };

  const navbarClass = scrolling
    ? "bg-[#f5f5f5] bg-opacity-50 backdrop-blur-2xl shadow-md fixed w-full top-0 z-[999]"
    : "bg-white fixed w-full top-0 z-[999]";
  return (
    <>
      <nav className={navbarClass}>
        <div className="container flex items-center justify-between">
          <h1 className="px-10 py-2 text-2xl font-bold text-black logo">
            Ree<span className="text-rose-500">ves</span>
          </h1>

          <div className="absolute text-md right-5 lg:hidden">
            <i
              className={`bi bi-${
                mobileMenuOpen ? "x-lg" : "list"
              } text-black font-bold`}
              onClick={toggleMobileMenu}
            ></i>
          </div>

          <div
            className={`link absolute flex px-2 flex-col right-4 top-14 w-full bg-gray-100 max-w-[200px] py-2 shadow-2xl rounded-lg text-black border-rose-500 ${
              mobileMenuOpen ? "block" : "hidden"
            } lg:static lg:block lg:max-w-full lg:shadow-none lg:rounded-none lg:bg-transparent lg:text-black`}
          >
            <ul className="font-semibold lg:flex lg:justify-center lg:font-normal font-montserrat">
              <li>
                <a href="" className="flex py-3 mx-5 lg:text-md">
                  <i className="mr-3 text-md bi bi-house lg:hidden"></i>Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavLinkClick(e, "about")}
                  className="flex py-3 mx-5 lg:text-md "
                >
                  <i className="mr-3 text-md bi bi-info-circle lg:hidden"></i>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavLinkClick(e, "services")}
                  className="flex py-3 mx-5 lg:text-md"
                >
                  <i className="mr-3 text-md bi bi-grid lg:hidden"></i>Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavLinkClick(e, "portfolio")}
                  className="flex py-3 mx-5 lg:text-md"
                >
                  <i className="mr-3 text-md bi bi-people lg:hidden"></i>
                  Portfolio
                </a>
              </li>
              <li className="lg:hidden">
                <a href="" className="flex py-3 mx-5 lg:text-md text-md">
                  <i className="mr-3 text-md bi bi-envelope lg:hidden"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
