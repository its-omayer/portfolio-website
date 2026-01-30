"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest">
              About
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            I&apos;m a passionate IT enthusiast and student with a deep curiosity for
            how technology shapes our world. My journey in tech began with a
            simple question:{" "}
            <span className="text-primary font-medium">
              &quot;How does this work?&quot;
            </span>
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Currently focused on expanding my knowledge in software development,
            networking, and system administration. I believe in learning by
            doing—every project is an opportunity to grow and every challenge is
            a puzzle waiting to be solved.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            When I&apos;m not coding or studying, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or diving deep
            into the latest tech trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
