"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Modern BLog Website",
    description:
      "A clean, minimal blog website with drag-and-drop functionality and real-time sync.",
    tech: ["Node", "TypeScript", "Firebase"],
    link: "https://github.com/its-omayer/agontuk",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio showcasing projects and skills with subtle animations and modern design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts and interactive data visualization.",
    tech: ["JavaScript", "REST API", "Chart.js"],
    link: "https://github.com/its-omayer/Weather-Dashboard",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest">
              Projects
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={project.link}
                className="block p-6 -mx-6 rounded-lg transition-colors duration-300 hover:bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
