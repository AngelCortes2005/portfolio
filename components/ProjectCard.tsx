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
      className="group h-full relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
      
      <Card className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full flex flex-col backdrop-blur-sm">
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-transparent shrink-0 flex justify-center items-center">
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                height={192}
                width={384}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Image overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </motion.div>
            </div>
          )}
        </div>

        <CardHeader className="shrink-0 relative z-10">
          <CardTitle className="text-xl text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col flex-grow relative z-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg text-xs text-blue-400/90 hover:text-blue-300 hover:border-blue-500/40 transition-all cursor-default shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Gradient separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-6" />

          {/* Spacer to push buttons to bottom */}
          <div className="flex-grow" />

          {/* Buttons - Always at bottom */}
          <div className="flex gap-3">
            {github && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-400 hover:text-white transition-all shadow-sm hover:shadow-blue-500/20"
                  asChild
                >
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {dict.projects.code}
                  </a>
                </Button>
              </motion.div>
            )}
            {demo && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                  asChild
                >
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {dict.projects.demo}
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}