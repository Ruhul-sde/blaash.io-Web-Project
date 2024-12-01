import React, { useState } from "react";

const Dropdown = ({ icon, text, secondaryText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
        className={`w-full flex flex-col items-center pl-10 pr-10 rounded-2xl ${isOpen ? 'bg-[#27272F] border border-blue-500' : ''}`}
        onClick={toggleDropdown}
      >
        <div className="w-full pt-5 pb-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            {icon}
            <h5 className={`text-lg font-semibold ${isOpen ? 'text-white' : 'text-[#6B6A78]'}`}>{text}</h5>
          </div>
          <svg
            width="15"
            height="12"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              d="M9.99229 1.00763L5.49996 6.17171L1.00763 1.00763"
              stroke={isOpen ? "#FFFFFF" : "#828293"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="w-full pb-5">
            <h5 className="text-base font-medium text-white bg-[#3A3A45] p-3 rounded-lg">{secondaryText}</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
