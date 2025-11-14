"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiSend,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

// --- TypeScript Type Definitions ---
interface ContactInfo {
  Icon: IconType;
  label: string;
  value: string;
  href?: string;
}

interface ConnectLink {
  Icon: IconType;
  label: string;
  href: string;
}

interface Interest {
  title: string;
  description: string;
}

// --- Data for the component (Easy to update) ---
const contactInfoData: ContactInfo[] = [
  { Icon: FiMail, label: "Email", value: "alaminanft.iu@gmail.com", href: "mailto:alaminanft.iu@gmail.com" },
  { Icon: FiMapPin, label: "Location", value: "Rangpur, Bangladesh" },
  { Icon: FiPhoneCall, label: "Available For", value: "Research Collaborations & PhD Opportunities" },
];

const connectLinksData: ConnectLink[] = [
  { Icon: FiSend, label: "Send Email", href: "mailto:alaminanft.iu@gmail.com" },
  { Icon: BsWhatsapp, label: "What's App", href: "https://wa.me/8801780585001" },
  { Icon: FiLinkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/md-al-amin-68058224a/" },
  { Icon: FiGithub, label: "GitHub Profile", href: "#" },


];

const interestData: Interest[] = [
  { title: "Molecular Biology", description: "Gene-protein interactions, CRISPR applications" },
  { title: "Drug Discovery", description: "Computational drug design, MD simulations" },
  { title: "AMR Research", description: "Antibiotic resistance, genomic surveillance" },
];



// --- Main Component ---
const ContactSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-b from-teal-50/50 via-white to-white py-16 sm:py-24 font-sans pt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Section Header --- */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in research collaboration, PhD opportunities, or discussing molecular biology research? I'd love to connect with you.
          </p>
        </motion.div>

        {/* --- Contact Cards Grid --- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Card: Contact Information */}
          <motion.div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfoData.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                    <Icon className="text-teal-500" size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">{label}</p>
                    <Link href={href || '#'} className={`text-lg font-semibold text-gray-700 ${href ? 'hover:text-teal-600' : ''}`}>
                      {value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card: Connect With Me */}
          <motion.div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {connectLinksData.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center p-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-teal-400 transition-all duration-300"
                >
                  <Icon className="mr-4 text-gray-500" size={20} />
                  <span>{label}</span>
                </Link>
              ))}
              <button className="w-full mt-4 flex items-center justify-center gap-3 p-4 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300">
                <FiDownload size={20} />
                Download Full CV
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Bottom Card: Research Interests --- */}
        <motion.div
          className="bg-teal-50/70 border border-teal-200/50 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Research Collaboration Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {interestData.map(({ title, description }) => (
              <div key={title}>
                <h4 className="text-xl font-semibold text-gray-700">{title}</h4>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;