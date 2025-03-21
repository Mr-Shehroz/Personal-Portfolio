import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-xl shadow-xl">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    
                    {/* Left Section - Image */}
                    <div className="relative">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto shadow-2xl border-4 border-cyan-300">
                            <Image src="/pic.webp" alt="Profile" width={320} height={320} className="object-cover" />
                        </div>
                    </div>

                    {/* Right Section - About Content */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-cyan-300 mb-4">About Me</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am a passionate <span className="text-cyan-400 font-semibold">UI/UX Designer</span> and <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> with a strong focus on building visually appealing and highly functional web applications. My expertise lies in creating seamless user experiences while ensuring performance and accessibility.
                        </p>
                        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                            With hands-on experience in **Next.js, Tailwind CSS, JavaScript, Sanity CMS, and Webflow**, I specialize in crafting dynamic, interactive, and high-performance websites. My goal is to push the boundaries of design and development to create modern digital experiences.
                        </p>
                        <div className="mt-6">
                            <a href="#contact" className="inline-block px-6 py-3 text-lg font-medium bg-cyan-500 hover:bg-cyan-600 transition rounded-lg shadow-md">
                                Let's Connect
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
