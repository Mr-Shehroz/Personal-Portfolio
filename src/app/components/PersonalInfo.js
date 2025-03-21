import Image from "next/image";

// PersonalInfo.js
export function PersonalInfo() {
    return (
        <section id="personal-info" className="py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-xl shadow-xl">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center md:justify-between gap-12 px-6 md:px-12">
                
                {/* Profile Image on Right with Glow Effect */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#38BDF8] shadow-xl transition-all transform hover:scale-105">
                    <Image 
                        src="/pic.webp" 
                        alt="Shehroz Khan" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-full"
                    />
                </div>

                {/* Text Content on Left with Glassmorphism */}
                <div className="max-w-2xl text-left">
                    <h2 className="text-5xl font-extrabold text-[#38BDF8] drop-shadow-lg">Shehroz Khan</h2>
                    <h3 className="text-2xl font-semibold text-gray-300 mt-2">Full Stack Developer</h3>

                    {/* Glassmorphism Background for Text */}
                    <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md mt-4">
                        <p className="text-lg leading-relaxed text-gray-200">
                            Passionate about building high-performance, scalable, and visually stunning web applications. 
                            Experienced in UI/UX design, Shopify, Webflow, and modern frameworks like Next.js. 
                            I thrive on crafting seamless user experiences and bringing ideas to life through code.
                        </p>
                        <p className="text-lg font-medium text-[#38BDF8] mt-4">✅ Available for freelance & full-time work</p>
                    </div>

                    {/* Download Resume Button */}
                    <a 
                        href="/Shehroz_Khan_Resume.pdf" 
                        download
                        className="inline-flex items-center mt-6 px-6 py-3 text-lg font-semibold text-white bg-[#38BDF8] rounded-lg shadow-lg hover:bg-[#0284C7] transition-all"
                    >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0 0V8m0 4l-3 3m3-3l3 3m-9 4h12" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
