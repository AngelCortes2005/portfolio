"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split('/')[1] || 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-sm text-gray-400 hover:text-white"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-medium">{currentLang === 'en' ? 'ES' : 'EN'}</span>
    </motion.button>
  );
}