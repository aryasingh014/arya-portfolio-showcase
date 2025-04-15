
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projectList = [
    {
      title: "Nexus PLC Visualizer",
      description: "Visualizes real-time PLC data using OPC UA and MongoDB for industrial automation monitoring.",
      tech: ["Node.js", "React.js", "MongoDB", "Prosys Simulation Server"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      github: "https://github.com",
      live: "https://example.com",
      role: "Full Stack Developer"
    },
    {
      title: "AI Study Companion",
      description: "A machine learning powered app that helps students create personalized study plans and track progress.",
      tech: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      github: "https://github.com",
      live: "https://example.com",
      role: "ML Engineer & Backend Developer"
    },
    {
      title: "EcoTrack Mobile App",
      description: "An app that helps users track and reduce their carbon footprint through daily activity monitoring.",
      tech: ["React Native", "Firebase", "Node.js", "Express"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      github: "https://github.com",
      live: "https://example.com",
      role: "Mobile App Developer"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title mx-auto">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-purple-600 font-medium mb-2">My Role:</p>
                  <p className="text-sm text-gray-600">{project.role}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-purple-600 font-medium mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="skill-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <a 
                    href={project.github} 
                    className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="mr-2" />
            <span className="font-medium">See more projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
