"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Code2 } from "lucide-react";

interface ProjectsProps {
    dict: any;
}

export default function Projects({ dict }: ProjectsProps) {
    return (
        <section
            id="projects"
            className="py-32 bg-black relative overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            {dict.projects.title}
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                        {dict.projects.title}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        {dict.projects.description}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dict.projects.items.map((project: any, index: number) => (
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