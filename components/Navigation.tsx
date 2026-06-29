"use client";

import { useState, useEffect } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  dict: any;
  lang: string;
}

export default function Navigation({ dict }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { num: "02", name: dict.nav.work, href: "#work" },
    { num: "03", name: dict.nav.about, href: "#about" },
    { num: "04", name: dict.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-serif text-base text-foreground tracking-tight hover:text-primary transition-colors duration-300 italic"
          >
            Angel Cortes
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 items-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span className="font-mono text-[10px] text-primary/50 group-hover:text-primary transition-colors">
                    {link.num}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
