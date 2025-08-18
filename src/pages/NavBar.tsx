"use client";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full max-h-20 fixed top-0 left-0 z-50 bg-[#0F363B] backdrop-blur-md text-[#F7EBD5] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <div>
            <img src="/public/favicon-32x32.png" alt="BSB LOGO" />
          </div>

          {/* Desktop Nav Links */}
          <div>
            <a href="#">Home</a>
            <a href="#">Event</a>
            <a href="#">Gallery</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>

          {/* CTA (Desktop Only) */}
          <div>
            <button>Discover Events</button>
          </div>

          {/* Mobile Menu Button */}
          {/* <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Gallery</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <button>Register</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
