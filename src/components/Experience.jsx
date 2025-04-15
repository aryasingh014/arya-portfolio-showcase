
import { Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "TechNova Solutions",
      period: "May 2023 - August 2023",
      description: [
        "Developed and maintained client websites using React.js and Node.js",
        "Implemented responsive designs and improved site performance by 40%",
        "Collaborated with a team of 5 developers using Git and Agile methodologies"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Git"]
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      period: "January 2023 - April 2023",
      description: [
        "Assisted in developing machine learning models for natural language processing",
        "Collected and preprocessed large datasets for training neural networks",
        "Documented research findings and contributed to a published paper"
      ],
      tech: ["Python", "TensorFlow", "NLP", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mx-auto">Experience</h2>
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white"></div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="text-purple-500 mr-2" size={20} />
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                  </div>
                  <h4 className={`text-purple-600 font-medium mb-1 flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>{exp.company}</h4>
                  <p className={`text-sm text-gray-500 mb-4 flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="inline mr-1" size={14} />
                    {exp.period}
                  </p>
                  
                  <ul className={`text-gray-600 space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="skill-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
