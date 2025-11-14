"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiCpu,
  FiActivity,
  FiGitBranch,
  FiBarChart2,
  FiCheckCircle,
} from "react-icons/fi";
import { IconType } from "react-icons";

// --- TypeScript Type Definitions ---
interface Skill {
  name: string;
}

interface SkillSubCategory {
  title: string;
  skills: Skill[];
}

interface SkillCategory {
  title: string;
  Icon: IconType;
  color: string;
  subCategories: SkillSubCategory[];
}

// --- Skill Data: Easy to update ---
const skillData: SkillCategory[] = [
  {
    title: "Advanced Molecular Biology Techniques",
    Icon: FiGitBranch,
    color: "text-blue-500",
    subCategories: [
      { title: "Nucleic Acid Techniques", skills: [{ name: "DNA/RNA extraction" }, { name: "PCR" }, { name: "cDNA synthesis" }, { name: "Gel Electrophoresis" }, { name: "DNA quantification" }] },
      { title: "Cloning & Editing", skills: [{ name: "Gateway Cloning" }, { name: "Modular Cloning" }, { name: "Bacterial Transformation" }, { name: "CRISPR-Cas9 Gene Editing" }] },
      { title: "Cell Culture & Microbiology", skills: [{ name: "Bacterial culture" }, { name: "Streak Plate technique" }, { name: "TSB Broth preparation" }, { name: "Colony morphology analysis" }] },
      { title: "Biochemical Assays", skills: [{ name: "Coagulase test" }, { name: "Indole test" }, { name: "Voges-Proskauer test" }, { name: "Biochemical profiling" }] },
    ],
  },
  {
    title: "Analytical Instrumentation",
    Icon: FiActivity,
    color: "text-green-500",
    subCategories: [
      { title: "Chromatography", skills: [{ name: "HPLC" }, { name: "GC-MS" }, { name: "LC-MS" }, { name: "Method development" }] },
      { title: "Spectroscopy", skills: [{ name: "Flame Photometer" }, { name: "Spectrophotometry" }, { name: "UV-Vis analysis" }] },
      { title: "Environmental Analysis", skills: [{ name: "BOD" }, { name: "DO" }, { name: "COD" }, { name: "Alkalinity" }, { name: "Acidity" }, { name: "Mineral content determination" }] },
      { title: "Quality Control", skills: [{ name: "Food sample analysis" }, { name: "Nutritional composition" }, { name: "Chemical purity testing" }] },
    ],
  },
  {
    title: "Computational Skills",
    Icon: FiCpu,
    color: "text-purple-500",
    subCategories: [
      { title: "Molecular Modeling & Docking", skills: [{ name: "Gaussian 09" }, { name: "AutoDock Vina" }, { name: "GOLD" }, { name: "HADDOCK" }, { name: "PyMOL visualization" }] },
      { title: "Molecular Dynamics", skills: [{ name: "Gromacs" }, { name: "Desmond" }, { name: "RMSD analysis" }, { name: "RMSF analysis" }, { name: "SASA calculations" }] },
      { title: "Bioinformatics", skills: [{ name: "Whole-genome sequencing analysis" }, { name: "Genomic data interpretation" }, { name: "SNP analysis" }] },
      { title: "Energy Profiling", skills: [{ name: "MM-GBSA" }, { name: "Binding energy calculations" }, { name: "Protein-ligand stability assessment" }] },
    ],
  },
  {
    title: "Data Analysis & Software",
    Icon: FiBarChart2,
    color: "text-orange-500",
    subCategories: [
      { title: "Statistical Analysis", skills: [{ name: "QSAR modeling" }, { name: "PCA" }, { name: "MLR" }, { name: "Data visualization" }] },
      { title: "Scientific Software", skills: [{ name: "ChemDraw" }, { name: "Origin" }, { name: "GraphPad Prism" }, { name: "ImageJ" }] },
      { title: "Programming", skills: [{ name: "Python basics" }, { name: "R for bioinformatics" }, { name: "Bash scripting" }] },
    ],
  },
];

// --- Main Component ---
const TechnicalSkills: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-16 sm:py-24 font-sans pt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Section Title --- */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        {/* --- Skills Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillData.map((category) => (
            <motion.div
              key={category.title}
              className="bg-gray-50/50 border border-gray-200 rounded-xl p-6 h-full"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <category.Icon className={`${category.color} mr-3`} size={24} />
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.subCategories.map((sub) => (
                  <div key={sub.title}>
                    <h4 className="font-semibold text-gray-600 mb-3">{sub.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {sub.skills.map((skill) => (
                        <div key={skill.name} className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-md border border-gray-200 shadow-sm">
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Summary Box --- */}
        <motion.div
          className="mt-12 bg-teal-50 border-l-4 border-teal-500 text-teal-800 p-6 rounded-r-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex">
            <div className="py-1">
              <FiCheckCircle className="mr-4 text-teal-500" size={24}/>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Comprehensive skill set spanning wet-lab molecular biology, advanced analytical instrumentation, computational drug design, and bioinformatics. Proven ability to{' '}
                <strong className="font-semibold">integrate experimental and computational approaches</strong>{' '}
                for comprehensive research investigations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;