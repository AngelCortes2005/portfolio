"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Typewriter from "./Typewriter";

interface HeroProps {
  dict: any;
}

function ProcessFlow({ steps, label }: { steps: string[]; label: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full max-w-[220px]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="font-mono text-[10px] text-muted-foreground mb-6 tracking-[0.2em] uppercase"
      >
        {label}
      </motion.p>

      <div className="relative">
        <div className="absolute left-[3px] top-3 bottom-3 w-px bg-border" />

        <div className="space-y-5">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3 relative"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full z-10 transition-colors duration-500 ${
                  active === index ? "bg-primary" : "bg-subtle"
                }`}
              />
              <span
                className={`font-mono text-[10px] transition-colors duration-500 ${
                  active === index ? "text-primary" : "text-subtle"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-sm transition-colors duration-500 ${
                  active === index
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ dict }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const [typed, setTyped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 16);
    mouseY.set((clientY / innerHeight - 0.5) * 16);
  };

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            style={{ y: y1, opacity }}
            className="md:col-span-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs text-primary mb-8 tracking-wider"
            >
              {"// "}
              {dict.hero.role}
            </motion.p>

            <motion.h1
              style={{ x: smoothMouseX, y: smoothMouseY }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-7xl md:text-8xl lg:text-[9rem] font-normal tracking-[-0.03em] leading-[0.88] mb-10"
            >
              <span className="text-foreground">{dict.hero.nameFirst}</span>
              <br />
              <span className="text-primary italic">{dict.hero.nameLast}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="font-serif italic text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-1 min-h-[5.5rem]"
            >
              <Typewriter
                text={dict.hero.description}
                delay={900}
                speed={18}
                onComplete={() => setTyped(true)}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: typed ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs text-subtle mb-12"
            >
              — {dict.hero.quoteAuthor}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: typed ? 1 : 0,
                y: typed ? 0 : 15,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-8"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="border-b border-foreground/20 group-hover:border-primary pb-1">
                  {dict.hero.ctaWork}
                </span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 border-b border-transparent hover:border-foreground/20 pb-1"
              >
                {dict.hero.ctaContact}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: y2, opacity }}
            className="md:col-span-4 hidden md:flex justify-end items-center"
          >
            <ProcessFlow
              steps={dict.hero.process}
              label={dict.hero.processLabel}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
