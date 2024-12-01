import React from "react";

const DropElem = ({ svg, text }) => {
  return (
    <>
      <div className="w-full h-20 p-4 border border-[#FFFFFF1A] rounded-lg flex items-center gap-4">
        {svg}
        <h5 className="text-white opacity-80">{text}</h5>
      </div>
    </>
  );
};

export default DropElem;
