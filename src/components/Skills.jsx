import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolioData';
import { 
  FaReact, FaNode, FaPython, FaJava, FaDatabase, 
  FaGitAlt, FaLinux, FaAndroid 
} from 'react-icons/fa';
import { 
  SiJavascript, SiMongodb, SiMysql, SiTensorflow, 
  SiExpress, SiTailwindcss, SiFirebase 
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillIcons = {
    'React.js': <FaReact className="text-blue-400" />,
    'Node.js': <FaNode className="text-green-500" />,
    'Python': <FaPython className="text-yellow-400" />,
    'Java': <FaJava className="text-red-500" />,
    'JavaScript': <SiJavascript className="text-yellow-300" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'MySQL': <SiMysql className="text-blue-500" />,
    'Firebase': <SiFirebase className="text-orange-500" />,
    'TensorFlow': <SiTensorflow className="text-orange-600" />,
    'Express.js': <SiExpress className="text-gray-400" />,
    'Git': <FaGitAlt className="text-red-500" />,
    'Linux (Ubuntu)': <FaLinux className="text-yellow-500" />,
    'Android Studio': <FaAndroid className="text-green-400" />,
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, and IoT
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {category}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {skillIcons[skill] || '•'}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">8+</div>
              <div className="text-gray-400">Frameworks</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-gray-400">Databases</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-400">Tools</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
