"use client";

import { motion } from "framer-motion";
import Lightning from "@/components/Lightning";
import SplitText from "@/components/SplitText";

interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Lightning Background */}
      <div className="absolute inset-0 opacity-70">
        <Lightning />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
              {dict.hero.badge}
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="mb-6">
            <SplitText
              text={dict.hero.title}
              className="text-3xl md:text-8xl font-bold text-white"
              delay={50}
            />
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl text-gray-400 mb-6"
          >
            {dict.hero.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl"
          >
            {dict.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors font-medium"
            >
              {dict.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors font-medium"
            >
              {dict.hero.contactButton}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
    </section>
  );
}