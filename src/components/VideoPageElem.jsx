import React from "react";


const VideoPageElem = ({ image, productCount, duration }) => {
  return (
    <>
      <div className="w-[10vw] h-[33vh] rounded-[30px] overflow-hidden m-7 relative">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img
            src={image}
            alt="video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C24] via-transparent to-transparent opacity-100"></div>
        </div>
        <div className="w-full h-full relative z-10">
          <div className="w-20  h-8 bg-[#35373C] text-white text-sm rounded-bl-3xl absolute right-0 top-0 flex items-center justify-center">
            {duration}
          </div>
          <div className="w-12 h-12 bg-[#36373B] rounded-br-3xl absolute left-0 top-0 flex items-center justify-center">
            <div
              onClick={(e) => {
                const isBlue = e.currentTarget.classList.toggle("bg-blue-500");
                e.currentTarget.classList.toggle("border-blue-500");
                const icon = e.currentTarget.querySelector("svg");
                if (isBlue) {
                  icon.classList.remove("opacity-0");
                  icon.classList.add("opacity-100");
                } else {
                  icon.classList.remove("opacity-100");
                  icon.classList.add("opacity-0");
                }
              }}
              className="w-5 h-5 border rounded-lg border-gray-400 overflow-hidden flex items-center justify-center cursor-pointer"
            >
              <svg
                className="w-3 h-3 text-white opacity-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="w-full h-[7vh] bg-[#1C1C24] absolute bottom-0 flex flex-col items-center justify-center gap-1">
            <h4 className="text-white text-sm font-medium">Video Title Name</h4>
            <h5 className="text-white text-xs">
              Product Attachment:{productCount}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPageElem;
