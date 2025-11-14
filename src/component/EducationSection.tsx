"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const educationData = [
  {
    degree: "BSc (Hons) in Food Science and Technology",
    institution: "Islamic University, Bangladesh (IU)",
    duration: "Jan 2018 - Dec 2023",
    cgpa: "CGPA: 3.55/4.00",
    description:
      "Strong foundation in biochemistry, molecular biology, and analytical techniques. Undergraduate research on antimicrobial properties and foodborne pathogen identification.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Notre Dame College, Dhaka",
    duration: "Jun 2015 - Apr 2017",
    cgpa: "GPA: 5.00/5.00",
    description:
      "Specialized in the science group with a focus on Physics, Chemistry, Biology, and Higher Mathematics, building a strong analytical and problem-solving foundation.",
  },
];

// Animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const EducationSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-sans pt-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-teal-500 transform -translate-x-1/2"></div>

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative ${
                  isLeft ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"
                } flex`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg w-full">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-teal-500 mr-3" size={22} />
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  </div>

                  <p className="text-gray-500 ml-9 mt-1">{edu.institution}</p>

                  <div className="ml-9 mt-3 text-sm text-gray-600 flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{edu.duration}</span>
                  </div>

                  <p className="ml-9 font-semibold text-teal-500 text-sm mt-1">{edu.cgpa}</p>

                  <p className="text-gray-600 mt-4 ml-9">{edu.description}</p>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute top-1/2 w-5 h-5 bg-white border-4 border-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
