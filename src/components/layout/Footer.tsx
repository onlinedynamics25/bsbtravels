import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    { Icon: FaFacebook, href: "https://facebook.com" },
    { Icon: FaInstagramSquare, href: "https://instagram.com" },
    { Icon: FaXTwitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-deepteal-80 text-golden-10 pb-2">
      <div className="max-w-6xl mx-auto px-2 md:px-4 flex flex-col md:flex-row justify-between items-center ">
        {/* Brand / Logo */}

        <Link href="/" className="flex flex-col items-center justify-center ">
          <div className="flex flex-col gap-2 items-center my-4 md:px-2 ">
            <div className="relative text-center ">
              <img
                className="absolute inset-0 z-10 w-16 left-5 md:left-8 md:w-20 rounded-full"
                src="/images/brands/odl/brand1.png"
                alt="ODL LOGO"
              />
              <img
                className="relative w-16 -left-5 md:-left-8 md:w-20 rounded-full"
                src="/images/brands/bsb/brand.jpg"
                alt="BSB LOGO"
              />
            </div>
            <div className="text-center ">
              <p className="font-playfair uppercase text-lg font-semibold md:text-2xl ">
                BSB Travel Concepts
              </p>
              <p className="italic text-sm md:text-lg ">
                ...that all may prosper...
              </p>
            </div>
          </div>
        </Link>

        {/* Quick Links and Socials */}
        <div className="flex flex-col gap-4">
          {/* Quick Links */}
          <div className="flex gap-2 font-baskervvilleSC">
            <Link
              href="#gallery"
              className="hover:text-golden-60 transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link
              href="#events"
              className="hover:text-golden-60 transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              href="#about"
              className="hover:text-golden-60 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="hover:text-golden-60 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Social media links */}
          <div className="flex flex-row items-center justify-center text-[#F3F0E3] gap-2 pb-2 lg:gap-6 ">
            {socials.map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="hover:text-golden-60 transition-colors duration-300 w-6 h-6 lg:w-10 lg:h-10 " />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <p className="font-baskervville italic text-center text-[8px] leading-4 tracking-wide text-linen-10 md:text-[12px] md:leading-5 lg:text-sm lg:leading-6">
        &copy; 2025 BSB Travel Concepts | A subsidiary of ONLINE DYNAMICS
        LIMITED
      </p>
    </footer>
  );
};

export default Footer;
