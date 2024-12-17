"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Admissions from "./admissions";

const NavBAr = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Animation Variants
  const dropdownVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <nav className="relative bg-navbg text-white shadow-md">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 justify-end md:flex-row items-center relative">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span>Services</span>
            {isDropdownOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
                className="absolute mt-2"
              >
                <Admissions/>
              </motion.div>
            )}
          </div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 p-5"
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <span className="block h-0.5 w-6 bg-white rotate-45"></span>
            <span className="block h-0.5 w-6 bg-white -rotate-45 -translate-y-1"></span>
          </button>
          <ul className="mt-8 space-y-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <div
                className="cursor-pointer"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Services
                {isDropdownOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    className="ml-4 mt-2 space-y-2"
                  >
                    <li>
                      <Link href="#">Service 1</Link>
                    </li>
                    <li>
                      <Link href="#">Service 2</Link>
                    </li>
                  </motion.ul>
                )}
              </div>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBAr;