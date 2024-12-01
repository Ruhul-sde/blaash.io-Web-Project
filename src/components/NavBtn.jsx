import React from "react";

const NavBtn = ({ icon, text }) => {
  return (
    <>
      <div className="flex items-center gap-2 py-1 px-2 rounded-lg border border-blue-500">
        {icon}
        <h5 className="text-white text-sm">{text}</h5>
      </div>
    </>
  );
};

export default NavBtn;
