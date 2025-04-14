"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Projects.js
export function Projects() {
    const projects = [
        {
            name: "Blog Web",
            description: "A modern blog website showcasing articles and insights.",
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
            image: "/blog.jpeg",
            liveDemo: "https://full-stack-blog-rho.vercel.app/"
        },
        {
            name: "Admin Panel",
            description: "A feature-rich admin dashboard for managing products, users, and orders with a sleek custom UI.",
            techStack: ["Next.js", "Mongodb", "Tailwind CSS", "JavaScript"],
            image: "/admin.png",
            liveDemo: "https://full-admin-flame.vercel.app/"
        },
        {
            name: "Warehouse Management System",
            description: "A stock management application for warehouses with real-time updates and history tracking.",
            techStack: ["Next.js", "Sanity CMS", "Node.js"],
            image: "/warehouse.jpg",
            liveDemo: "https://stock-iota-seven.vercel.app/"
        }
    ];

    return (
        <motion.section
            id="projects"
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
                    Projects
                </motion.h2>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-[1.03] transition duration-300 group"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                                    <Image 
                                        src={project.image} 
                                        alt={project.name} 
                                        width={400} 
                                        height={250} 
                                        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </motion.div>
                            </div>

                            {/* Project Details */}
                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold text-cyan-300">{project.name}</h3>
                                <p className="text-gray-300 mt-2">{project.description}</p>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-sm bg-cyan-600 text-white rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Live Demo Button */}
                            <motion.div className="mt-6" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                                <Link href={project.liveDemo} target="_blank" className="inline-block px-5 py-2.5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300 shadow-md">
                                    Live Demo
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
