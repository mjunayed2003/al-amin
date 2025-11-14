"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTimes,
  FaBars,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const MasterLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/experiences", label: "Experiences" },
    { href: "/skill", label: "Skill" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/md-al-amin-68058224a/", Icon: FaLinkedinIn },
    { href: "#", Icon: FaXTwitter },
    { href: "#", Icon: FaFacebookF },
    { href: "https://wa.me/8801780585001", Icon: BsWhatsapp },
  ];

  // Mobile menu animation
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <header className="fixed left-0 right-0 z-50 px-4">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md shadow-lg border border-gray-200/80 px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600"
          >
            AL AMIN
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 hover:text-blue-600 relative group ${
                  pathname === link.href ? "text-blue-600" : ""
                }`}
              >
                {link.label}
                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Social + CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map(({ href, Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-all duration-300 hover:text-blue-600 hover:scale-110"
              >
                <Icon size={20} />
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-gray-800 text-white font-bold py-2 px-5 rounded-full hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-gray-700 hover:text-blue-600"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     <div>
       <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-white z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <Link href="/" className="text-2xl font-bold text-teal-600" onClick={() => setMenuOpen(false)}>
                AL AMIN
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                <FaTimes size={26} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center h-full -mt-16 text-gray-700 font-medium text-xl gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors duration-200 hover:text-blue-600 ${
                    pathname === link.href ? "text-blue-600" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300"
              >
                Let's Talk
              </Link>

              {/* Social Links Mobile */}
              <div className="flex justify-center space-x-6 mt-8">
                {socialLinks.map(({ href, Icon }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition-all duration-300 hover:text-blue-600 hover:scale-110"
                  >
                    <Icon size={24} />
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
     </div>
    </header>
  );
};

export default MasterLayout;
