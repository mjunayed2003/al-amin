"use client";

import React from "react";
import Link from "next/link";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-12 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* About / Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">AL AMIN</h2>
            <p className="text-gray-400">
              Biochemistry & Molecular Biology Researcher bridging computational drug design
              with wet-lab molecular biology to tackle complex challenges.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FiMail /> 
                <Link href="mailto:alaminanft.iu@gmail.com" className="hover:text-teal-500">
                  alaminanft.iu@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FiPhoneCall /> 
                <Link href="tel:+8801780585001" className="hover:text-teal-500">
                  +8801780585001
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <div className="flex items-center gap-4 text-gray-400">
              <Link href="https://www.linkedin.com/in/md-al-amin-68058224a/" target="_blank" className="hover:text-teal-500">
                <BsLinkedin size={24} />
              </Link>
              <Link href="https://wa.me/8801780585001" target="_blank" className="hover:text-teal-500">
                <BsWhatsapp size={24} />
              </Link>
              <Link href="#" target="_blank" className="hover:text-teal-500">
                <BsInstagram size={24} />
              </Link>
              <Link href="#" target="_blank" className="hover:text-teal-500">
                <BsGithub size={24} />
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AL AMIN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
