import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="glass py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Name & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-start">
              Made with using React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex gap-4">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
