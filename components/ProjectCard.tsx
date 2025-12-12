"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  index: number;
  dict: any;
}

export default function ProjectCard({ title, description, tags, image, github, demo, index, dict }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full"
    >
      <Card className="bg-zinc-900/50 border-white/5 hover:border-violet-500/20 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-zinc-800/50 flex-shrink-0">
          {image ? (
            <Image
              src={image}
              alt={title}
              height={192}
              width={384}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        </div>

        <CardHeader className="flex-shrink-0">
          <CardTitle className="text-xl text-white group-hover:text-violet-400 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Spacer to push buttons to bottom */}
          <div className="flex-grow" />

          {/* Buttons - Always at bottom */}
          <div className="flex gap-3">
            {github && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-white/10 hover:border-violet-500/50 hover:bg-violet-500/10 text-gray-400 hover:text-white"
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {dict.projects.code}
                </a>
              </Button>
            )}
            {demo && (
              <Button
                size="sm"
                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                asChild
              >
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {dict.projects.demo}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}