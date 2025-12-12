"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

interface ContactProps {
	dict: any;
}

interface FormData {
	name: string;
	email: string;
	message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

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
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState<FormStatus>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus('loading');
		setErrorMessage('');

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus('success');
				setFormData({ name: '', email: '', message: '' });
				
				// Reset success message after 5 seconds
				setTimeout(() => {
					setStatus('idle');
				}, 5000);
			} else {
				setStatus('error');
				setErrorMessage(data.error || 'Failed to send message');
			}
		} catch (error) {
			setStatus('error');
			setErrorMessage('Network error. Please try again.');
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

		return (
			<section id="contact" className="py-32 bg-black relative overflow-hidden">
				{/* Background effects */}
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
				
				<div className="container mx-auto px-6 relative z-10">
					<div className="max-w-5xl mx-auto">
						{/* Header */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center mb-20"
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="inline-block mb-6"
							>
								<span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
									<Sparkles className="w-4 h-4" />
									{dict.contact.title}
								</span>
							</motion.div>
							<h2 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
								{dict.contact.title}
							</h2>
							<p className="text-xl text-gray-400">
								{dict.contact.description}
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Contact Form */}
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="relative group"
							>
								{/* Glow effect */}
								<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 h-6/7" />
								
								<Card className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									
									<CardContent className="p-8 relative">
										<h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
											<Send className="w-6 h-6 text-blue-400" />
											{dict.contact.sendMessage}
										</h3>
										
										{/* Success Message */}
										{status === 'success' && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3"
											>
												<CheckCircle className="w-5 h-5 text-green-500" />
												<p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
											</motion.div>
										)}

										{/* Error Message */}
										{status === 'error' && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
											>
												<AlertCircle className="w-5 h-5 text-red-500" />
												<p className="text-red-400 text-sm">{errorMessage}</p>
											</motion.div>
										)}
										
										<form onSubmit={handleSubmit} className="space-y-6">
											<div className="relative">
												<label className="block text-sm font-medium text-blue-400 mb-2">
													{dict.contact.name}
												</label>
												<input
													type="text"
													name="name"
													value={formData.name}
													onChange={handleChange}
													required
													disabled={status === 'loading'}
													className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
													placeholder={dict.contact.namePlaceholder}
												/>
											</div>
											<div className="relative">
												<label className="block text-sm font-medium text-blue-400 mb-2">
													{dict.contact.email}
												</label>
												<input
													type="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													required
													disabled={status === 'loading'}
													className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
													placeholder={dict.contact.emailPlaceholder}
												/>
											</div>
											<div className="relative">
												<label className="block text-sm font-medium text-blue-400 mb-2">
													{dict.contact.message}
												</label>
												<textarea
													name="message"
													value={formData.message}
													onChange={handleChange}
													required
													disabled={status === 'loading'}
													rows={5}
													className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
													placeholder={dict.contact.messagePlaceholder}
												/>
											</div>
											<motion.div whileHover={{ scale: status === 'loading' ? 1 : 1.02 }} whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}>
												<Button 
													type="submit"
													disabled={status === 'loading'}
													className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all py-6 disabled:opacity-50 disabled:cursor-not-allowed"
												>
													{status === 'loading' ? (
														<>
															<motion.div
																animate={{ rotate: 360 }}
																transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
																className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full"
															/>
															Sending...
														</>
													) : (
														<>
															<Send className="w-4 h-4 mr-2" />
															{dict.contact.sendMessage}
														</>
													)}
												</Button>
											</motion.div>
										</form>
									</CardContent>
								</Card>
							</motion.div>

							{/* Social Links */}
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="space-y-6"
							>
								<div className="relative group">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
									
									<Card className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
										<CardContent className="p-8">
											<h3 className="text-2xl font-bold text-white mb-6">
												{dict.contact.findMe}
											</h3>
											<div className="space-y-3">
												{socialLinks.map((social, index) => {
													const Icon = social.icon;
													return (
														<motion.a
															key={social.name}
															href={social.href}
															target="_blank"
															rel="noopener noreferrer"
															initial={{ opacity: 0, x: -20 }}
															whileInView={{ opacity: 1, x: 0 }}
															viewport={{ once: true }}
															transition={{ delay: index * 0.1 }}
															whileHover={{ scale: 1.02, x: 5 }}
															className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/5 hover:from-blue-500/10 hover:to-blue-500/10 border border-white/10 hover:border-blue-500/40 rounded-xl transition-all group/social relative overflow-hidden"
														>
															<div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover/social:from-blue-600/5 group-hover/social:to-blue-600/5 transition-all" />
															
															<motion.div 
																whileHover={{ rotate: 360 }}
																transition={{ duration: 0.6 }}
																className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover/social:from-blue-500/30 group-hover/social:to-blue-600/30 transition-all shadow-lg relative z-10"
															>
																<Icon className="w-6 h-6 text-blue-400" />
															</motion.div>
															<div className="relative z-10">
																<p className="text-sm text-white font-semibold">
																	{social.name}
																</p>
																<p className="text-xs text-gray-400">
																	{social.username}
																</p>
															</div>
														</motion.a>
													);
												})}
											</div>
										</CardContent>
									</Card>
								</div>

								<div className="relative group">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
									
									<Card className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-white/10 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
										<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full" />
										
										<CardContent className="p-8 relative">
											<h3 className="text-2xl font-bold text-white mb-4">
												{dict.contact.availability}
											</h3>
											<p className="text-gray-400 mb-6">
												{dict.contact.availabilityText}
											</p>
											<div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
												<motion.div
													animate={{ scale: [1, 1.2, 1] }}
													transition={{ duration: 2, repeat: Infinity }}
													className="w-3 h-3 bg-green-500 rounded-full"
												/>
												<span className="text-sm text-green-400 font-semibold">
													{dict.contact.availableNow}
												</span>
											</div>
										</CardContent>
									</Card>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		);
	}