import React from "react";

const Properties = ({text, svg}) => {
  return (
    <>
      <div>
        <div className="w-[8vw] flex justify-between items-center px-3 py-2 bg-transparent border border-[#484851]  rounded-lg">
          <span className=" text-white font-normal text-sm opacity-80">
            {text}
          </span>
          {svg}
        </div>
      </div>
    </>
  );
};

export default Properties;
