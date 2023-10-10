import React from "react";
import instragam from "../assets/instragam.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";  
import linkedin from "../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div
        className="container flex flex-col justify-center md:flex-row items-center
      text-center"
      >
        <div className="md:w-1/2 px-10">
          <h1 className="text-white py-2 text-2xl lg:text-3xl font-bold ">
            Let's keep in touch!
          </h1>
          <h1 className="text-white">Follow Us On</h1>
          <div className="icon flex justify-center space-x-5 py-5 text-center">
            <a href="">
              <div className="rounded-full bg-white p-2 w-[3rem] h-[3rem] flex justify-center items-center hover:opacity-70">
                <img src={facebook} alt="Facebook" />
              </div>
            </a>
            <a href="">
              <div className="rounded-full bg-white p-2 h-[3rem] w-[3rem] flex justify-center items-center hover:opacity-70">
                <img src={linkedin} alt="" />
              </div>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full bg-white p-2 w-[3rem] h-[3rem] flex justify-center items-center hover:opacity-70">
                <img src={instragam} alt="Instragam" />
              </div>
            </a>
            <a href="">
              <div className="rounded-full bg-white p-2 w-[3rem] h-[3rem] text-center flex justify-center items-center hover:opacity-70">
                <img src={youtube} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center block font-poppins font-thin text-sm opacity-50">
        &copy; Copyright 2023
      </h1>
    </footer>
  );
};

export default Footer;
