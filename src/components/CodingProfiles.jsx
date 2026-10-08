import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Code, Trophy, TrendingUp } from 'lucide-react'

const CodingProfiles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'mowli',
      stats: {
        problems: '100+',
        rating: '1850',
        badge: 'Expert',
      },
      link: 'https://leetcode.com/u/just_do_it____007/',
      color: '#ffa116',
      icon: Code,
    },
    {
      platform: 'Codeforces',
      username: 'mowli',
      stats: {
        problems: '300+',
        rating: '1600',
        badge: 'Specialist',
      },
      link: 'https://codeforces.com',
      color: '#1f8acb',
      icon: Trophy,
    },
    {
      platform: 'HackerRank',
      username: 'mowli',
      stats: {
        problems: '200+',
        certificates: '15+',
        badge: 'Gold',
      },
      link: 'https://www.hackerrank.com/profile/kabaddimouli26',
      color: '#2ec866',
      icon: TrendingUp,
    },
    {
      platform: 'GitHub',
      username: 'mowli',
      stats: {
        repositories: '50+',
        contributions: '1000+',
        badge: 'Active',
      },
      link: 'https://github.com/Mowli125',
      color: '#ffffff',
      icon: Code,
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
      id="coding-profiles"
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
              <span className="gradient-text">Coding Profiles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              My competitive programming and coding journey
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {profiles.map((profile, index) => {
              const Icon = profile.icon
              return (
                <motion.a
                  key={profile.platform}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05, rotate: 2 }}
                  className="glass-strong rounded-xl p-6 text-center group cursor-pointer interactive"
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${profile.color}20`, border: `2px solid ${profile.color}` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: profile.color }} />
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-xl font-bold mb-2">{profile.platform}</h3>
                  <p className="text-sm text-gray-400 mb-4">@{profile.username}</p>

                  {/* Stats */}
                  <div className="space-y-2 mb-4">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-400 capitalize">{key}:</span>
                        <span className="font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badge */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: `${profile.color}20`, color: profile.color }}
                  >
                    {profile.stats.badge}
                  </div>

                  {/* External Link Icon */}
                  <div className="mt-4 flex justify-center">
                    <ExternalLink
                      className="w-4 h-4 text-gray-400 group-hover:text-neon-blue transition-colors"
                      style={{ color: profile.color }}
                    />
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles


