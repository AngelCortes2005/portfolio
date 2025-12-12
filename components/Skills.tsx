"use client";

import { motion } from "framer-motion";
import CircularText from "@/components/CircularText";

interface SkillsProps {
	dict: any;
}

export default function Skills({ dict }: SkillsProps) {
	const skillsData = [
		{
			category: dict.skills.frontend,
			skills: [
				{ name: "React", level: dict.skills.expert },
				{ name: "Next.js", level: dict.skills.advanced },
				{ name: "TypeScript", level: dict.skills.advanced },
				{ name: "Tailwind CSS", level: dict.skills.expert },
			],
		},
		{
			category: dict.skills.backend,
			skills: [
				{ name: "Node.js", level: dict.skills.advanced },
				{ name: "Express", level: dict.skills.advanced },
				{ name: "PostgreSQL", level: dict.skills.intermediate },
				{ name: "Prisma", level: dict.skills.advanced },
			],
		},
		{
			category: dict.skills.toolsDevOps,
			skills: [
				{ name: "Git", level: dict.skills.advanced },
				{ name: "Docker", level: dict.skills.intermediate },
				{ name: "Vercel", level: dict.skills.advanced },
				{ name: "AWS", level: dict.skills.intermediate },
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
					className="text-violet-500"
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
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
					{skillsData.map((category, categoryIndex) => (
						<motion.div
							key={category.category}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.1 }}
							className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:border-violet-500/20 transition-all"
						>
							<h3 className="text-2xl font-bold text-white mb-8">
								{category.category}
							</h3>

							<div className="space-y-6">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											delay:
												categoryIndex * 0.1 + skillIndex * 0.05,
										}}
									>
										<div className="flex items-center justify-between mb-2">
											<span className="text-white font-medium">
												{skill.name}
											</span>
											<span className="text-sm text-gray-500">
												{skill.level}
											</span>
										</div>
										<div className="h-1 bg-white/5 rounded-full overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{
													width:
														skill.level === dict.skills.expert
															? "95%"
															: skill.level === dict.skills.advanced
															? "85%"
															: "70%",
												}}
												viewport={{ once: true }}
												transition={{
													duration: 1,
													delay:
														categoryIndex * 0.1 +
														skillIndex * 0.05,
												}}
												className="h-full bg-linear-to-r from-violet-600 to-purple-600"
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}