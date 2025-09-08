import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F363B] text-[#F7EBD5] pb-2">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Brand / Logo */}
        <div className="flex flex-col gap-4 items-center space-x-2 my-8">
          <Link href="/">
            <p className="font-playfair uppercase text-lg font-semibold">
              BSB Travel Concepts
            </p>
          </Link>
        </div>
        {/* Quick Links */}
        <div className="flex space-x-6 font-baskervvilleSC">
          <Link href="#gallery" className="hover:text-[#B58124]">
            Gallery
          </Link>
          <Link href="#events" className="hover:text-[#B58124]">
            Events
          </Link>
          <Link href="#about" className="hover:text-[#B58124]">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-[#B58124]">
            Contact
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <p className="font-baskervville italic text-center text-[8px] leading-4 tracking-wide text-[#FCFBF8] md:text-[12px] md:leading-5 lg:text-sm lg:leading-6">
        &copy; 2025 BSB Travel Concepts | A subsidiary of ONLINE DYNAMICS
        LIMITED
      </p>
    </footer>
  );
};

export default Footer;
