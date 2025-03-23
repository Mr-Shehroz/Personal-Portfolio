"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.header
            className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-xl rounded-b-xl z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Logo */}
            <motion.h1 
                className="text-4xl font-extrabold tracking-wide text-[#38BDF8] drop-shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                Shehroz Khan
            </motion.h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-8 text-lg font-medium">
                    {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                        <motion.li 
                            key={item} 
                            whileHover={{ scale: 1.1 }} 
                            transition={{ duration: 0.2 }}
                        >
                            <a href={`#${item.toLowerCase()}`} className="hover:text-[#38BDF8] transition-all">
                                {item}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="md:hidden text-2xl"
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav 
                        className="absolute top-full left-0 w-full bg-[#0F172A] p-6 rounded-b-xl shadow-xl md:hidden"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <ul className="flex flex-col gap-6 text-center text-lg font-medium">
                            {["About", "Skills", "Projects", "Contact"].map((item) => (
                                <motion.li 
                                    key={item} 
                                    whileHover={{ scale: 1.1 }} 
                                    transition={{ duration: 0.2 }}
                                >
                                    <a 
                                        href={`#${item.toLowerCase()}`} 
                                        className="hover:text-[#38BDF8]" 
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
