"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

// -------------------- Animation Variants --------------------

// simple fade
const fadeSimple: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

// fade up animation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

// stagger container
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Zoom animation (for gallery)
const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// -------------------- Gallery Data --------------------
const galleryItems = [
  { src: "https://arpita-nandi.netlify.app/assets/bricm-lab-Babj6dg_.jpg", caption: "BRiCM Laboratory Research" },
  { src: "https://arpita-nandi.netlify.app/assets/bacterial-culture-BZ6-dtfq.jpg", caption: "Current MSc research setup" },
  { src: "https://arpita-nandi.netlify.app/assets/molecular-detection-DWqRvYnz.jpg", caption: "Molecular Detection Techniques" },
  { src: "https://arpita-nandi.netlify.app/assets/internship-activities-BpSVX8hl.jpg", caption: "Research Internship Activities" },
];

// -------------------- Component --------------------
const AboutSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 font-sans pt-20">
      <div className="max-w-7xl mx-auto px-6 ">

        {/* -------------------- Header -------------------- */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 mb-12 border-b pb-8 border-gray-200"
          variants={fadeSimple}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 tracking-tight">
              My Research Journey
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              From Foundational Science to Specialized Research
            </p>
          </div>

          {/* Circular Image */}
          <div className="relative w-28 h-28 flex-shrink-0">
            <Image
              src="/alamin.png"
              alt="Profile"
              fill
              className="rounded-full shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* -------------------- Main Text Content -------------------- */}
        <motion.div
          className="space-y-8 text-gray-600 text-lg leading-relaxed"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp}>
            My scientific journey began with a BSc in Food Science and Technology,
            where I developed a strong foundation in analytical techniques and
            quality control. During internships at <strong>TICI</strong> and <strong>BRiCM</strong>, I gained
            hands-on experience with advanced instrumentation including HPLC,
            GC-MS, and flame photometry.
          </motion.p>

          <motion.p variants={fadeInUp}>
            This technical background evolved toward biochemistry and molecular
            biology during my MSc studies. I’ve since developed expertise spanning
            both computational and experimental approaches:
          </motion.p>
        </motion.div>

        {/* -------------------- Expertise Section -------------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInUp}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-bold text-teal-600 mb-4">
              Computational Research
            </h3>
            <ul className="space-y-3">
              <ListItem>Computer-Aided Drug Design (CADD) and peptide therapeutics</ListItem>
              <ListItem>Molecular docking & dynamics for GSK-3β inhibitor discovery</ListItem>
              <ListItem>QSAR, PCA, SNPs analysis for drug target identification</ListItem>
              <ListItem>Proteomics & lipidomics data interpretation</ListItem>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-bold text-teal-600 mb-4">
              Wet-Lab Expertise
            </h3>
            <ul className="space-y-3">
              <ListItem>Genomic surveillance of multi-drug resistant bacteria</ListItem>
              <ListItem>Bacterial culture, DNA extraction & molecular identification</ListItem>
              <ListItem>CRISPR-Cas9 gene editing & molecular cloning</ListItem>
              <ListItem>Protein purification, Western blotting & assays</ListItem>
            </ul>
          </motion.div>
        </motion.div>

        {/* -------------------- Current Focus -------------------- */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Current Focus</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            My MSc thesis involves genomic characterization of antibiotic-resistant
            bacteria from slaughterhouse wastewater, with international collaboration
            for whole-genome sequencing. I aim to bridge computational predictions
            with real-world experimental validation.
          </p>
        </motion.div>

        {/* -------------------- Gallery -------------------- */}
        <motion.div
          className="mt-20"
          variants={fadeSimple}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Research Motivation Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group text-center"
              >
                <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-xl shadow-lg border-4 border-white">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-600">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// -------------------- List Item Component --------------------
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <FiChevronRight className="text-teal-500 mt-1 mr-2 flex-shrink-0" size={20} />
    <span>{children}</span>
  </li>
);

export default AboutSection;
