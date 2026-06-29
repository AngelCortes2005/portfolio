"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split("/")[1] || "en";

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "es" : "en";
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider"
    >
      {currentLang === "en" ? "ES" : "EN"}
    </button>
  );
}
