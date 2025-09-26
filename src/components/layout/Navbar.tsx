"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { link: "Home", href: "/" },
    { link: "Gallery", href: "/gallery" },
    { link: "Events", href: "/events" },
    { link: "About Us", href: "/about" },
    { link: "Contact", href: "/contact" },
  ];

  // ✅ Close mobile menu when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full min-h-fit top-0 left-0 z-50 font-baskervvilleSC">
      <div className="">
        <div className="bg-[#0F363B] backdrop-blur-md text-[#F7EBD5] shadow-md flex justify-between items-center flex-row-reverse px-6 py-2 lg:px-16 ">
          {/* Brand */}
          <div className="flex-shrink-0">
            <img
              className="p-2 w-16 md:w-20 rounded-full"
              src="/images/brands/bsb/brand.jpg"
              alt="BSB LOGO"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className=" hidden md:flex space-x-0 text-[#F7EBD5] text-lg lg:text-xl ">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`hover:text-[#B58124] hover:font-medium transition-colors duration-300 focus:font-bold focus:border-b-4 focus:border-[#B58124] md:p-2 ${
                  pathname === link.href
                    ? "border-b-4 border-[#B58124] font-bold transition-colors duration-300"
                    : "transition-colors duration-300 "
                }`}
              >
                {link.link}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="pl-2 md:hidden transition-colors duration-300">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={38} /> : <Menu size={38} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden transition-colors duration-300 max-w-fit h-fit flex flex-col bg-[#0F363B] backdrop-blur-md text-[#F7EBD5] shadow-md"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-[#B58124] transition-colors duration-300 focus:border-b-4 focus:border-[#B58124] text-sm px-7 py-4 text-center"
            >
              {link.link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
