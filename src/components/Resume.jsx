import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      icon: Briefcase,
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2024 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
    },
    {
      icon: Briefcase,
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2022 - 2024',
      description: 'Built and maintained multiple client projects using modern web technologies.',
    },
    {
      icon: Briefcase,
      title: 'Junior Developer',
      company: 'Agency',
      period: '2021 - 2022',
      description: 'Started my journey in web development, working on various client projects.',
    },
  ]

  const education = [
    {
      icon: GraduationCap,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2017 - 2021',
      description: 'Graduated with honors, specialized in web development and software engineering.',
    },
  ]

  const achievements = [
    { icon: Award, title: 'Best Project Award', year: '2023' },
    { icon: Award, title: 'Hackathon Winner', year: '2022' },
    { icon: Award, title: 'Open Source Contributor', year: '2021' },
  ]

  const handleDownload = () => {
    // Create a simple PDF download (you can replace this with actual PDF generation)
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Replace with actual resume PDF path
    link.download = 'Mowli_Resume.pdf'
    link.click()
  }

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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          </motion.div>

          {/* Download Button */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white flex items-center gap-3 mx-auto interactive"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            variants={itemVariants}
            className="glass-strong rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="w-6 h-6 text-neon-blue" />
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>
                <div className="space-y-6">
                  {experiences.map((exp, index) => {
                    const Icon = exp.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 border-l-2 border-neon-blue"
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 bg-neon-blue rounded-full -translate-x-[9px]" />
                        <div className="flex items-start gap-3 mb-2">
                          <Icon className="w-5 h-5 text-neon-blue mt-1" />
                          <div>
                            <h4 className="text-lg font-bold">{exp.title}</h4>
                            <div className="text-neon-purple text-sm">{exp.company}</div>
                            <div className="text-gray-400 text-xs mt-1">{exp.period}</div>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-6 h-6 text-neon-blue" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => {
                    const Icon = edu.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 border-l-2 border-neon-purple"
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 bg-neon-purple rounded-full -translate-x-[9px]" />
                        <div className="flex items-start gap-3 mb-2">
                          <Icon className="w-5 h-5 text-neon-purple mt-1" />
                          <div>
                            <h4 className="text-lg font-bold">{edu.degree}</h4>
                            <div className="text-neon-blue text-sm">{edu.institution}</div>
                            <div className="text-gray-400 text-xs mt-1">{edu.period}</div>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-700"
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-neon-pink" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass rounded-xl p-6 text-center"
                    >
                      <Icon className="w-8 h-8 text-neon-pink mx-auto mb-3" />
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-400">{achievement.year}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume


