import React from "react";

const DropSet2nd = ({ text }) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-3 py-2 bg-transparent border border-[#484851]  rounded-lg">
          <span className=" text-white font-normal text-sm opacity-80">{text}</span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.746399 0.834351L4.07764 4.16559L7.40888 0.834351"
              stroke="white"
              stroke-opacity="0.6"
              stroke-width="1.14097"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DropSet2nd;
