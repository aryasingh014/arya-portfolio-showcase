
import { Code, Database, Terminal, Server, Globe, FileCode } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6 text-purple-500" />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "HTML/CSS"]
    },
    {
      title: "Frameworks / Libraries",
      icon: <FileCode className="h-6 w-6 text-purple-500" />,
      skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "TensorFlow", "Bootstrap"]
    },
    {
      title: "Tools / Platforms",
      icon: <Terminal className="h-6 w-6 text-purple-500" />,
      skills: ["Git", "Docker", "VS Code", "IntelliJ IDEA", "GitHub Actions", "AWS", "Jenkins"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-purple-500" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      skills: ["RESTful APIs", "GraphQL", "WebSockets", "Responsive Design", "PWA"]
    },
    {
      title: "Other",
      icon: <Server className="h-6 w-6 text-purple-500" />,
      skills: ["Agile/Scrum", "CI/CD", "Unit Testing", "AI/ML Basics", "OOP", "Design Patterns"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mx-auto">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md card-hover border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-3 text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
