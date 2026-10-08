import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const SkillIcon3D = ({ color, position }) => {
  return (
    <Sphere args={[0.5, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  )
}

const SkillCard = ({ name, level, icon: Icon, color, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-strong rounded-xl p-6 text-center group"
    >
      <div className="relative w-20 h-20 mx-auto mb-4">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SkillIcon3D color={color} position={[0, 0, 0]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="w-full bg-dark-surface rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
        />
      </div>
      <span className="text-sm text-gray-400 mt-2 block">{level}%</span>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95, color: '#00d4ff' },
        { name: 'TypeScript', level: 90, color: '#3178c6' },
        { name: 'Next.js', level: 88, color: '#000000' },
        { name: 'TailwindCSS', level: 92, color: '#06b6d4' },
        { name: 'Three.js', level: 85, color: '#000000' },
        { name: 'Framer Motion', level: 90, color: '#0055ff' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'Express.js', level: 88, color: '#000000' },
        { name: 'Python', level: 85, color: '#3776ab' },
        { name: 'PostgreSQL', level: 82, color: '#336791' },
        { name: 'MongoDB', level: 80, color: '#47a248' },
        { name: 'REST API', level: 92, color: '#ff6b6b' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: '#f05032' },
        { name: 'Docker', level: 75, color: '#2496ed' },
        { name: 'AWS', level: 70, color: '#ff9900' },
        { name: 'Figma', level: 85, color: '#f24e1e' },
        { name: 'VS Code', level: 95, color: '#007acc' },
        { name: 'Linux', level: 80, color: '#fcc624' },
      ],
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
      id="skills"
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
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-neon-blue text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      index={categoryIndex * 6 + index}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


