"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AboutProps {
  dict: any;
}

export default function About({ dict }: AboutProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 md:py-48 bg-card relative overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif italic font-normal text-background whitespace-nowrap pointer-events-none select-none tracking-tighter"
      >
        About
      </motion.div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <p className="font-mono text-xs text-primary mb-4 tracking-wider">
              03 — {dict.about.label}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-foreground tracking-tight leading-tight">
              {dict.about.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 space-y-8"
          >
            {dict.about.paragraphs.map((paragraph: string, index: number) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 flex gap-8 border-t border-border"
            >
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/AngelCortes2005",
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/angelcortesm",
                },
                { name: "Email", href: "mailto:cortts.dev@gmail.com" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
