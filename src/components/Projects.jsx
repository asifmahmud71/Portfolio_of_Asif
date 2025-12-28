import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of my work spanning web development, mobile apps, IoT, and AI/ML
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                {/* Project Header */}
                <div className="gradient-bg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-2xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-200">{project.subtitle}</p>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-400">{project.type}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-700">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt size={14} /> Details
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/asifmahmud71"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full hover:bg-primary/20 transition-all group"
            >
              <FaGithub className="group-hover:rotate-12 transition-transform" size={24} />
              <span>View More on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
