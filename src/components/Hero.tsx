
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-100 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-200 filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fade-in">
            <p className="text-purple-500 text-lg font-medium mb-2">Hello there, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
              Arya Singh
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-8">
              A passionate IT student exploring 
              <span className="font-medium text-purple-600"> Web Development</span>,
              <span className="font-medium text-purple-600"> AI</span>, and
              <span className="font-medium text-purple-600"> Software Engineering</span>.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Open to internships for Summer 2025.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-200"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200"
              >
                See My Work
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-slow">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300 to-purple-500 blur-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
                alt="Profile" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-500 animate-bounce-light"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
