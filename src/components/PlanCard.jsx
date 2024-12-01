import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlanCard = () => {
  const navigate = useNavigate();

  const handleStartTrial = () => {
    navigate('/step3');
  };

  return (
    <>
      <div className="w-[25vw] h-[28vw] bg-[#27272F] border border-[#484851] relative overflow-hidden">
        <div className="w-32 h-32 bg-[#484851] absolute top-[-65px] left-[-65px] transform rotate-45 drop-shadow-[0_5px_2px_rgba(0,0,0,0.4)]"></div>
        <div className="w-full h-full flex flex-col">
          <div className="text-white flex flex-col gap-1 items-center justify-center pt-10 pb-5 ">
            <h2 className="text-xl font-semibold">Always included</h2>
            <h3 className="text-[#828293] text-base font-base">
              For Brands under 20k visitors / month.
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <svg
              width="358"
              height="10"
              viewBox="0 0 358 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.669873 5L5 9.33013L9.33013 5L5 0.669873L0.669873 5ZM357.33 5L353 0.669873L348.67 5L353 9.33013L357.33 5ZM5 5.75H353V4.25H5V5.75Z"
                fill="#393940"
              />
            </svg>
            <div className="w-full  flex items-center justify-between px-16 py-3 gap-2">
              <div className="flex flex-col">
                <h2 className=" text-white text-3xl font-bold">$99</h2>
                <h3 className="text-[#828293] text-base font-base">
                  per month
                </h3>
              </div>
              <button onClick={handleStartTrial} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-r border-b border-white border-1">
                START FREE TRIAL
              </button>
            </div>
            <svg
              width="358"
              height="10"
              viewBox="0 0 358 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.669873 5L5 9.33013L9.33013 5L5 0.669873L0.669873 5ZM357.33 5L353 0.669873L348.67 5L353 9.33013L357.33 5ZM5 5.75H353V4.25H5V5.75Z"
                fill="#393940"
              />
            </svg>
          </div>
          <div className=" flex flex-col px-16 py-4 gap-3 ">
            <div className="flex items-center gap-2  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0713 1.85193L16.7125 9.50831L9.0713 17.1495L1.41492 9.50831L9.0713 1.85193Z"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="5"
                  height="5"
                  fill="#fff"
                  transform="rotate(45 9.5 9.5)"
                />
              </svg>

              <span className="text-white text-base font-regular">
                14-days free trial
              </span>
            </div>
            <div className="flex items-center gap-2  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0713 1.85193L16.7125 9.50831L9.0713 17.1495L1.41492 9.50831L9.0713 1.85193Z"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="5"
                  height="5"
                  fill="#fff"
                  transform="rotate(45 9.5 9.5)"
                />
              </svg>

              <span className="text-white text-base font-regular">
                Shoppable videos
              </span>
            </div>
            <div className="flex items-center gap-2  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0713 1.85193L16.7125 9.50831L9.0713 17.1495L1.41492 9.50831L9.0713 1.85193Z"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="5"
                  height="5"
                  fill="#fff"
                  transform="rotate(45 9.5 9.5)"
                />
              </svg>

              <span className="text-white text-base font-regular">
                All interactions
              </span>
            </div>
            <div className="flex items-center gap-2  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0713 1.85193L16.7125 9.50831L9.0713 17.1495L1.41492 9.50831L9.0713 1.85193Z"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="5"
                  height="5"
                  fill="#fff"
                  transform="rotate(45 9.5 9.5)"
                />
              </svg>

              <span className="text-white text-base font-regular">
                All Video Components
              </span>
            </div>
            <div className="flex items-center gap-2  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0713 1.85193L16.7125 9.50831L9.0713 17.1495L1.41492 9.50831L9.0713 1.85193Z"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="5"
                  height="5"
                  fill="#fff"
                  transform="rotate(45 9.5 9.5)"
                />
              </svg>

              <span className="text-white text-base font-regular">
                All app integration
              </span>
            </div>
            <div className="flex items-center gap-2  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0713 1.85193L16.7125 9.50831L9.0713 17.1495L1.41492 9.50831L9.0713 1.85193Z"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="5"
                  height="5"
                  fill="#fff"
                  transform="rotate(45 9.5 9.5)"
                />
              </svg>

              <span className="text-white text-base font-regular">
                Share in Email, SMS, Social, QR code
              </span>
            </div>
            <div className="flex items-center gap-2  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0713 1.85193L16.7125 9.50831L9.0713 17.1495L1.41492 9.50831L9.0713 1.85193Z"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="5"
                  height="5"
                  fill="#fff"
                  transform="rotate(45 9.5 9.5)"
                />
              </svg>

              <span className="text-white text-base font-regular">
                Online support
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
