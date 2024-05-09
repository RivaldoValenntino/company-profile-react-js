import AboutComp from "../components/about/aboutComp";
import AboutImage from "../components/about/aboutImg";

const AboutPage = () => {
  return (
    <>
      <div className="container" id="about">
        <section className="grid items-center grid-cols-1 gap-8 px-10 mt-5 lg:px-20 md:grid-cols-2">
          <AboutComp />
          <AboutImage />
        </section>
      </div>
    </>
  );
};

export default AboutPage;
