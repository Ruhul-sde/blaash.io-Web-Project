import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Title = ({ text, showButton }) => {
  const navigate = useNavigate();
  
  // const [showButtonState, setShowButtonState] = useState(showButton);

  const handleGenerateCode = () => {
    navigate('/generate-code-settings');
  };

  return (
    <>
      <div className="w-full pt-8 pb-4 flex items-center justify-between">
        <h5 className="text-lg font-semibold text-white">{text}</h5>
        {showButton && (
          <div className="bg-[#017DFF] px-3 py-2 rounded-xl text-base font-semibold flex items-center gap-2">
            <svg
              width="19"
              height="11"
              viewBox="0 0 19 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9367 10.2266H13.2344C15.8297 10.2266 17.961 8.10394 17.961 5.50002C17.961 2.9047 15.8383 0.77344 13.2344 0.77344H11.9367"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.78909 0.77344H5.50002C2.89611 0.77344 0.77344 2.89611 0.77344 5.50002C0.77344 8.09534 2.89611 10.2266 5.50002 10.2266H6.78909"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.92971 5.49906H12.8047"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <button onClick={handleGenerateCode} className="text-white rounded-xl">Generate Code</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Title;
