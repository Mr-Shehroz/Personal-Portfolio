"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("Error sending message.");
        }
    };

    return (
        <motion.section
            id="contact"
            className="py-20 bg-gradient-to-br from-[#0a0f1a] to-[#162238] text-white rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
                <motion.h2
                    className="text-5xl font-bold text-cyan-400 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Get in Touch
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
                    {[
                        { icon: <FaEnvelope size={32} />, text: "mr.shehroz.khan2006@gmail.com", href: "mailto:mr.shehroz.khan2006@gmail.com" },
                        { icon: <FaPhone size={32} />, text: "+92 325 5706845", href: "tel:+923255706845" },
                        { icon: <FaGithub size={32} />, text: "Mr-Shehroz", href: "https://github.com/Mr-Shehroz" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 * index }}
                            viewport={{ once: true }}
                        >
                            <Link href={item.href} target="_blank" className="flex flex-col items-center bg-[#1b2b48] p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-cyan-500">
                                <div className="text-cyan-300 mb-3">{item.icon}</div>
                                <span className="text-lg font-medium text-gray-200">{item.text}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div 
                    className="mt-12 bg-[#1b2b48] p-8 rounded-xl shadow-lg text-left"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="text-3xl font-semibold text-cyan-400 mb-6 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Send a Message
                    </motion.h3>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        {[
                            { type: "text", name: "name", placeholder: "Your Name" },
                            { type: "email", name: "email", placeholder: "Your Email" },
                        ].map((input, index) => (
                            <motion.input
                                key={input.name}
                                type={input.type}
                                name={input.name}
                                value={formData[input.name]}
                                onChange={handleChange}
                                placeholder={input.placeholder}
                                className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 + 0.2 * index }}
                                viewport={{ once: true }}
                            />
                        ))}

                        <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            required
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                            viewport={{ once: true }}
                        ></motion.textarea>

                        <motion.button 
                            type="submit" 
                            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition text-lg font-semibold"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            Send Message
                        </motion.button>

                        <motion.p 
                            className="text-white text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: status ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {status}
                        </motion.p>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
}
