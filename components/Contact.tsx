"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

interface ContactProps {
	dict: any;
}

const socialLinks = [
	{
		name: "Email",
		icon: Mail,
		href: "mailto:cortts.dev@gmail.com",
		username: "cortts.dev@gmail.com",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://linkedin.com/in/angelcortesm",
		username: "linkedin.com/in/angelcortesm",
	},
	{
		name: "GitHub",
		icon: Github,
		href: "https://github.com/AngelCortes2005",
		username: "github.com/AngelCortes2005",
	},
];

export default function Contact({ dict }: ContactProps) {
		return (
			<section id="contact" className="py-32 bg-black relative">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto">
						{/* Header */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center mb-20"
						>
							<h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
								{dict.contact.title}
							</h2>
							<p className="text-lg text-gray-500">
								{dict.contact.description}
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 gap-12">
							{/* Contact Form */}
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<form className="space-y-6">
									<div>
										<label className="block text-sm font-medium text-gray-400 mb-2">
											{dict.contact.name}
										</label>
										<input
											type="text"
											className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none transition-colors"
											placeholder={dict.contact.namePlaceholder}
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-400 mb-2">
											{dict.contact.email}
										</label>
										<input
											type="email"
											className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none transition-colors"
											placeholder={dict.contact.emailPlaceholder}
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-400 mb-2">
											{dict.contact.message}
										</label>
										<textarea
											rows={5}
											className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none transition-colors resize-none"
											placeholder={dict.contact.messagePlaceholder}
										/>
									</div>
									<Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
										<Send className="w-4 h-4 mr-2" />
										{dict.contact.sendMessage}
									</Button>
								</form>
							</motion.div>

							{/* Social Links */}
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="space-y-6"
							>
								<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
									<h3 className="text-xl font-bold text-white mb-6">
										{dict.contact.findMe}
									</h3>
									<div className="space-y-4">
										{socialLinks.map((social) => {
											const Icon = social.icon;
											return (
												<a
													key={social.name}
													href={social.href}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 rounded-lg transition-all group"
												>
													<div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
														<Icon className="w-5 h-5 text-violet-400" />
													</div>
													<div>
														<p className="text-sm text-white font-medium">
															{social.name}
														</p>
														<p className="text-xs text-gray-500">
															{social.username}
														</p>
													</div>
												</a>
											);
										})}
									</div>
								</div>

								<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
									<h3 className="text-xl font-bold text-white mb-4">
										{dict.contact.availability}
									</h3>
									<p className="text-gray-400 mb-4">
										{dict.contact.availabilityText}
									</p>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
										<span className="text-sm text-gray-400">
											{dict.contact.availableNow}
										</span>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		);
	}