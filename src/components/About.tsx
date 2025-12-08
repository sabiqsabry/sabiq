import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "MSc Artificial Intelligence",
      school: "Asia Pacific University (APU), Malaysia",
      period: "2024-2025",
      gpa: "GPA: 3.6"
    },
    {
      degree: "BSc (Hons) Computer Science (Upper Second Class)",
      school: "University of Westminster, UK",
      period: "2018 – 2023",
      gpa: "GPA: 3.6"
    }
  ];

  const awards = [
    {
      title: "SLIIT Datathon 2020",
      position: "3rd Place",
      description: "AI + Data Challenge representing UOW with innovative Covid Area Recognition app"
    },
    {
      title: "IIT Hackathon 2019",
      position: "Runner-up",
      description: "Frontend Web Development Contest using pure HTML/CSS/JS"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-[#F5F1E3] to-white dark:from-[#121212] dark:to-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] dark:text-white mb-6 tracking-tight">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-[#050505]/80 dark:text-white/80 leading-relaxed">
              <p>
                I'm an AI Engineer passionate about building intelligent systems that solve real-world problems. 
                I specialize in developing machine learning models, neural networks, and AI-powered applications 
                that transform data into actionable insights and automated solutions.
              </p>
              <p>
                Currently pursuing my Master's in Artificial Intelligence while working on cutting-edge projects 
                that blend deep learning, computer vision, and natural language processing. I enjoy creating 
                AI solutions that make complex tasks effortless and accessible to everyone.
              </p>
              <p>
                Based between Malaysia and Sri Lanka, I'm open to hybrid and remote opportunities where I can 
                contribute to meaningful AI projects and continue advancing the field of artificial intelligence.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B9AAA]/20 to-[#DDDBCB]/20 dark:from-[#1B9AAA]/30 dark:to-white/5 rounded-3xl blur-2xl"></div>
              <img 
                src="/assets/sabiq-profile.jpg" 
                alt="Sabiq Sabry" 
                className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#050505] dark:text-white mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="border-none bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-semibold text-[#050505] dark:text-white">{edu.degree}</h4>
                    {edu.status && (
                      <Badge className="bg-[#1B9AAA] text-white">{edu.status}</Badge>
                    )}
                  </div>
                  <p className="text-[#1B9AAA] font-medium mb-2">{edu.school}</p>
                  <p className="text-[#050505]/60 dark:text-white/60">{edu.period}</p>
                  {edu.gpa && <p className="text-[#050505]/60 dark:text-white/60">{edu.gpa}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#050505] dark:text-white mb-8 text-center">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="border-none bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{index === 0 ? '🥉' : '🥈'}</span>
                    <div>
                      <h4 className="text-xl font-semibold text-[#050505] dark:text-white">{award.title}</h4>
                      <p className="text-[#1B9AAA] font-medium">{award.position}</p>
                    </div>
                  </div>
                  <p className="text-[#050505]/70 dark:text-white/70">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;