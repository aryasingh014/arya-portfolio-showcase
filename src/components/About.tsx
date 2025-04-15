
import { GraduationCap, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mx-auto">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <h3 className="ml-4 text-lg font-semibold">Education</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>
                <p className="font-medium">Bachelor of Technology in Information Technology</p>
                <p className="text-sm text-gray-500">XYZ Institute of Technology</p>
                <p className="text-sm text-gray-500">Expected graduation: 2026</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Heart className="text-purple-600" size={24} />
              </div>
              <h3 className="ml-4 text-lg font-semibold">Interests</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Java Development</li>
              <li>• Artificial Intelligence</li>
              <li>• Web Development</li>
              <li>• Data Science</li>
              <li>• Cloud Computing</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="ml-4 text-lg font-semibold">Soft Skills</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Communication</li>
              <li>• Teamwork</li>
              <li>• Problem-solving</li>
              <li>• Time Management</li>
              <li>• Adaptability</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-purple-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">My Story</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm an enthusiastic IT student with a passion for solving real-world problems through technology. 
            My journey began when I built my first website at 14, and since then, I've been exploring various 
            aspects of computer science and software development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently, I'm focused on expanding my knowledge in AI and web development while maintaining a 
            strong foundation in core programming principles. I enjoy participating in hackathons and collaborative 
            projects that challenge me to think creatively and implement innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
