import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User, Sparkles, Zap, Cpu, ArrowRight, Mouse, Download, Mail, Linkedin, Twitter } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// New Components
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-indigo-400/30 to-purple-400/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const InteractiveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Animated Gradient Orbs */}
    <motion.div
      className="absolute top-1/4 -left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 -right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
      animate={{
        x: [0, -100, 0],
        y: [0, 50, 0],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

const ModernTypewriter = ({ text, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <motion.span
        className="ml-1 text-indigo-400"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        ▊
      </motion.span>
    </span>
  );
};

const TechStackMarquee = () => {
  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Python",
    "AI/ML", "Three.js", "Tailwind", "GraphQL", "AWS"
  ];

  return (
    <motion.div
      className="absolute bottom-20 left-0 right-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="flex gap-8"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-sm text-gray-400 whitespace-nowrap"
          >
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>{tech}</span>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const SocialLinks = () => {
  const socials = [
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <motion.div
      className="flex justify-center gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5 }}
    >
      {socials.map(({ Icon, href, label }, index) => (
        <motion.a
          key={label}
          href={href}
          className="group relative p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 + index * 0.1 }}
        >
          <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-gray-400 whitespace-nowrap">{label}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

const ProgressLoader = ({ duration = 3000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>Loading</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-1">
        <motion.div
          className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};



const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: false,
    });

    // Show main content after a brief delay
    const showTimer = setTimeout(() => setShowContent(true), 500);

    // Complete loading after total duration with smooth transition
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1200); // Increased transition time for smoother effect
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);



  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#0A0A0F] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <InteractiveBackground />
          <FloatingParticles />

          <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-7xl mx-auto">
            <div className="w-full max-w-6xl mx-auto">
              {showContent && (
                <>
                  {/* Main Icons with enhanced animation */}
                  <motion.div
                    className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"
                    variants={childVariants}
                  >
                    {[Sparkles, Code2, Cpu, Github].map((Icon, index) => (
                      <motion.div
                        key={index}
                        data-aos="fade-down"
                        data-aos-delay={index * 200}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative group">
                          <div className="absolute -inset-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-70 transition duration-500" />
                          <div className="relative p-3 sm:p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Enhanced Welcome Text */}
                  <motion.div
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    variants={childVariants}
                  >
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-lg sm:text-xl text-indigo-400 font-mono">
                        Hello, I'm
                      </span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold space-y-4 sm:space-y-6 mb-6">
                      <div className="leading-tight">
                        <motion.span
                          data-aos="fade-right"
                          data-aos-delay="200"
                          className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                        >
                          Creative
                        </motion.span>{" "}
                        <motion.span
                          data-aos="fade-right"
                          data-aos-delay="400"
                          className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                        >
                          Developer
                        </motion.span>
                      </div>
                      <div className="leading-tight">
                        <motion.span
                          data-aos="fade-up"
                          data-aos-delay="600"
                          className="inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                        >
                          &
                        </motion.span>{" "}
                        <motion.span
                          data-aos="fade-up"
                          data-aos-delay="800"
                          className="inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                        >
                          Designer
                        </motion.span>
                      </div>
                    </h1>

                    {/* Typewriter Subtitle */}
                    <motion.div
                      className="text-lg sm:text-xl md:text-2xl text-gray-400 font-mono mt-6 min-h-[2rem]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <ModernTypewriter
                        text="Crafting digital experiences with code and creativity"
                        speed={50}
                        className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Social Links */}
                  <SocialLinks />

                  {/* Tech Stack Marquee */}
                  <TechStackMarquee />

                  {/* Progress Loader */}
                  <ProgressLoader duration={3500} />


                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
