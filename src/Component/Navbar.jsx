import React from "react";
import logo from "../assets/logo.png";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-transparent px-7 py-10 ">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="w-70 " />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-20  text-2xl font-bold text-[#023047] font-[Share_Tech_Mono]">
            <li>Projects</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-[#023047] text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-end  mt-4 gap-4 text-lg font-bold text-[(#E0AA3E)] font-[Josefin Sans] z-10 ">
            <li>Projects</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
