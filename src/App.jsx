import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

import CodingProfiles from './components/CodingProfiles'
import SocialLinks from './components/SocialLinks'
import Navigation from './components/Navigation'
import Cursor from './components/Cursor'
import ParticlesBackground from './components/ParticlesBackground'
import WelcomeScreen from './components/WelcomeScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative min-h-screen bg-dark-bg overflow-hidden">
      <WelcomeScreen onLoadingComplete={handleLoadingComplete} />
      {!isLoading && (
        <>
          <Cursor />
          <ParticlesBackground />
          <Navigation />

          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Resume />
            <CodingProfiles />
            <Contact />
            <SocialLinks />
          </main>
        </>
      )}
    </div>
  )
}

export default App


