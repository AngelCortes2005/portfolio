import { clsx, type ClassValue } from "clsx"
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const socialLinks = [
	{
		name: "Email",
		icon: Mail,
		href: "mailto:tu@email.com",
		color: "from-red-500 to-pink-500",
		username: "tu@email.com",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://linkedin.com/in/tuusuario",
		color: "from-blue-500 to-cyan-500",
		username: "@tuusuario",
	},
	{
		name: "GitHub",
		icon: Github,
		href: "https://github.com/tuusuario",
		color: "from-gray-500 to-gray-700",
		username: "@tuusuario",
	},
	{
		name: "Twitter",
		icon: Twitter,
		href: "https://twitter.com/tuusuario",
		color: "from-blue-400 to-blue-600",
		username: "@tuusuario",
	},
];