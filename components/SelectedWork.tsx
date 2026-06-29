"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface WorkProps {
  dict: any;
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center py-16 md:py-24 border-t border-border hover:border-primary/20 transition-colors duration-500 ${
            isEven ? "" : "md:text-right"
          }`}
        >
          <motion.div
            style={{ y: imageY, scale: imageScale, opacity }}
            className={`md:col-span-5 relative aspect-[4/3] overflow-hidden rounded-sm bg-card ${
              isEven ? "md:order-1" : "md:order-2"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
          </motion.div>

          <div
            className={`md:col-span-7 ${isEven ? "md:order-2" : "md:order-1"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-5xl md:text-6xl font-normal text-card group-hover:text-primary/15 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs text-subtle">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-serif text-3xl md:text-4xl font-normal text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <ArrowUpRight className="w-6 h-6 text-subtle group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              {project.description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function SelectedWork({ dict }: WorkProps) {
  const projects = dict.work.items;
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const headerX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="work" className="py-32 bg-background relative">
      <motion.div
        style={{ x: headerX }}
        className="absolute top-32 left-0 text-[20vw] font-serif italic font-normal text-card/60 whitespace-nowrap pointer-events-none select-none tracking-tighter"
      >
        Work
      </motion.div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="font-mono text-xs text-primary mb-4 tracking-wider">
            02 — {dict.work.label}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-foreground tracking-tight">
            {dict.work.title}
          </h2>
        </motion.div>

        <div>
          {projects.map((project: any, index: number) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
