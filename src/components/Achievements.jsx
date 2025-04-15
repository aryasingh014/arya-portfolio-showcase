
import { Award, Trophy, File, Star } from "lucide-react";

const Achievements = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "April 2023",
      icon: <File className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "January 2023",
      icon: <File className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Java Programming and Software Engineering Fundamentals",
      issuer: "NPTEL",
      date: "December 2022",
      icon: <File className="h-8 w-8 text-yellow-500" />,
    },
  ];

  const competitions = [
    {
      title: "National Hackathon 2023",
      position: "2nd Place",
      description: "Built a real-time analytics platform for smart city data.",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Regional Coding Competition",
      position: "1st Place",
      description: "Solved complex algorithmic challenges in record time.",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    },
  ];

  const awards = [
    {
      title: "Dean's List",
      issuer: "XYZ Institute of Technology",
      year: "2022-2023",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Outstanding Project Award",
      issuer: "Department of Information Technology",
      year: "2022",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title mx-auto">Achievements & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <File className="mr-2 text-purple-500" />
              <span>Certifications</span>
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-lg shadow-md card-hover border-l-4 border-purple-400"
                >
                  <div className="flex items-center mb-2">
                    {cert.icon}
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">{cert.title}</h4>
                      <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Trophy className="mr-2 text-purple-500" />
              <span>Competitions</span>
            </h3>
            
            <div className="space-y-6">
              {competitions.map((comp, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-lg shadow-md card-hover border-l-4 border-yellow-400"
                >
                  <div className="flex items-center mb-2">
                    {comp.icon}
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">{comp.title}</h4>
                      <p className="text-sm font-medium text-purple-600">{comp.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{comp.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold my-6 flex items-center">
              <Award className="mr-2 text-purple-500" />
              <span>Awards</span>
            </h3>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-lg shadow-md card-hover border-l-4 border-blue-400"
                >
                  <div className="flex items-center mb-2">
                    {award.icon}
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">{award.title}</h4>
                      <p className="text-sm text-gray-500">{award.issuer} • {award.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
