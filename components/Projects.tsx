"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { image } from "framer-motion/client";

interface ProjectsProps {
    dict: any;
}

const projects = [
    {
        id: 1,
        title: "Web Content Management Platform",
        description:
            "Web system developed for the management and publication of multimedia content for the Liceo de Frailes",
        tags: ["Next.js", "TypeScript", "Firebase", "Vercel", "Tailwind"],
        image: "/liceo-frailes.png", // Ruta absoluta desde public
        demo: "https://liceodefrailes.com/",
    },
    {
        id: 2,
        title: "Sneaker Lab",
        description: "Sneaker Lab is an interactive web platform designed for selling sneakers",
        tags: ["Next.js", "TypeScript", "Mock Data", "Tailwind", "Framer Motion", "shadcn/ui", "Vercel"],
		image: "/sneaker-lab.png",
        github: "https://github.com/AngelCortes2005/sneaker-lab",
        demo: "https://sneaker-lab-ten.vercel.app/",
    },
    {
        id: 3,
        title: "Code Sensor (In Process)",
        description: "CodeSense is a web application that connects to your GitHub account, analyzes your repositories, and generates intelligent feedback using AI.",
        tags: ["Next.js", "TypeScript","Supabase", "shadcn/ui", "Framer Motion", "OpenAI", "GitHub API", "Tailwind", "Vercel"],
		image: "/code-sensor.png",
        github: "https://github.com/AngelCortes2005/code-sensor",
		demo: "https://code-sensor.vercel.app/",
    },
    {
        id: 4,
        title: "Inter Lab",
        description: "The goal is to provide a platform where someone can practice real interviews but with an AI agent that responds, simulates the interviewer, generates questions, and allows an interview experience as close to a real one as possible, with voice, feedback, etc.",
        tags: ["Next.js", "TypeScript", "Gemini AI", "Firebase","Vapi", "Tailwind", "Vercel"],
		image: "/inter-lab.png",
        github: "https://github.com/AngelCortes2005/ai-interview-platform",
        demo: "https://ai-interview-platform-rho-murex.vercel.app",
    },
];

export default function Projects({ dict }: ProjectsProps) {
    return (
        <section
            id="projects"
            className="py-32 bg-black relative"
        >
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {dict.projects.title}
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl">
                        {dict.projects.description}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            index={index}
                            dict={dict}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}