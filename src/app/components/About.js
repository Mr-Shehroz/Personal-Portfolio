"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
    return (
        <motion.section
            id="about"
            className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    
                    {/* Left Section - Image */}
                    <motion.div 
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto shadow-2xl border-4 border-cyan-300"
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image src="/pic.webp" alt="Profile" width={320} height={320} className="object-cover" />
                        </motion.div>
                    </motion.div>

                    {/* Right Section - About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-4xl font-extrabold text-cyan-300 mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            I am a passionate <span className="text-cyan-400 font-semibold">UI/UX Designer</span> and <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> with a strong focus on building visually appealing and highly functional web applications. My expertise lies in creating seamless user experiences while ensuring performance and accessibility.
                        </motion.p>
                        <motion.p
                            className="mt-4 text-lg text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            With hands-on experience in <strong>Next.js, Tailwind CSS, JavaScript, Sanity CMS, and Webflow</strong>, I specialize in crafting dynamic, interactive, and high-performance websites. My goal is to push the boundaries of design and development to create modern digital experiences.
                        </motion.p>
                        <motion.div 
                            className="mt-6"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a href="#contact" className="inline-block px-6 py-3 text-lg font-medium bg-cyan-500 hover:bg-cyan-600 transition rounded-lg shadow-md">
                                Let's Connect
                            </a>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}
