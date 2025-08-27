"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full min-h-20 top-0 left-0 z-50 bg-[#0F363B] backdrop-blur-md text-[#F7EBD5] shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:mx-20 lg:my-3">
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
            <Link
              href="#hero"
              className="hover:text-[#B58124] focus:border-b-4 focus:border-[#B58124] md:p-2"
            >
              Home
            </Link>
            <Link
              href="#events"
              className="focus:border-b-4 focus:border-[#B58124] md:p-2"
            >
              Events
            </Link>
            <Link
              href="#gallery"
              className="focus:border-b-4 focus:border-[#B58124] md:p-2"
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="focus:border-b-4 focus:border-[#B58124] md:p-2"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="focus:border-b-4 focus:border-[#B58124] md:p-2"
            >
              Contact
            </Link>
          </div>

          {/* CTA (Desktop Only) */}
          <div className="hidden md:block">
            <Link href="#events">
              <button className="md:px-5 md:py-3 cursor-pointer bg-[#F7EBD5] text-[#061517] font-baskervville font-normal text-xl leading-7 tracking-[0.2%] hover:bg-[#B58124] hover:font-bold transition">
                Discover Events
              </button>
            </Link>
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
          <Link
            href="#hero"
            className="focus:border-b-4 focus:border-[#B58124] p-2"
          >
            Home
          </Link>
          <Link
            href="#events"
            className="focus:border-b-4 focus:border-[#B58124] p-2"
          >
            Events
          </Link>
          <Link
            href="#gallery"
            className="focus:border-b-4 focus:border-[#B58124] p-2"
          >
            Gallery
          </Link>
          <Link
            href="#about"
            className="focus:border-b-4 focus:border-[#B58124] p-2"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="focus:border-b-4 focus:border-[#B58124] p-2"
          >
            Contact
          </Link>
          <Link href="#events">
            <button className="bg-[#F7EBD5] text-[#061517] px-3 py-5 cursor-pointer font-baskervville font-normal text-xl leading-7 tracking-[0.2%] hover:bg-[#061517] hover:text-[#F7EBD5] transition">
              Discover Events
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
