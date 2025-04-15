
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, FileText, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mx-auto">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Mail className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:arya.singh@example.com" className="text-gray-800 hover:text-purple-600">
                    arya.singh@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Phone className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-800 hover:text-purple-600">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Linkedin className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600">
                    linkedin.com/in/arya-singh
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Github className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600">
                    github.com/arya-singh
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FileText className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Resume</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600">
                    Download Resume (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
