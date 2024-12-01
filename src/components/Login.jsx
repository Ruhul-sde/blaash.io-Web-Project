import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assests/Images/logo-png-white.png";
import left from "../assests/Images/login-left-top.png";
import right from "../assests/Images/login-right-bottom.png";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    countryCode: "",
    phoneNumber: "",
    role: "",
    hearAbout: "",
  });

  const handleContinue = () => {
    navigate("/step2", { state: formData });
  };

  return (
    <>
      <div className="w-full h-screen bg-[#1B1B23] px-[10vw] flex gap-10 relative ">
        <div className="w-full relative z-10 flex ">
          <div className="w-[19vw] h-[80vh] bg-[#077EEE] rounded-b-[2vw] ">
            <div className="w-[19vw] h-[79vh] bg-[#27272F] rounded-b-[2vw] px-14 py-12">
              <img className="w-[150px]" src={logo} alt="" />
              <div className="flex items-center gap-4 mt-16">
                <div className="relative w-12 h-12">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <svg
                      width="48"
                      height="48"
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
                <div className="w-[.2vw] h-[6vh]  rounded-md bg-gradient-to-br from-[#F7B563] to-[#FF73C8] mt-4 mb-4 "></div>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="relative w-12 h-12">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <svg
                      width="48"
                      height="48"
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
                        stroke="#848492"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                      />
                    </svg>
                    <span className="absolute text-[#848492] text-xl font-semibold drop-shadow-[0_5px_2px_rgba(0,0,0,0.4)]">
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
              <div className="w-[.2vw] h-[12vh] ml-[22px] rounded-md bg-[#848492] mt-4 mb-4 "></div>
              <div className="flex items-center gap-4 ">
                <div className="relative w-12 h-12">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <svg
                      width="48"
                      height="48"
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
                        stroke="#848492"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                      />
                    </svg>
                    <span className="absolute text-[#848492] text-xl font-semibold drop-shadow-[0_5px_2px_rgba(0,0,0,0.4)]">
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
          <div className="w-[80vw] h-[70vh]  mt-[17vh] ml-[10vh]">
            <h3 className="text-[#848492] text-2xl font-regular">Step 1/3</h3>
            <h1 className="text-4xl text-white font-bold mt-2">
              Enter Your Details
            </h1>
            <form>
              <div className="mt-14 flex flex-col gap-6">
                <div className="flex justify-between gap-6 my-1 ">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name *"
                      className="w-[500px] h-14 bg-transparent border border-gray-600 px-5 text-white placeholder:text-gray-200"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name *"
                      className="w-[500px] h-14 bg-transparent border border-gray-600 px-5 text-white placeholder:text-gray-200"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="my-1">
                  <input
                    type="text"
                    placeholder="Email Address *"
                    className="w-full h-14 bg-transparent border border-gray-600 px-5 text-white placeholder:text-gray-200"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="my-1">
                  <input
                    type="text"
                    placeholder="Set Password *"
                    className="w-full h-14 bg-transparent border border-gray-600 px-5 text-white placeholder:text-gray-200"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <div className="w-full h-14 bg-transparent border border-gray-600 px-5">
                  <select className="w-[170px] h-full bg-[#1B1B23]  text-gray-200 outline-none">
                    <option value="" disabled selected>
                      Select Country Code
                    </option>
                    <option value="+1">+1 (USA/Canada)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+86">+86 (China)</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+49">+49 (Germany)</option>
                    <option value="+81">+81 (Japan)</option>
                    <option value="+7">+7 (Russia)</option>
                    <option value="+34">+34 (Spain)</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-[calc(100%-170px)] h-full pl-4 bg-[#1B1B23] text-white placeholder:text-gray-400 outline-none"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between gap-6 my-1 ">
                  <div>
                    <select
                      className="w-[500px] h-14 bg-[#1B1B23] border border-gray-600 px-5 text-white"
                      required
                    >
                      <option value="" disabled selected>
                        What's Your Role?
                      </option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="product_manager">Product Manager</option>
                      <option value="marketing">Marketing Professional</option>
                      <option value="business">Business Professional</option>
                      <option value="founder">Founder/CEO</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-[500px] h-14 bg-[#1B1B23] border border-gray-600 px-5 text-white"
                      required
                    >
                      <option value="" disabled selected>
                        How did you hear about Blaash?
                      </option>
                      <option value="search">
                        Search Engine (Google, Bing, etc.)
                      </option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend/Colleague Referral</option>
                      <option value="blog">Blog/Article</option>
                      <option value="conference">Conference/Event</option>
                      <option value="advertisement">
                        Online Advertisement
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <button
              className="w-[10vw] h-14 uppercase text-xl bg-[#077EEE] rounded-lg mt-6 text-white font-medium flex items-center justify-center gap-2"
              onClick={handleContinue}
            >
              Continue
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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

export default Login;
