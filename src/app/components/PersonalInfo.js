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
                </div>
            </div>
        </section>
    );
}
