import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Github, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

const SocialLinks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mowlidharan-s-20714925a/',
      color: '#0077b5',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Mowli125',
      color: '#ffffff',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: '#1da1f2',
      gradient: 'from-blue-400 to-blue-500',
    },
    {
      name: 'Instargram',
      icon: Instagram,
      url: 'https://www.instagram.com/just_do_it____007/?hl=en',
      color: '#e4405f',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: '#ff0000',
      gradient: 'from-red-500 to-red-600',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'kabaddimouli26@gmail.com',
      color: '#00d4ff',
      gradient: 'from-cyan-400 to-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 200,
      },
    },
  }

  return (
    <section
      id="social-links"
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
              <span className="gradient-text">Connect With Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Let's connect and build something amazing together
            </p>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: `0 0 30px ${social.color}50`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-20 h-20 glass-strong rounded-full flex items-center justify-center group interactive"
                >
                  <Icon
                    className="w-8 h-8 transition-colors"
                    style={{ color: social.color }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 px-3 py-1 bg-dark-surface rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-surface" />
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass rounded-xl p-6 inline-block">
              <p className="text-gray-400 mb-2">
                © {new Date().getFullYear()} Mowli. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Built with React, Three.js, and Framer Motion
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialLinks


