import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Code, Rocket, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const stats = [
    { icon: Code, label: 'Projects', value: '50+' },
    { icon: Rocket, label: 'Experience', value: '3+ Years' },
    { icon: Award, label: 'Certifications', value: '10+' },
    { icon: User, label: 'Clients', value: '20+' },
  ]

  const skills = [
    'React.js', 'Node.js', 'TypeScript', 'Python',
    'Three.js', 'Framer Motion', 'TailwindCSS', 'MongoDB',
    'Express.js', 'PostgreSQL', 'Docker', 'AWS'
  ]

  return (
    <section
      id="about"
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
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-strong rounded-xl p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Right Side - Image/Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-6"
              >
                <div className="relative w-full max-w-sm mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl blur-2xl opacity-30 animate-pulse" />

                  {/* Image Container */}
                  <div className="relative glass-strong rounded-2xl p-2 overflow-hidden">
                    <motion.img
                      src="/mowli.jpg"
                      alt="Mowli"
                      className="w-full h-auto rounded-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-20 blur-sm -z-10" />
                </div>
              </motion.div>

              <div className="glass-strong rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-neon-blue">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with a love for creating beautiful,
                  interactive web experiences. I specialize in modern JavaScript frameworks
                  and enjoy pushing the boundaries of what's possible on the web.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, color: '#00d4ff' }}
                    className="px-4 py-2 glass rounded-full text-sm text-gray-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Experience Timeline</h3>
            <div className="space-y-8">
              {[
                {
                  year: '2024',
                  title: 'Senior Full Stack Developer',
                  company: 'Tech Company',
                  description: 'Leading development of scalable web applications',
                },
                {
                  year: '2022',
                  title: 'Full Stack Developer',
                  company: 'Startup Inc',
                  description: 'Built and maintained multiple client projects',
                },
                {
                  year: '2021',
                  title: 'Junior Developer',
                  company: 'Agency',
                  description: 'Started my journey in web development',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="glass-strong rounded-xl p-6 relative pl-12 border-l-2 border-neon-blue"
                >
                  <div className="absolute left-0 top-6 w-4 h-4 bg-neon-blue rounded-full -translate-x-[9px]" />
                  <div className="text-neon-blue font-semibold mb-2">{item.year}</div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <div className="text-neon-purple mb-2">{item.company}</div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

