"use client"

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-xl rounded-b-xl z-50">
            {/* Logo */}
            <h1 className="text-4xl font-extrabold tracking-wide text-[#38BDF8] drop-shadow-lg">
                Shehroz Khan
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-8 text-lg font-medium">
                    <li><a href="#about" className="hover:text-[#38BDF8] transition-all">About</a></li>
                    <li><a href="#skills" className="hover:text-[#38BDF8] transition-all">Skills</a></li>
                    <li><a href="#projects" className="hover:text-[#38BDF8] transition-all">Projects</a></li>
                    <li><a href="#contact" className="hover:text-[#38BDF8] transition-all">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-[#0F172A] p-6 rounded-b-xl shadow-xl md:hidden">
                    <ul className="flex flex-col gap-6 text-center text-lg font-medium">
                        <li><a href="#about" className="hover:text-[#38BDF8]" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#skills" className="hover:text-[#38BDF8]" onClick={() => setMenuOpen(false)}>Skills</a></li>
                        <li><a href="#projects" className="hover:text-[#38BDF8]" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#contact" className="hover:text-[#38BDF8]" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
