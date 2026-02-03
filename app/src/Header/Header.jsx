import React from "react";

const Header = () => {
  return (
    <div className="bg-[#1F2229] h-16 flex items-center px-4 text-white justify-between">
      <div>
        <p>EdDesign</p>
      </div>
      <div className="flex flex-row gap-6">
        <p>Home</p>
        <p>Info</p>
        <p>Contact</p>
        <p>Get In Touch</p>
      </div>
    </div>
  );
};

export default Header;
