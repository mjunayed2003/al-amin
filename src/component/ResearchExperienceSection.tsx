"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- 1. এখানে Variants ইম্পোর্ট করা হয়েছে
import { FaFlask, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

// --- Type Definitions for Props ---
interface GalleryItem {
  src: string;
  caption: string;
}

interface ExperienceProps {
  role: string;
  organization: string;
  location?: string;
  duration: string;
  tags: string[];
  responsibilities: string[];
  gallery: GalleryItem[];
}

interface InternshipProps {
  title: string;
  organization: string;
  tasks: string[];
}

// --- Data for the component with explicit types ---

const experiences: ExperienceProps[] = [
  {
    role: "Research Assistant",
    organization: "Red-Green Research Centre (RGRC)",
    location: "Dhaka, Bangladesh",
    duration: "Jul 2024 - Present",
    tags: ["Molecular dynamics", "Linux", "Bioinformatics", "Maring"],
    responsibilities: [
      "Advanced learning in molecular dynamics simulation interaction at atomic level.",
      "Hello promoter interaction studies using computational approaches.",
      "Computer-Aided Drug and Peptide Design (CAD) training.",
      "Integration of computational biology with experimental subdivision.",
      "Manuscript preparation and scientific figure development.",
    ],
    gallery: [
      { src: "https://arpita-nandi.netlify.app/assets/bricm-lab-Babj6dg_.jpg", caption: "Data Visualization" },
      { src: "https://arpita-nandi.netlify.app/assets/bacterial-culture-BZ6-dtfq.jpg", caption: "Data analysis" },
      { src: "https://arpita-nandi.netlify.app/assets/molecular-detection-DWqRvYnz.jpg", caption: "Comparative analysis" },
      { src: "https://arpita-nandi.netlify.app/assets/internship-activities-BpSVX8hl.jpg", caption: "Research team" },
    ],
  },
];


const thesis: ExperienceProps = {
  role: "Master's Thesis Research",
  organization: "Chattogram Veterinary and Animal Sciences University (CVASU)",
  duration: "Current",
  tags: ["Genomics", "Veterinary", "Drug resistance"],
  responsibilities: [
    "Genomic Surveillance of Multi-Drug Resistant Bacteria in Slaughterhouse Wastewater.",
    "Cultured and isolated 13 strains of Edwardsiella, Providencia, Staphylococcus, Serratia, Enterococcus faecium.",
    "Investigating genetic mechanisms behind antibiotic resistance gaps.",
  ],
  gallery: [
    { src: "https://arpita-nandi.netlify.app/assets/bricm-lab-Babj6dg_.jpg", caption: "Plant Sampling" },
    { src: "https://arpita-nandi.netlify.app/assets/bacterial-culture-BZ6-dtfq.jpg", caption: "Bacterial Culture" },
    { src: "https://arpita-nandi.netlify.app/assets/molecular-detection-DWqRvYnz.jpg", caption: "Lab Analysis" },
    { src: "https://arpita-nandi.netlify.app/assets/internship-activities-BpSVX8hl.jpg", caption: "Microscopy" },
  ],
};

const internships: InternshipProps[] = [
  {
    title: "CUR-C Research Intern",
    organization: "Chittagong University Research & Higher Studies",
    tasks: [
      "Collected 70 Head and Neck cancer samples for research.",
      "Performed RNA isolation and purification using TRIZOL method.",
      "Conducted Gel Electrophoresis analysis.",
    ],
  },
  {
    title: "BRiCM Research Intern",
    organization: "Bangladesh Reference Institute for Chemical Measurements",
    tasks: [
      "Determined ADI/TDI/MPI using GC-MS.",
      "Measured Dietary Fiber in Wafer Cakes.",
      "Applied advanced analytical techniques in food chemistry.",
    ],
  },
  {
    title: "TICI Internship",
    organization: "The Industry Council International",
    tasks: [
      "70-day course in Quality Control and Unit Operation.",
      "Flame Photometer analysis for Na/K in Coco General Wafer.",
      "HR analysis by Colorimeter in Coke/Drink.",
    ],
  },
];

// --- Main Component ---
const ResearchExperienceSection: React.FC = () => {
  // Animation variants with explicit Variants type
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-sans pt-20" >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 ">
        {/* --- Section Title --- */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          Research Experience
        </motion.h2>

        {/* --- Experience Cards --- */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
          <ExperienceCard {...thesis} />
        </div>

        {/* --- Internships Section --- */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Research Internships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internships.map((intern, index) => (
              <InternshipCard key={index} {...intern} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Helper Component for Main Experience Cards ---
const ExperienceCard: React.FC<ExperienceProps> = ({
  role,
  organization,
  location,
  duration,
  tags,
  responsibilities,
  gallery,
}) => {
  const cardVariants: Variants = { // <-- 3. এখানেও টাইপ নির্দিষ্ট করা হয়েছে
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-md"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <div>
          <div className="flex items-center mb-1">
            <FaFlask className="text-teal-500 mr-3" size={20} />
            <h4 className="text-xl font-bold text-gray-800">{role}</h4>
          </div>
          <p className="text-gray-600 font-medium ml-8">{organization}</p>
          {location && (
            <div className="flex items-center text-sm text-gray-500 mt-1 ml-8">
              <FaMapMarkerAlt className="mr-2" />
              <span>{location}</span>
            </div>
          )}
        </div>
        <p className="text-teal-500 font-semibold text-sm mt-2 sm:mt-0 flex-shrink-0">{duration}</p>
      </div>
      <div className="flex flex-wrap gap-2 my-4 ml-8">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="space-y-2 text-gray-600 ml-8 mb-6">
        {responsibilities.map((item, i) => (
          <li key={i} className="flex items-start">
            <FiChevronRight className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {gallery && gallery.length > 0 && (
        <div>
          <h5 className="font-semibold text-gray-700 mb-3 ml-8">Research Gallery</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ml-8">
            {gallery.map((img, i) => (
              <div key={i} className="text-center">
                <div className="relative w-full h-28 sm:h-32 rounded-lg overflow-hidden border">
                  <Image src={img.src} alt={img.caption} layout="fill" objectFit="cover" />
                </div>
                <p className="text-xs text-gray-500 mt-2">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// --- Helper Component for Internship Cards ---
const InternshipCard: React.FC<InternshipProps> = ({ title, organization, tasks }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-300">
    <h5 className="font-bold text-gray-800">{title}</h5>
    <p className="text-sm text-gray-500 mb-4">{organization}</p>
    <ul className="space-y-2 text-sm text-gray-600">
      {tasks.map((task, i) => (
        <li key={i} className="flex items-start">
          <FiChevronRight className="text-teal-500 mt-1 mr-2 flex-shrink-0" size={16} />
          <span>{task}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ResearchExperienceSection;