import React from "react";
import work1 from "../images/work-1.jpg";
import work2 from "../images/work-2.jpeg";
import work3 from "../images/work-3.png";
import PortfolioHeader from "../components/portfolio/portfolioHeader";
import WorkItem from "../components/portfolio/workItem";

const PortfolioPage = () => {
  const works = [
    {
      id: 1,
      title: "Work Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestiae.",
      image: work1,
    },
    {
      id: 2,
      title: "Work Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deserunt quaerat ipsam non rem minima!",
      image: work2,
    },
    {
      id: 3,
      title: "Work Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae?",
      image: work3,
    },
  ];
  return (
    <>
      <div className="container" id="portfolio">
        <section>
          <div className="work w-screen mt-5 lg:mt-20 py-10 lg:px-20 px-8">
            <PortfolioHeader />
            <div className="content py-10 grid gap-5 grid-cols-1 md:grid-cols-3">
              {works.map((work) => (
                <WorkItem key={work.id} work={work} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
