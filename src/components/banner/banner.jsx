import bgImg from "../../images/img-5.webp";
const Banner = () => {
  return (
    <>
      <div className="container relative">
        <section
          className="w-screen text-white bg-opacity-25 bg-center bg-cover banners"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center">
            <div className="z-50 max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-extrabold text-white capitalize sm:text-5xl">
                Growing your business with us
                <span className="sm:block"> Increase Your Revenue </span>
              </h1>

              <p className="max-w-xl mx-auto mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#"
                >
                  Get Started
                </a>

                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
