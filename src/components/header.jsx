import { useEffect, useState, useRef } from "react";
import "../styles/header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
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
    : "bg-transparent fixed w-full top-0 z-[999]";

  return (
    <>
      <nav className={navbarClass}>
        <div className="container flex justify-between items-center">
          <h1 className="logo text-black px-10 py-2 text-2xl font-bold">
            Ree<span className="text-rose-500">ves</span>
          </h1>

          <div className="absolute right-5 text-3xl lg:hidden">
            <i
              className={`bi bi-${
                mobileMenuOpen ? "x-lg" : "list"
              } text-black font-bold`}
              onClick={toggleMobileMenu}
            ></i>
          </div>

          <div
            className={`link absolute flex px-2 flex-col right-4 top-14 w-full bg-white max-w-[200px] py-2 shadow-lg rounded-lg text-black border-rose-500 ${
              mobileMenuOpen ? "block" : "hidden"
            } lg:static lg:block lg:max-w-full lg:shadow-none lg:rounded-none lg:bg-transparent lg:text-black`}
          >
            <ul className="lg:flex lg:justify-center lg:font-normal font-semibold font-montserrat">
              <li>
                <a href="" className="mx-5 py-3 flex lg:text-xl">
                  <i className="bi bi-house mr-3 text-xl lg:hidden"></i>Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavLinkClick(e, "about")}
                  className="mx-5 py-3 flex lg:text-xl"
                >
                  <i className="bi bi-info-circle mr-3 text-xl lg:hidden"></i>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavLinkClick(e, "services")}
                  className="mx-5 py-3 flex lg:text-xl"
                >
                  <i className="bi bi-grid mr-3 text-xl lg:hidden"></i>Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavLinkClick(e, "portfolio")}
                  className="mx-5 py-3 flex lg:text-xl"
                >
                  <i className="bi bi-people mr-3 text-xl lg:hidden"></i>
                  Portfolio
                </a>
              </li>
              <li className="lg:hidden">
                <a href="" className="mx-5 py-3 flex lg:text-xl text-md">
                  <i className="bi bi-envelope mr-3 text-xl lg:hidden"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <button className="lg:flex w-[150px] mr-8 hidden border border-black text-black mt-2">
            <a href="" className="px-7 py-2">
              <span>Contact</span>
              <i className="bi bi-envelope"></i>
            </a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
