"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "SQL"] },
  { category: "Tools", items: ["Git", "VS Code", "Linux", "Docker"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
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
              Skills
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-foreground font-medium mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill}>
                    <motion.span
                      className="text-muted-foreground inline-block cursor-default"
                      whileHover={{ x: 4, color: "var(--primary)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
