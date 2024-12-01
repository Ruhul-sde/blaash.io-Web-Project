import React from "react";

const DropSet = ({text}) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-3 py-2 bg-white bg-opacity-5 rounded-lg">
          <span className=" text-white font-medium ">{text}</span>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.10002 0.597096C1.36653 0.597096 1.63304 0.688109 1.84345 0.883138L6.05151 4.7837L10.2596 0.883137C10.6664 0.506083 11.3396 0.506083 11.7464 0.883137C12.1532 1.26019 12.1532 1.88428 11.7464 2.26134L6.79494 6.851C6.38816 7.22805 5.71487 7.22805 5.30809 6.851L0.356598 2.26134C-0.0501809 1.88428 -0.0501809 1.26019 0.356598 0.883138C0.567002 0.688109 0.833512 0.597096 1.10002 0.597096Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DropSet;
