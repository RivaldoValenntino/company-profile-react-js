import React from "react";

const Caption = (props) => {
  const caption = [
    "Crafting Digital Excellence, One Line of Code at a Time",
    "Coding Dreams, Building Futures",
    "Designing Tomorrow's Digital Landscape",
    "Web Solutions Beyond Imagination",
    "Building a Digital Culture of Innovation",
  ]
  return (
    <div className="embla__caption absolute inset-0 flex items-center justify-center lg:text-4xl text-center text-2xl text-white font-semibold">
    <p style={{ textShadow: "3px 3px 5px #000000" }}>{caption[props.index]}</p>
   </div>
  );
};

export default Caption;
