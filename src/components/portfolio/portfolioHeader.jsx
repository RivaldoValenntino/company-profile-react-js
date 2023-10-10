const PortfolioHeader = () => {
  return (
    <>
      <div className="title">
        <h1 className="text-rose-600 font-bold font-poppins block text-[1rem] lg:text-[1.5rem]">
          Our Work
        </h1>
      </div>
      <div className="flex lg:justify-between lg:flex-row justify-center flex-col">
        <p className="text-black text-3xl lg:text-5xl font-poppins font-normal block tracking-wide mt-2 lg:mt-5">
          Presenting Our <br />
          Latest <span className="text-yellow-400">Work</span>
        </p>
        <p className="text-base w-full lg:w-1/3 lg:mt-8 mt-5">
          Our team of experts is here to help you grow your business and achieve
          your goals with our cutting-edge solutions and services
        </p>
      </div>
    </>
  );
};

export default PortfolioHeader;