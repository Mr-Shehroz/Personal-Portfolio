import Image from "next/image";

// Skills.js
export function Skills() {
    const skills = [
        { name: "HTML", icon: "/icons/html.jpg" },
        { name: "CSS", icon: "/icons/css.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
        { name: "Git", icon: "/icons/git.png" },
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "Next.js", icon: "/icons/nextjs.png" },
        { name: "React", icon: "/icons/react.webp" },
        { name: "Node.js", icon: "/icons/nodejs.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Mongoose", icon: "/icons/mongoose.jpg" },
        { name: "Sanity CMS", icon: "/icons/sanity.png" },
        { name: "Express.js", icon: "/icons/express.png" },
        { name: "Redux", icon: "/icons/redux.png" },
        { name: "TypeScript", icon: "/icons/typescript.png" },
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-xl shadow-xl">
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl font-extrabold text-cyan-300 mb-12">Skills & Technologies</h2>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center bg-gray-800 p-5 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl border border-gray-700"
                        >
                            {/* Icon */}
                            <div className="relative w-16 h-16 bg-gray-900 p-3 rounded-full shadow-lg">
                                <Image src={skill.icon} alt={skill.name} width={50} height={50} className="w-full h-full object-contain" />
                            </div>

                            {/* Skill Name */}
                            <p className="text-lg font-semibold text-gray-300 mt-3">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
