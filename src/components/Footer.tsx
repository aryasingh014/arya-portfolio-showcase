
import { Heart, Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Arya Singh</h2>
            <p className="text-gray-400">Web Developer • AI Enthusiast • Software Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:arya.singh@example.com" 
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Arya Singh. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
