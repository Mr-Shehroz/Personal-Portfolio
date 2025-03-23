"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function PersonalInfo() {
    const titles = [
        "UI/UX Designer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer"
    ];

    const [currentTitle, setCurrentTitle] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingFinished, setTypingFinished] = useState(false); // Stop effect when reaching last title

    useEffect(() => {
        if (titleIndex >= titles.length) return; // Stop if out of bounds

        if (titleIndex === titles.length - 1 && charIndex === titles[titleIndex].length) {
            setTypingFinished(true); // Stop effect at last title
            return;
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < titles[titleIndex].length) {
                    setCurrentTitle((prev) => prev + titles[titleIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (charIndex > 0) {
                    setCurrentTitle((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => prev + 1);
                }
            }
        }, isDeleting ? 40 : 40);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    return (
        <section id="personal-info" className="py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-xl shadow-xl">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center md:justify-between gap-12 px-6 md:px-12">
                
                {/* Profile Image Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#38BDF8] shadow-xl transition-all transform hover:scale-105"
                >
                    <Image 
                        src="/pic.webp" 
                        alt="Shehroz Khan" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-full"
                    />
                </motion.div>

                {/* Text Content Animation */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-left"
                >
                    <h2 className="text-5xl font-extrabold text-[#38BDF8] drop-shadow-lg">Shehroz Khan</h2>

                    {/* Typing Effect */}
                    <div className="relative h-10 mt-2 text-2xl font-semibold text-gray-300 flex items-center">
                        <span className="text-[#38BDF8]">I am a </span>
                        <span className="ml-2">{currentTitle}</span>
                        {!typingFinished && (
                            <motion.span 
                                className="ml-1 w-1 h-6 bg-[#38BDF8] inline-block"
                                animate={{ opacity: [0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.6 }}
                            />
                        )}
                    </div>

                    {/* Glassmorphism Background for Text */}
                    <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md mt-4">
                        <p className="text-lg leading-relaxed text-gray-200">
                            Passionate about building high-performance, scalable, and visually stunning web applications. 
                            Experienced in UI/UX design, Shopify, Webflow, and modern frameworks like Next.js. 
                            I thrive on crafting seamless user experiences and bringing ideas to life through code.
                        </p>
                        <p className="text-lg font-medium text-[#38BDF8] mt-4">✅ Available for freelance & full-time work</p>
                    </div>

                    {/* Animated Download Resume Button */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                        href="/Shehroz_Khan_Resume.pdf" 
                        download
                        className="inline-flex items-center mt-6 px-6 py-3 text-lg font-semibold text-white bg-[#38BDF8] rounded-lg shadow-lg hover:bg-[#0284C7] transition-all"
                    >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0 0V8m0 4l-3 3m3-3l3 3m-9 4h12" />
                        </svg>
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
