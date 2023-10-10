import { useState } from "react";

const Accordion = ({ accordionData }) => {
  const [accordions, setAccordions] = useState(accordionData.map(() => false));

  const toggleAccordion = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[index] = !updatedAccordions[index];
    setAccordions(updatedAccordions);
  };

  return (
    <div className="lg:w-1/2 lg:flex lg:justify-center lg:pb-12 flex flex-col flex-wrap w-full px-10 justify-center items-center">
      <div className="accordion-caption text-white lg:mt-2 lg:mb-0 mb-5">
        <h1 className="lg:text-3xl text-2xl font-poppins font-bold block mb-4 text-yellow-400 tracking-wide">Why Choose Us?</h1>
        <p className="text-base font-thin">
          We are thrilled to share this lucrative opportunity with you. Does
          your business require innovative and efficient custom software? Are
          you looking to streamline your operations, enhance productivity, or
          achieve bigger goals? At Reeves, we are ready to assist you in
          achieving all of that!
        </p>
      </div>
      <div className="accordion w-full h-auto lg:py-5 pb-10">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item mt-4">
            <input type="checkbox" id={`accordion-item-${index}`} hidden />
            <label
              htmlFor={`accordion-item-${index}`}
              className="accordion-title cursor-pointer flex items-center justify-between p-4 bg-[#1e293b] rounded-lg"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-white text-lg font-poppins">
                {item.title}
              </span>
              <svg
                className={`w-6 h-6 fill-current text-white ${
                  accordions[index] ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </label>
            <div
              className={`accordion-content bg-[#0f1725] p-4 ${
                accordions[index] ? "block" : "hidden"
              }`}
            >
              <p className="text-white">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
