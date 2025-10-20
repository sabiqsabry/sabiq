import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tactik AU",
      type: "Full-Time",
      duration: "May 2021 – Dec 2022 · 1 yr 8 mos",
      location: "Colombo, Sri Lanka",
      achievements: [
        "Designed user-friendly interfaces via UX research & iterative testing",
        "Built 15+ custom websites with React + Firebase → 30% increase in visibility, 20% lead growth"
      ],
      stack: ["React.js", "AWS", "Git", "CSS", "WordPress", "JavaScript", "Firebase"]
    },
    {
      title: "Web Developer",
      company: "Cursor",
      type: "Contract",
      duration: "Nov 2021 – Jan 2022 · 3 mos",
      location: "Colombo, Sri Lanka",
      achievements: [
        "Delivered interfaces for multiple startups using agile sprint cycles",
        "Prioritized UX + communication → 95% client satisfaction"
      ],
      stack: ["React.js", "AWS", "Git", "CSS", "JavaScript", "Firebase"]
    },
    {
      title: "Web Developer",
      company: "Nonversal",
      type: "Freelance",
      duration: "Sep 2020 – Jan 2022 · 1 yr 5 mos",
      location: "Sri Lanka",
      achievements: [
        "Utilized React + Firebase for modern startup sites → 65% traffic increase in month one",
        "Built instant e-commerce sites on WordPress → 75% sales boost within two weeks"
      ],
      stack: ["React.js", "AWS", "Git", "CSS", "WordPress", "JavaScript", "React Native"]
    },
    {
      title: "Teaching Assistant",
      company: "Kent Institute",
      type: "Part-Time",
      duration: "May 2017 – Dec 2021 · 4 yrs 8 mos",
      location: "Hybrid, Sri Lanka",
      achievements: [
        "Taught 40+ GCSE students (Computer Science & Mathematics)",
        "Developed custom lessons + interactive examples → boosted comprehension by 30%"
      ],
      stack: ["Curriculum Design", "Student Mentorship", "STEM Education"]
    },
    {
      title: "Senior Web Developer",
      company: "the Radiant",
      type: "Full-Time",
      duration: "Jan 2021 – May 2021 · 5 mos",
      location: "Sri Lanka",
      achievements: [
        "Built hybrid AWS/on-prem infra → 30% reduction in downtime, saved LKR 50,000 yearly",
        "Automated forms via Python → 80% less manual entry, 100+ hours saved/month"
      ],
      stack: ["React.js", "AWS", "Git", "Python", "CSS", "JavaScript"]
    },
    {
      title: "Junior Web Developer",
      company: "UNIQ Solutions",
      type: "Full-Time",
      duration: "Aug 2020 – Oct 2020 · 3 mos",
      location: "Sri Lanka",
      achievements: [
        "Built RESTful APIs for car booking → 30% faster reservation processing",
        "Created IoT employee tracker → reduced manual logging by 80%"
      ],
      stack: ["React.js", "AWS", "Git", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-[#F5F1E3]/30 dark:bg-[#121212]/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050505] dark:text-white mb-4 tracking-tight">
            Career Journey
          </h2>
          <p className="text-xl text-[#050505]/70 dark:text-white/70 max-w-2xl mx-auto">
            My professional growth from junior developer to senior roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#DDDBCB] dark:bg-[#1B9AAA]/30 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#1B9AAA] rounded-full border-4 border-white dark:border-[#050505] transform md:-translate-x-1/2 z-10 hover:scale-125 transition-transform duration-200"></div>

                {/* Content Card */}
                <Card 
                  className={`group hover:shadow-xl transition-all duration-300 border-none bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm hover:scale-105 w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h3 className="text-xl font-bold text-[#050505] dark:text-white group-hover:text-[#1B9AAA] transition-colors">
                          {exp.title}
                        </h3>
                        <Badge variant="secondary" className="w-fit bg-[#1B9AAA]/10 text-[#1B9AAA] border-[#1B9AAA]/20">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="text-lg font-semibold text-[#1B9AAA]">
                        {exp.company}
                      </div>
                      
                      <div className="text-[#050505]/60 dark:text-white/60 text-sm">
                        📅 {exp.duration} · 📍 {exp.location}
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#050505]/80 dark:text-white/80 text-sm">
                            <span className="text-[#1B9AAA] mt-1 text-xs">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.stack.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="bg-[#DDDBCB]/30 dark:bg-white/5 text-[#050505] dark:text-white border-[#DDDBCB] dark:border-white/10 hover:bg-[#1B9AAA] hover:text-white transition-colors text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;