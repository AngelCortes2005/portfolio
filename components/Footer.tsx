"use client";

import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";
import { Heart, ArrowUp } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const links = [
    { name: dict.nav.home, href: "#home" },
    { name: dict.nav.projects, href: "#projects" },
    { name: dict.nav.skills, href: "#skills" },
    { name: dict.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-16 relative overflow-hidden">
      {/* LogoLoop as decoration */}
      <div className="absolute bottom-2 left-0 right-0 opacity-5 pointer-events-none">
        <LogoLoop 
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Angel<span className="text-blue-500">.</span>Cortes
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              {dict.footer.madeWith} <Heart className="w-4 h-4 text-red-500" /> {dict.footer.using}
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side - Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 mb-5 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Angel Cortes. {dict.footer.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
}