import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, thesis } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image or Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold">
                      AM
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
                      <p className="text-gray-400">Computer Science Graduate</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">University</p>
                      <p className="font-semibold">University of Chittagong</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">CGPA</p>
                      <p className="font-semibold text-primary">3.79 / 4.00</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Graduation</p>
                      <p className="font-semibold">August 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Career Objective
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To build a purposeful and fulfilling career through continuous learning, 
                  dedication, and integrity. I aim to apply my knowledge and analytical abilities 
                  to contribute meaningfully to organizational growth and society, while pursuing 
                  excellence and personal development in every responsibility I undertake.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Undergraduate Thesis
                </h3>
                <h4 className="font-semibold mb-2">{thesis.title}</h4>
                <p className="text-gray-400 text-sm">{thesis.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold gradient-text">7+</p>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold gradient-text">15+</p>
                  <p className="text-sm text-gray-400">Technologies</p>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold gradient-text">80hrs</p>
                  <p className="text-sm text-gray-400">Training</p>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold gradient-text">3+</p>
                  <p className="text-sm text-gray-400">Activities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
