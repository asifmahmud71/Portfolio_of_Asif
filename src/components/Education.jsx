import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, experience, activities } from '../data/portfolioData';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My academic journey and professional development
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-primary text-3xl" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-xl p-6 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl group-hover:bg-primary/20 transition-all"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-primary font-semibold">
                          {edu.period}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold">
                          {edu.grade}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience & Activities Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-secondary text-3xl" />
                <h3 className="text-2xl font-bold">Training & Experience</h3>
              </div>
              
              <div className="space-y-6 mb-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-secondary/20 transition-all"
                  >
                    <span className="text-sm text-secondary font-semibold">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold mb-2 mt-2">{exp.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{exp.organization}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <FaTrophy className="text-yellow-500 text-3xl" />
                <h3 className="text-2xl font-bold">Extracurriculars</h3>
              </div>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                    className="glass rounded-xl p-5 hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-yellow-500">{activity.role}</h4>
                      <span className="text-xs text-gray-400">{activity.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{activity.organization}</p>
                    {activity.description && (
                      <p className="text-gray-300 text-xs mt-2">{activity.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
