"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  FiDownload,
  FiArrowRight,
  FiLinkedin,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const EnhancedHeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen w-full bg-gray-50 flex items-center justify-center font-sans overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:mt-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE TEXT */}
          <motion.div
            className="text-center lg:text-left mt-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-lg text-teal-600 font-semibold mb-2"
              variants={itemVariants}
            >
              Hey, there! 
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight"
              variants={itemVariants}
            >
             I am 
             <span className="text-teal-600"> Al Amin</span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-gray-600 mt-4 relative inline-block"
              variants={itemVariants}
            >
              Biochemistry & Molecular Biology Researcher
              <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-yellow-400"></span>
            </motion.h2>

            <motion.p
              className="text-md text-gray-500 mt-8 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Bridging computational drug design with wet-lab molecular biology to
              tackle complex challenges like antibiotic resistance.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-7 py-3 
                bg-teal-500 text-white font-bold rounded-full shadow-lg 
                hover:bg-teal-600 transition-all duration-300"
              >
                My Research <FiArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-7 py-3 
                bg-white text-teal-500 border-2 border-teal-500 font-bold 
                rounded-full shadow-lg hover:bg-teal-50 transition-all duration-300"
              >
                <FiDownload /> Download CV
              </motion.button>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              className="mt-12 flex justify-center lg:justify-start items-center gap-6"
              variants={itemVariants}
            >
              <p className="text-sm font-medium text-gray-500">Connect with me:</p>

              <Link href="https://www.linkedin.com/in/md-al-amin-68058224a/" className="text-gray-500 hover:text-teal-600 transition-colors duration-300">
                <FiLinkedin size={24} />
              </Link>

              <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors duration-300">
                <FiGithub size={24} />
              </Link>

              <Link href= "mailto:alaminanft.iu@gmail.com" className="text-gray-500 hover:text-teal-600 transition-colors duration-300">
                <FiMail size={24} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="absolute w-full h-full bg-teal-100 rounded-3xl transform -rotate-6 scale-105"></div>

            <motion.div
              className="relative z-10 w-[300px] h-[450px] md:w-[350px] md:h-[525px]"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/alamin.png"
                alt="AL Amin"
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
