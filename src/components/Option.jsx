import React from "react";

const Option = ({ icon, text }) => {
  return (
    <>
      <div className="w-full pl-10 pr-10 pt-5 pb-5 flex items-center gap-5">
        {icon}
        <h5 className="text-lg font-semibold text-[#6B6A78]">{text}</h5>
      </div>
    </>
  );
};

export default Option;
