"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p className="text-muted-foreground mt-2">Frontend Developer</p>
          </div>

          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="bg-background p-3 rounded-full"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="bg-background p-3 rounded-full"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="bg-background p-3 rounded-full"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="bg-background p-3 rounded-full"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </motion.a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Ilham Ramli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
