import React from "react";

const VideoImg = ({ image }) => {
  return (
    <>
      <div className="w-[15vw] h-[20vh] rounded-[30px] overflow-hidden m-7 relative">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img
            src={image}
            alt="video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C24] via-transparent to-transparent opacity-100"></div>
        </div>
        <div className="w-full h-full relative z-10">
          <div className="w-12 h-12 bg-[#36373B] rounded-bl-3xl absolute right-0 top-0 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16667 8.33337C3.25 8.33337 2.5 9.08337 2.5 10C2.5 10.9167 3.25 11.6667 4.16667 11.6667C5.08333 11.6667 5.83333 10.9167 5.83333 10C5.83333 9.08337 5.08333 8.33337 4.16667 8.33337Z"
                stroke="#C0C0D6"
                stroke-width="1.5"
              />
              <path
                d="M15.8334 8.33337C14.9167 8.33337 14.1667 9.08337 14.1667 10C14.1667 10.9167 14.9167 11.6667 15.8334 11.6667C16.7501 11.6667 17.5001 10.9167 17.5001 10C17.5001 9.08337 16.7501 8.33337 15.8334 8.33337Z"
                stroke="#C0C0D6"
                stroke-width="1.5"
              />
              <path
                d="M9.99992 8.33337C9.08325 8.33337 8.33325 9.08337 8.33325 10C8.33325 10.9167 9.08325 11.6667 9.99992 11.6667C10.9166 11.6667 11.6666 10.9167 11.6666 10C11.6666 9.08337 10.9166 8.33337 9.99992 8.33337Z"
                stroke="#C0C0D6"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div dir="rtl">
            <div className="w-7 h-7 rounded-s-3xl bg-blue-400 absolute left-0 bottom-12"></div>
            <h5 className="text-white absolute left-9 text-lg font-semibold bottom-12">Product Playlist Name</h5>
          </div>
          <div className="w-full h-[4vh] bg-[#1C1C24] absolute bottom-0 flex items-center justify-center gap-2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4584 5.66663H3.54175C3.15216 5.66663 2.83341 5.34788 2.83341 4.95829C2.83341 4.56871 3.15216 4.24996 3.54175 4.24996H13.4584C13.848 4.24996 14.1667 4.56871 14.1667 4.95829C14.1667 5.34788 13.848 5.66663 13.4584 5.66663ZM12.0417 1.41663H4.95841C4.56883 1.41663 4.25008 1.73538 4.25008 2.12496C4.25008 2.51454 4.56883 2.83329 4.95841 2.83329H12.0417C12.4313 2.83329 12.7501 2.51454 12.7501 2.12496C12.7501 1.73538 12.4313 1.41663 12.0417 1.41663ZM15.5834 8.49996V14.1666C15.5834 14.9458 14.9459 15.5833 14.1667 15.5833H2.83341C2.05425 15.5833 1.41675 14.9458 1.41675 14.1666V8.49996C1.41675 7.72079 2.05425 7.08329 2.83341 7.08329H14.1667C14.9459 7.08329 15.5834 7.72079 15.5834 8.49996ZM10.7597 11.0216L7.08341 9.01704V13.6425L10.7597 11.645C11.0076 11.5104 11.0076 11.1562 10.7597 11.0216Z"
                fill="white"
                fillOpacity="0.8"
              />
            </svg>
            <h4 className="text-white">5 Videos</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoImg;
