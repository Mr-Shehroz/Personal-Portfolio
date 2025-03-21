"use client"; // Add this to make it a Client Component
import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

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
                setFormData({ name: "", email: "", message: "" }); // Clear form
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("Error sending message.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-[#0a0f1a] to-[#162238] text-white rounded-xl shadow-xl">
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-5xl font-bold text-cyan-400 mb-10">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link href="mailto:mr.shehroz.khan2006@gmail.com" className="flex flex-col items-center bg-[#1b2b48] p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-cyan-500">
                        <FaEnvelope size={32} className="text-cyan-300 mb-3" />
                        <span className="text-lg font-medium text-gray-200">mr.shehroz.khan2006@gmail.com</span>
                    </Link>
                    <Link href="tel:+923255706845" className="flex flex-col items-center bg-[#1b2b48] p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-cyan-500">
                        <FaPhone size={32} className="text-cyan-300 mb-3" />
                        <span className="text-lg font-medium text-gray-200">+92 325 5706845</span>
                    </Link>
                    <Link href="https://github.com/Mr-Shehroz" target="_blank" className="flex flex-col items-center bg-[#1b2b48] p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-cyan-500">
                        <FaGithub size={32} className="text-cyan-300 mb-3" />
                        <span className="text-lg font-medium text-gray-200">Mr-Shehroz</span>
                    </Link>
                </div>
                
                {/* Contact Form */}
                <div className="mt-12 bg-[#1b2b48] p-8 rounded-xl shadow-lg text-left">
                    <h3 className="text-3xl font-semibold text-cyan-400 mb-6 text-center">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Your Name" 
                            className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Your Email" 
                            className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
                            required 
                        />
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Your Message" 
                            rows="5" 
                            className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
                            required
                        ></textarea>
                        <button type="submit" className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition text-lg font-semibold">
                            Send Message
                        </button>
                        <p className="text-white text-center">{status}</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
