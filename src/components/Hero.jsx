import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
      >
        <div className="text-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <FaEnvelope /> {personalInfo.email}
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <FaPhone /> {personalInfo.phone}
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt /> {personalInfo.location}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all"
            >
              <FaLinkedin size={28} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-block px-8 py-4 gradient-bg text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get In Touch
            </a>
            <a
              href="/Resume_of_Asif_Mahmud.pdf"
              download="Asif_Mahmud_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 hover:shadow-lg hover:shadow-secondary/50 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
