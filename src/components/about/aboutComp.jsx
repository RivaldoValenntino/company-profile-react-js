const AboutComp = () => {
  return (
    <>
      <div className="about md:col-span-1">
        <div className="about-quotes pb-5 tracking-widest lg:text-4xl text-xl">
          <span className="font-poppins text-[1rem] lg:text-[1.5rem] text-rose-600 tracking-normal block py-2">
            About Us
          </span>
          <span className="font-poppins font-semibold block">
            Crafting Digital Excellence, One Line of Code at a Time
          </span>
          <span className="font-poppins block font-semibold">
            Empowering Your Online Presence
          </span>
        </div>
        <div className="about-caption">
          <p className="text-base">
            Our passion is to help you build your online presence.
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            recusandae atque accusamus quia nisi sint porro corrupti, eligendi
            eveniet. Voluptas!
          </p>
        </div>
        <div className="about-achievement py-5 mt-10 lg:flex lg:gap-20 flex gap-5">
          <div className="succesfull mb-5">
            <span className="font-poppins font-bold block text-center text-rose-600 text-3xl">
              100+
            </span>
            <span className="font-poppins block mt-2 text-md text-center">
              Succesfull Projects
            </span>
          </div>
          <div className="succesfull mb-5">
            <span className="font-poppins font-bold block text-center text-rose-600 text-3xl">
              50+
            </span>
            <span className="font-poppins block mt-2 text-md text-center">
              Happy Clients
            </span>
          </div>
          <div className="succesfull">
            <span className="font-poppins font-bold block text-center text-rose-600 text-3xl">
              10+
            </span>
            <span className="font-poppins block mt-2 text-md text-center">
              Years Experience
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComp;
