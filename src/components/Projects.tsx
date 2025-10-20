import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Text Classification System",
      description: "NLP tool for sentiment analysis and spam detection using machine learning algorithms with an intuitive Streamlit interface.",
      tech: ["Python", "Scikit-learn", "Streamlit", "NLP"],
      link: "https://t.ly/ZaPxS",
      impact: "Advanced NLP processing with real-time classification",
      image: "/assets/sample_project.jpg"
    },
    {
      title: "WhatsApp Clone",
      description: "Real-time chat application with media sharing, authentication, and Socket.io for instant messaging capabilities.",
      tech: ["Flutter", "Firebase", "Socket.io", "Dart"],
      link: "https://t.ly/mVaz0",
      impact: "Full-featured messaging with real-time sync",
      image: "/assets/sample_project.jpg"
    },
    {
      title: "Budget Buddy",
      description: "Personal finance tracker with categorized budgets, expense tracking, and real-time synchronization across devices.",
      tech: ["Flutter", "Firebase", "Dart"],
      link: "https://t.ly/jHETH",
      impact: "Comprehensive financial management solution",
      image: "/assets/sample_project.jpg"
    },
    {
      title: "ONCO - AI Cancer Diagnosis",
      description: "Contributed to an AI-based cancer diagnosis platform using deep learning and ML for medical prognosis and analysis.",
      tech: ["Flutter", "Python", "TensorFlow", "Flask", "Azure"],
      link: "https://t.ly/9zCsw",
      impact: "Healthcare AI with life-saving potential",
      image: "/assets/sample_project.jpg"
    },
    {
      title: "Uber Clone",
      description: "Ride-hailing application with live GPS tracking, user role switching, and comprehensive booking system.",
      tech: ["Flutter", "Dart", "Maps API"],
      link: "https://t.ly/Sy7_B",
      impact: "Full-stack transportation solution",
      image: "/assets/sample_project.jpg"
    },
    {
      title: "Habit Ease",
      description: "Daily habit tracker with streak counting, reminders, progress charts, and local storage for offline functionality.",
      tech: ["Flutter", "Hive", "Dart"],
      link: "https://t.ly/w99jg",
      impact: "Behavioral change through gamification",
      image: "/assets/sample_project.jpg"
    },
    {
      title: "Weather & AQI Tracker",
      description: "Native iOS app displaying real-time air quality index and weather data with location-based services.",
      tech: ["Swift", "Xcode", "iOS"],
      link: "https://t.ly/AIaez",
      impact: "Environmental awareness through data",
      image: "/assets/sample_project.jpg"
    },
    {
      title: "BAWT - Behavior Analysis",
      description: "NLP-based model to analyze human chat behavior and detect communication patterns using advanced text processing.",
      tech: ["Python", "Jupyter", "NLP", "Machine Learning"],
      link: "https://t.ly/I8k-8",
      impact: "Human behavior insights through AI",
      image: "/assets/sample_project.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050505] dark:text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-[#050505]/70 dark:text-white/70 max-w-2xl mx-auto">
            A showcase of applications that solve real problems with elegant solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-none bg-gradient-to-br from-white to-[#F5F1E3]/20 dark:from-[#121212] dark:to-[#050505] hover:scale-105 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1B9AAA]/10 to-[#DDDBCB]/20 dark:from-[#1B9AAA]/20 dark:to-[#121212]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#1B9AAA]/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
              
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#050505] dark:text-white mb-3 group-hover:text-[#1B9AAA] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#050505]/70 dark:text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="text-sm font-medium text-[#1B9AAA] mb-4">
                    {project.impact}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-[#1B9AAA]/10 text-[#1B9AAA] border-[#1B9AAA]/20 hover:bg-[#1B9AAA] hover:text-white transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button 
                    asChild
                    size="sm"
                    className="bg-[#1B9AAA] hover:bg-[#1B9AAA]/90 text-white flex-1 transition-all duration-200 hover:scale-105"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            className="border-[#1B9AAA] text-[#1B9AAA] hover:bg-[#1B9AAA] hover:text-white dark:border-[#1B9AAA] dark:text-[#1B9AAA] px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <a href="https://github.com/sabiqsabry" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;