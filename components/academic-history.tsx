"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from "lucide-react"

export default function AcademicHistory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      description:
        "Specialized in Human-Computer Interaction and Software Engineering. Thesis on 'Responsive Web Design Patterns for Enhanced User Experience'.",
      achievements: [
        "Dean's List for 4 consecutive semesters",
        "Graduate Research Assistant",
        "Published 2 papers in HCI conferences",
      ],
      courses: ["Advanced Web Development", "Machine Learning", "Database Systems", "UI/UX Design"],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      description:
        "Comprehensive study in computer science fundamentals with focus on web technologies and software development.",
      achievements: ["Magna Cum Laude", "President of Web Development Club", "Winner of Annual Hackathon 2017"],
      courses: ["Data Structures", "Algorithms", "Web Programming", "Software Engineering"],
    },
    {
      degree: "High School Diploma",
      institution: "Lincoln High School",
      location: "San Francisco, CA",
      period: "2010 - 2014",
      gpa: "4.0/4.0",
      description: "Valedictorian with focus on STEM subjects and computer programming.",
      achievements: ["Valedictorian", "National Honor Society", "AP Scholar with Distinction"],
      courses: ["AP Computer Science", "AP Calculus", "AP Physics", "AP English"],
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001",
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2022",
      credentialId: "GOOGLE-UX-2022-456",
    },
    {
      name: "Adobe Certified Expert - Photoshop",
      issuer: "Adobe",
      date: "2021",
      credentialId: "ACE-PS-2021-789",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const titleLetterVariants = {
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

  return (
    <section id="academic" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-3xl font-bold">
            {"Academic History".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={titleLetterVariants}
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
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-primary mx-auto mt-4 mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My educational journey has provided me with a strong foundation in computer science, design, and technology.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Education Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="relative flex items-start gap-8 mb-12">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 bg-primary p-3 rounded-full"
                >
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 bg-card p-6 rounded-lg shadow-lg border border-border"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                      <p className="text-lg font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <Star className="h-4 w-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.2 + i * 0.1 + 1.2 }}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Key Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.1 + 1.4 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card p-6 rounded-lg shadow-md border border-border text-center"
                >
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <p className="text-primary font-medium">{cert.date}</p>
                  <p className="text-xs text-muted-foreground mt-2">ID: {cert.credentialId}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
