import instragam from "../assets/instragam.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className="py-6 mt-auto text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-center text-center md:flex-row">
        <div className="px-10 md:w-1/2">
          <h1 className="py-2 text-2xl font-bold text-white lg:text-3xl ">
            Let's keep in touch!
          </h1>
          <h1 className="text-white">Follow Us On</h1>
          <div className="flex justify-center py-5 space-x-5 text-center icon">
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
            <a href="" target="_blank" rel="noopener noreferrer">
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
      <h1 className="block text-sm font-thin text-center opacity-50 font-poppins">
        &copy; Copyright 2023
      </h1>
    </footer>
  );
};

export default Footer;
