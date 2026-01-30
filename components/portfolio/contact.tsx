"use client";

import React from "react"

import { motion } from "framer-motion";
import { Github, Facebook, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="py-24 px-6">
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
              Contact
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
            Interested in working together or just want to say hello? Feel free
            to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200 resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-foreground font-medium mb-3">Email</h3>
              <a
                href="mailto:bhuyinomayer@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                bhuyinomayer@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-foreground font-medium mb-4">Social</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/its-omayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/impstr.py"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@omayer.dev"
                  aria-label="Email"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
