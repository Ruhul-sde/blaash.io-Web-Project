import React from "react";
import logo from "../assests/Images/logo-png-white.png";
import left from "../assests/Images/login-left-top.png";
import right from "../assests/Images/login-right-bottom.png";

const Step3 = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#1B1B23] px-[10vw] flex gap-2 relative ">
        <div className="w-full relative z-10 flex ">
          <div className="w-[19vw] h-[80vh] bg-[#077EEE] rounded-b-[2vw] ">
            <div className="w-[19vw] h-[79vh] bg-[#27272F] rounded-b-[2vw] px-14 py-12">
              <img className="w-[150px]" src={logo} alt="" />
              <div className="flex items-center gap-4 mt-16">
                <div className="relative w-12 h-12">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" style={{ stopColor: "#F7B563" }} />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#FF73C8" }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7985 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42756 21 7.59889 21 7.94153V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7985 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52345 17.2909 3.37369 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42756 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37369 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177Z"
                        stroke="url(#gradient)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="url(#gradient)"
                      />
                    </svg>
                    <span className="absolute text-white text-xl font-semibold drop-shadow-[0_5px_2px_rgba(0,0,0,0.4)]">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-lg font-medium">
                    Account Details
                  </span>
                  <span className="text-gray-400">
                    Enter account details to...
                  </span>
                </div>
              </div>
              <div className="w-[.2vw] h-[12vh] ml-[22px] rounded-md bg-[#848492] mt-4 mb-4 ">
                <div className="w-[.2vw] h-[12vh]  rounded-md bg-gradient-to-br from-[#F7B563] to-[#FF73C8] mt-4 mb-4 "></div>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="relative w-12 h-12">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" style={{ stopColor: "#F7B563" }} />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#FF73C8" }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7985 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42756 21 7.59889 21 7.94153V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7985 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52345 17.2909 3.37369 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42756 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37369 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177Z"
                        stroke="url(#gradient)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="url(#gradient)"
                      />
                    </svg>
                    <span className="absolute text-white text-xl font-semibold drop-shadow-[0_5px_2px_rgba(0,0,0,0.4)]">
                      2
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#848492] text-lg font-medium">
                    Pricing Plan
                  </span>
                  <span className="text-gray-400">Choose Plan By Visitor</span>
                </div>
              </div>
              <div className="w-[.2vw] h-[12vh] ml-[22px] rounded-md bg-[#848492] mt-4 mb-4 ">
                <div className="w-[.2vw] h-[12vh]  rounded-md bg-gradient-to-br from-[#F7B563] to-[#FF73C8] mt-4 mb-4 "></div>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="relative w-12 h-12">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" style={{ stopColor: "#F7B563" }} />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#FF73C8" }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7985 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42756 21 7.59889 21 7.94153V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7985 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52345 17.2909 3.37369 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42756 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37369 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177Z"
                        stroke="url(#gradient)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="url(#gradient)"
                      />
                    </svg>
                    <span className="absolute text-white text-xl font-semibold drop-shadow-[0_5px_2px_rgba(0,0,0,0.4)]">
                      3
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#848492] text-lg font-medium">
                    Activation
                  </span>
                  <span className="text-gray-400">Last Step To Go!</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[55vw] mb-14 mt-[17vh] ml-[12vh]  ">
              <h5 className="text-[#848492] text-2xl font-regular">Step 3/3</h5>
              <h1 className="text-3xl text-white font-semibold mt-2">
                Activate your plan with Blaash
              </h1>
            </div>
            <div className="flex gap-5 ml-[12vh] justify-between">
              <div className="flex flex-col w-[35vw] gap-6">
                <div className="w-full h-[13vh] bg-[#27272F] border border-[#484851] relative">
                  <img
                    className="absolute z-10 w-[110px] top-4 right-4 "
                    src={logo}
                    alt=""
                  />
                  <div className="p-3 absolute z-9">
                    <h2 className="text-white text-xl font-bold">
                      Blaash Video Platform
                    </h2>
                    <h3 className="text-[#828293] text-[17px] font-regular mt-3">
                      By Blaash | eCommerce Video Platform
                    </h3>
                    <h3 className="text-[#828293] text-[17px] font-regular ">
                      This App Bills your for a recurring subscription and usage
                      charges
                    </h3>
                  </div>
                  <svg
                    className="absolute z-0"
                    width="100%"
                    height="100%"
                    viewBox="0 0 530 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_33_2606)">
                      <path
                        d="M2 94.3946L497.488 0H530V5.60538L34.5123 100H2V94.3946Z"
                        fill="#D9D9D9"
                        fill-opacity="0.19"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_33_2606"
                        x="-62"
                        y="-64"
                        width="656"
                        height="228"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="32"
                          result="effect1_foregroundBlur_33_2606"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="w-full h-[29vh] bg-[#27272F] px-4 py-3 border border-[#484851] relative">
                  <div className="absolute z-10">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                      Plan: Scale_Monthly_plan_23
                    </h2>
                    <svg
                      className="pr-4"
                      width="100%"
                      height="15"
                      viewBox="0 0 510 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.669873 5L5 9.33013L9.33013 5L5 0.669873L0.669873 5ZM509.33 5L505 0.669873L500.67 5L505 9.33013L509.33 5ZM5 5.75H505V4.25H5V5.75Z"
                        fill="#393940"
                      />
                    </svg>
                    <h3 className="text-white text-[17px] font-normal mt-3 ">
                      Subscription details
                    </h3>
                    <h4 className="text-[#828293] text-[16px] font-normal">
                      $249.00 USD every 30 days
                    </h4>
                    <h3 className="text-white text-[17px] font-normal mt-3 ">
                      App spending limit
                    </h3>
                    <h4 className="text-[#828293] text-[16px] font-normal">
                      You'll be changed based on how you use this app(to a
                      maximum of
                    </h4>
                    <h4 className="text-[#828293] text-[16px] font-normal">
                      $1,000.00 USD per 30 days). You can update the spending
                      limit after approval.
                    </h4>
                    <h4 className="text-[#017EFA] text-[16px] font-normal underline decoration-[#017EFA] decoration-1">
                      Learn more about app spending limits.
                    </h4>
                  </div>

                  <svg
                    className="absolute top-0 left-0 z-0"
                    width="100%"
                    height="100%"
                    viewBox="0 0 530 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_33_2606)">
                      <path
                        d="M2 94.3946L497.488 0H530V5.60538L34.5123 100H2V94.3946Z"
                        fill="#D9D9D9"
                        fill-opacity="0.19"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_33_2606"
                        x="-62"
                        y="-64"
                        width="656"
                        height="228"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="32"
                          result="effect1_foregroundBlur_33_2606"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="w-full h-[13vh] bg-[#27272F] px-4 py-3 border border-[#484851] relative">
                  <div className="absolute z-10">
                    <h4 className="text-white text-2xl font-semibold mb-3 ">
                      Additional charge information and terms
                    </h4>
                    <svg
                      className="pr-4"
                      width="100%"
                      height="15"
                      viewBox="0 0 510 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.669873 5L5 9.33013L9.33013 5L5 0.669873L0.669873 5ZM509.33 5L505 0.669873L500.67 5L505 9.33013L509.33 5ZM5 5.75H505V4.25H5V5.75Z"
                        fill="#393940"
                      />
                    </svg>
                    <p className="text-[#828293] text-[16px] font-normal mt-2">
                      Extra impressions (2$ on 1k impressions)
                    </p>
                  </div>
                  <svg
                    className="absolute z-0"
                    width="100%"
                    height="100%"
                    viewBox="0 0 530 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_33_2606)">
                      <path
                        d="M2 94.3946L497.488 0H530V5.60538L34.5123 100H2V94.3946Z"
                        fill="#D9D9D9"
                        fill-opacity="0.19"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_33_2606"
                        x="-62"
                        y="-64"
                        width="656"
                        height="228"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="32"
                          result="effect1_foregroundBlur_33_2606"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className=" ">
                <div className="w-[20vw] h-[63vh] px-6 py-3 bg-[#27272F] border border-[#484851]">
                  <h2 className="text-white text-2xl font-semibold mb-3">
                    Your next bill
                  </h2>
                  <svg
                    width="100%"
                    height="15"
                    viewBox="0 0 273 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.669873 5L5 9.33013L9.33013 5L5 0.669873L0.669873 5ZM272.33 5L268 0.669873L263.67 5L268 9.33013L272.33 5ZM5 5.75H268V4.25H5V5.75Z"
                      fill="#393940"
                    />
                  </svg>
                  <h3 className="text-[#828293] text-lg font-regular mt-3">
                    You have a 14-day free trail ending on May 30.
                  </h3>
                  <div className="flex flex-col gap-4 my-3">
                    <div className="w-full  bg-white bg-opacity-[6%] border border-white border-opacity-[10%] rounded-lg">
                      <div className="flex justify-between items-center p-5">
                        <div className="text-white ">
                          <p className="text-lg font-normal">Subtotal *</p>
                          <p className="text-lg font-normal text-[#828293]">
                            Plus any aplicable taxes
                          </p>
                        </div>
                        <p className="text-white font-bold text-2xl">$245.00</p>
                      </div>
                    </div>
                    <div className="w-full  bg-white bg-opacity-[6%] border border-white border-opacity-[10%] rounded-lg">
                      <div className="flex justify-between items-center px-5 py-3">
                        <div className="text-white ">
                          <p className="text-lg font-normal">Total</p>
                          <p className="text-lg font-normal text-[#828293]">
                            Due May 30
                          </p>
                        </div>
                        <div className="flex flex-col items-end ">
                          <p className="text-white font-bold text-2xl">
                            $245.00
                          </p>
                          <p className="text-white font-bold text-2xl">USD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#828293] text-sm font-normal mt-4">
                    *This subtotal contains only your subscription fee. You will
                    also be charged based on usage, which is variable and will
                    appear on your invoices.
                  </p>
                  <button className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-xl text-white font-semibold py-2 px-4 border-r border-b border-white">
                    Approve
                  </button>
                  <p className="text-[#828293] text-sm font-normal mt-4">
                    You need to select a method before you can approve this
                    charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="w-[20vw] h-[22vw] absolute left-0 top-0 z-0"
          src={left}
          alt=""
        />
        <img
          className="w-[28vw] h-[22vw] absolute right-0 bottom-0 z-0"
          src={right}
          alt=""
        />
      </div>
    </>
  );
};

export default Step3;
