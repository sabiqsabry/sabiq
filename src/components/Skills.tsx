import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillGroups = {
    "Languages": [
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "Java", icon: "☕" },
      { name: "PHP", icon: "🐘" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "SQL", icon: "💾" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ],
    "Frontend": [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "SwiftUI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ],
    "Backend": [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    "Tools": [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Cursor", icon: "💻" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Supabase", icon: "⚡" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ],
    "Soft Skills": [
      { name: "Leadership", icon: "👑" },
      { name: "Mentorship", icon: "🤝" },
      { name: "Teamwork", icon: "👥" },
      { name: "Problem Solving", icon: "🧠" },
      { name: "Time Management", icon: "⏱️" }
    ]
  };

  const SkillIcon = ({ icon, name }: { icon: string; name: string }) => {
    if (icon.startsWith('http')) {
      return <img src={icon} alt="" className="w-5 h-5 flex-shrink-0" />;
    }
    return <span className="text-lg flex-shrink-0">{icon}</span>;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-[#F5F1E3] dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050505] dark:text-white mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-xl text-[#050505]/70 dark:text-white/70 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <Card key={category} className="border-none bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1B9AAA] mb-6 text-center">{category}</h3>
                <div className="space-y-3">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#DDDBCB]/20 dark:bg-white/5 hover:bg-[#1B9AAA]/10 dark:hover:bg-[#1B9AAA]/20 transition-all duration-200 hover:scale-105 group"
                    >
                      <SkillIcon icon={skill.icon} name={skill.name} />
                      <span className="text-sm font-medium text-[#050505] dark:text-white group-hover:text-[#1B9AAA] transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;