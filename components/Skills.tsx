"use client";

import { motion } from "framer-motion";
import CircularText from "@/components/CircularText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SkillsProps {
	dict: any;
}

export default function Skills({ dict }: SkillsProps) {
	const skillsData = [
		{
			category: dict.skills.frontend,
			skills: [
				{ name: "React" },
				{ name: "Next.js" },
				{ name: "TypeScript" },
				{ name: "Tailwind CSS" },
				{ name: "CSS" },
				{ name: "Web Design" },
			],
		},
		{
			category: dict.skills.backend,
			skills: [
				{ name: "Node.js"},
				{ name: "Express"},
				{ name: "C# .NET"},
				{ name: "API REST"},
				{ name: "SQL"},
				{ name: "NoSQL"},
				{ name: "Microsoft SQL Server"},
			],
		},
		{
			category: dict.skills.toolsDevOps,
			skills: [
				{ name: "Git"},
				{ name: "GitHub"},
				{ name: "Vercel"},
			],
		},
	];

	return (
		<section
			id="skills"
			className="py-32 bg-zinc-950 relative overflow-hidden"
		>
			{/* Decorative CircularText */}
			<div className="absolute top-20 right-10 opacity-5 pointer-events-none hidden lg:block">
				<CircularText
					text="DEVELOPER • CREATOR • INNOVATOR • "
					className="text-blue-500"
				/>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-20"
				>
					<h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
						{dict.skills.title}
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl">
						{dict.skills.description}
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{skillsData.map((category, categoryIndex) => (
						<motion.div
							key={category.category}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.1 }}
							whileHover={{ y: -8 }}
							className="group relative"
						>
							{/* Glow effect */}
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
							
							<Card className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full backdrop-blur-sm overflow-hidden">
								{/* Animated gradient background */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								
								<CardHeader className="relative">
									<CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-400 transition-all duration-300 flex items-center gap-3">
										<motion.div 
											className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
											whileHover={{ rotate: 360, scale: 1.1 }}
											transition={{ duration: 0.6 }}
										>
											<div className="w-2 h-2 rounded-full bg-white" />
										</motion.div>
										{category.category}
									</CardTitle>
								</CardHeader>
								
								<Separator className="bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
								
								<CardContent className="pt-6 relative">
									<div className="flex flex-wrap gap-2">
										{category.skills.map((skill, skillIndex) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
												whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
												viewport={{ once: true }}
												transition={{
													delay: categoryIndex * 0.1 + skillIndex * 0.05,
													type: "spring",
													stiffness: 200,
												}}
												whileHover={{ scale: 1.1, rotate: 2 }}
											>
												<Badge 
													variant="secondary" 
													className="relative group/badge bg-gradient-to-r from-blue-500/10 to-blue-500/10 hover:from-blue-500/20 hover:to-blue-500/20 border border-blue-500/30 hover:border-blue-400/60 text-white font-medium text-sm px-4 py-2 transition-all cursor-default shadow-lg hover:shadow-blue-500/30"
												>
													<span className="relative z-10">{skill.name}</span>
													<div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover/badge:from-blue-600/10 group-hover/badge:to-blue-600/10 rounded transition-all" />
												</Badge>
											</motion.div>
										))}
									</div>
								</CardContent>
								
								{/* Corner accent */}
								<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}