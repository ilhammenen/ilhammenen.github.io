"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Layout, Palette, Server, Settings, CuboidIcon as Cube } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks.",
      icon: <Layout className="h-10 w-10 text-primary" />,
      technologies: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      title: "Graphic Design",
      description: "Creating stunning visual designs and digital artwork with industry-standard tools.",
      icon: <Palette className="h-10 w-10 text-primary" />,
      technologies: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva"],
    },
    {
      title: "Video Production",
      description: "Editing and producing high-quality videos with professional motion graphics.",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
    },
    {
      title: "3D Design & CAD",
      description: "Creating technical drawings and 3D models for various design projects.",
      icon: <Cube className="h-10 w-10 text-primary" />,
      technologies: ["AutoCAD", "SketchUp", "Blender", "SolidWorks", "Fusion 360"],
    },
    {
      title: "Database Management",
      description: "Designing and managing robust database systems for scalable applications.",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Redis"],
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user experiences and beautiful interfaces.",
      icon: <Settings className="h-10 w-10 text-primary" />,
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle"],
    },
    {
      title: "Web Development",
      description: "Full-stack development with modern technologies and best practices.",
      icon: <Code className="h-10 w-10 text-primary" />,
      technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "Git", "Docker"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const titleSlideVariants = {
    hidden: { opacity: 0, y: 50, skewY: 7 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const iconVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-3xl font-bold">
            {"My Skills".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={titleSlideVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-primary mx-auto mt-4 mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I've worked with a variety of technologies and tools throughout my career. Here are some of my key skills
            and areas of expertise.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-card p-6 rounded-lg shadow-md border border-border group"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 },
                }}
                className="mb-4"
              >
                {skill.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                className="text-xl font-bold mb-2"
              >
                {skill.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                className="text-muted-foreground mb-4"
              >
                {skill.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {skill.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.15 + 0.6 + i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
