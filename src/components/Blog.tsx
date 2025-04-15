
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogs = [
    {
      title: "Building Responsive UIs with React and Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive user interfaces using React.js and Tailwind CSS.",
      date: "October 15, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Getting Started with Machine Learning in Python",
      excerpt: "A beginner's guide to understanding and implementing basic machine learning algorithms in Python.",
      date: "August 22, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Optimizing Database Performance in Web Applications",
      excerpt: "Tips and techniques for improving database performance in modern web applications.",
      date: "July 5, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title mx-auto">Blog & Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog, index) => (
            <a 
              key={index} 
              href={blog.link} 
              className="block bg-white rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    {blog.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {blog.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                
                <span className="inline-flex items-center text-purple-600 font-medium">
                  Read more <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
