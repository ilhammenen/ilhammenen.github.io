"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const slideUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const letterSlideVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const wordSlideVariants = {
    hidden: { opacity: 0, y: 30, skewY: 7 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideUpVariants} className="relative h-[400px] rounded-lg overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image src="/placeholder.svg?height=800&width=600" alt="Profile" fill className="object-cover" />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {/* Animated title */}
            <div className="text-3xl font-bold">
              {"About Me".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterSlideVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            <motion.div variants={slideUpVariants} className="w-20 h-1 bg-primary"></motion.div>

            {/* Animated paragraphs */}
            <div className="space-y-4">
              <div className="text-muted-foreground">
                {[
                  "Hello!",
                  "I'm",
                  "Jane,",
                  "a",
                  "passionate",
                  "frontend",
                  "developer",
                  "with",
                  "5",
                  "years",
                  "of",
                  "experience",
                  "creating",
                  "modern",
                  "web",
                  "applications.",
                ].map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordSlideVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <div className="text-muted-foreground">
                {[
                  "My",
                  "journey",
                  "in",
                  "web",
                  "development",
                  "started",
                  "when",
                  "I",
                  "built",
                  "my",
                  "first",
                  "website",
                  "at",
                  "16.",
                  "Since",
                  "then,",
                  "I've",
                  "worked",
                  "with",
                  "startups",
                  "and",
                  "established",
                  "companies.",
                ].map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i + 16}
                    variants={wordSlideVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <div className="text-muted-foreground">
                {[
                  "When",
                  "I'm",
                  "not",
                  "coding,",
                  "you",
                  "can",
                  "find",
                  "me",
                  "hiking,",
                  "reading",
                  "sci-fi",
                  "novels,",
                  "or",
                  "experimenting",
                  "with",
                  "new",
                  "recipes.",
                ].map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i + 32}
                    variants={wordSlideVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div variants={slideUpVariants} whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <a href="#contact" className="inline-block mt-4 text-primary font-medium hover:underline">
                Let's work together →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
