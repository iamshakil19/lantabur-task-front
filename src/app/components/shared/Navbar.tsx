import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-600 h-[84px]">
      <div className="container mx-auto flex items-center justify-between h-full">
        <p className="text-white font-bold text-3xl cursor-pointer">Lantabur</p>
        <ul className="flex gap-5 text-white font-medium">
          <li className="cursor-pointer">Dashboard</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
