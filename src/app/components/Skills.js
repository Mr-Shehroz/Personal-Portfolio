"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Skills.js
export function Skills() {
    const skills = [
        { name: "HTML", icon: "/icons/html.jpg" },
        { name: "CSS", icon: "/icons/css.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
        { name: "Git", icon: "/icons/git.png" },
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "Next.js", icon: "/icons/nextjs.png" },
        { name: "React", icon: "/icons/react.webp" },
        { name: "Node.js", icon: "/icons/nodejs.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Mongoose", icon: "/icons/mongoose.jpg" },
        { name: "Sanity CMS", icon: "/icons/sanity.png" },
        { name: "Express.js", icon: "/icons/express.png" },
        { name: "Redux", icon: "/icons/redux.png" },
        { name: "TypeScript", icon: "/icons/typescript.png" },
    ];

    return (
        <motion.section
            id="skills"
            className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                <motion.h2
                    className="text-4xl font-extrabold text-cyan-300 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Skills & Technologies
                </motion.h2>

                {/* Skills Grid */}
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-gray-800 p-5 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl border border-gray-700"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <div className="relative w-16 h-16 bg-gray-900 p-3 rounded-full shadow-lg">
                                <Image src={skill.icon} alt={skill.name} width={50} height={50} className="w-full h-full object-contain" />
                            </div>

                            {/* Skill Name */}
                            <p className="text-lg font-semibold text-gray-300 mt-3">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
