"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 — Present",
    title: "Student",
    organization: "College",
    description:
      "Pursuing a degree in Science with focus on It and Modern Technology.",
  },
  {
    period: "2024 — 2025",
    title: "IT Support Intern",
    organization: "Tech Company",
    description:
      "Provided technical support, managed network infrastructure, and assisted with system administration tasks.",
  },
  {
    period: "2022 — 2025",
    title: "Freelance Developer",
    organization: "Self-employed",
    description:
      "Built websites and web applications for small businesses, focusing on responsive design and user experience.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
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
              Education & Experience
            </h2>
          </div>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-border"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />
              
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {exp.period}
              </span>
              <h3 className="text-foreground font-medium mt-2">
                {exp.title}
                <span className="text-primary"> · {exp.organization}</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
