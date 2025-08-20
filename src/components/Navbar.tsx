"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full min-h-20 fixed top-0 left-0 z-50 bg-[#0F363B] backdrop-blur-md text-[#F7EBD5] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mx-20 lg:my-3">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <div className="flex-shrink-0">
            <img
              className="p-3 w-20 rounded-full"
              src="/bsb-logo.jpg"
              alt="BSB LOGO"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className=" hidden md:flex space-x-0 font-baskervvilleSC text-[#F7EBD5] text-xl leading-7 tracking-[0.2%]">
            <a href="#hero" className="md:p-2">
              Home
            </a>
            <a href="#events" className="md:p-2">
              Events
            </a>
            <a href="#gallery" className="md:p-2">
              Gallery
            </a>
            <a href="#about" className="md:p-2">
              About Us
            </a>
            <a href="#contact" className="md:p-2">
              Contact
            </a>
          </div>

          {/* CTA (Desktop Only) */}
          <div className="hidden md:block">
            <button className="md:px-3 md:py-5 bg-[#F7EBD5] text-[#061517] font-baskervville font-normal text-xl leading-7 tracking-[0.2%]">
              Discover Events
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden w-fit h-fit flex flex-col font-baskervvilleSC">
          <a href="#hero" className="p-2">
            Home
          </a>
          <a href="#events" className="p-2">
            Events
          </a>
          <a href="#gallery" className="p-2">
            Gallery
          </a>
          <a href="#about" className="p-2">
            About Us
          </a>
          <a href="#contact" className="p-2">
            Contact
          </a>
          <button className="bg-[#F7EBD5] text-[#061517] px-3 py-5 font-baskervville font-normal text-xl leading-7 tracking-[0.2%]">
            Discover Events
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
