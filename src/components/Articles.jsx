import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Calendar, Clock } from 'lucide-react'

const Articles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const articles = [
    {
      title: 'Building Modern Web Applications with React and TypeScript',
      description: 'A comprehensive guide to creating scalable and maintainable React applications using TypeScript.',
      platform: 'Dev.to',
      date: '2024-01-15',
      readTime: '8 min read',
      link: 'https://dev.to',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
      title: 'Mastering Three.js for Interactive 3D Web Experiences',
      description: 'Learn how to create stunning 3D graphics and animations for the web using Three.js.',
      platform: 'Medium',
      date: '2024-02-20',
      readTime: '12 min read',
      link: 'https://medium.com',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    },
    {
      title: 'The Complete Guide to Framer Motion Animations',
      description: 'Everything you need to know about creating smooth, performant animations with Framer Motion.',
      platform: 'Hashnode',
      date: '2024-03-10',
      readTime: '10 min read',
      link: 'https://hashnode.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      title: 'Optimizing React Performance: Best Practices and Tips',
      description: 'Discover techniques to improve your React application performance and user experience.',
      platform: 'Dev.to',
      date: '2024-04-05',
      readTime: '15 min read',
      link: 'https://dev.to',
      image: 'https://images.unsplash.com/photo-1555066931-ba19f4cdc3be?w=800',
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
      id="articles"
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
              <span className="gradient-text">Featured Articles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-strong rounded-xl overflow-hidden group cursor-pointer interactive"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neon-blue rounded-full text-xs font-semibold">
                    {article.platform}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:text-neon-blue transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Articles


