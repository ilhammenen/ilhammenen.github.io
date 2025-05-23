"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const texts = [
    "I build amazing web experiences.",
    "I create beautiful user interfaces.",
    "I develop modern applications.",
    "I bring ideas to life.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
          <source src="/video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-8 z-10"
      >
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 font-light"
        >
          {"Hello, I'm".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Main title with letter animation */}
        <div className="text-4xl md:text-6xl font-bold text-white">
          {"Ilham".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i + 10}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <span className="mx-4"></span>
          {"Ramli".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i + 14}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{ color: "#868734" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Rotating text with slide animation */}
        <div className="h-16 md:h-20 flex items-center justify-center">
          <motion.h2
            key={currentTextIndex}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -50, rotateX: 90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-2xl md:text-4xl font-medium text-white"
          >
            {texts[currentTextIndex]}
          </motion.h2>
        </div>

        {/* Description with word-by-word animation */}
        <div className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          {[
            "Frontend",
            "developer",
            "specializing",
            "in",
            "creating",
            "beautiful",
            "and",
            "functional",
            "web",
            "applications.",
          ].map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Buttons with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="rounded-full gradient-primary border-0">
              View My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-black/20 text-white border-[#868734] hover:bg-[#868734]/20"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown className="h-8 w-8 text-white cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  )
}
