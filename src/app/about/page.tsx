import { CtaSection } from "@/components/cta-section";

const skills = {
    Languages: ["Python", "TypeScript", "C++", "Java", "SQL", "JavaScript", "MATLAB"],
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Deep Learning", "Computer Vision", "Sensor Fusion"],
    Robotics: ["ROS", "Robot Studio", "RAPID", "Robot Navigation", "Path Planning", "Motion Control"],
    Frameworks: ["Django", "Flask", "Node.js", "Firebase", "MongoDB", "MySQL", "AWS", "Azure"],
    "Front End": ["Flutter", "React", "React Native", "SwiftUI"],
};

const experience = [
    { role: "Senior Web Developer", company: "Tactik AU", period: "May 2021 – Dec 2022" },
    { role: "Web Developer", company: "Cursor", period: "Nov 2021 – Jan 2022" },
    { role: "Web Developer", company: "Nonversal", period: "Sep 2020 – Jan 2022" },
    { role: "Senior Web Developer", company: "the Radiant", period: "Jan 2021 – May 2021" },
    { role: "Junior Web Developer", company: "UNIQ Solutions", period: "Aug 2020 – Oct 2020" },
    { role: "Teaching Assistant", company: "Kent Institute", period: "May 2017 – Dec 2021" },
];

const education = [
    { degree: "MSc Artificial Intelligence", school: "Asia Pacific University, Malaysia", period: "2024-2025", details: "GPA: 3.6" },
    { degree: "BSc (Hons) Computer Science", school: "University of Westminster, UK", period: "2018-2023", details: "Upper Second Class" },
];

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 pb-20 pt-10">

            {/* Bio Section */}
            <section className="space-y-8 mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50">Sabiq Sabry</h1>
                <p className="text-xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    An AI Engineer and full-stack developer who enjoys building intelligent systems that solve real-world problems.
                </p>

                <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <p>
                        Hi! I'm Sabiq Sabry, an AI Engineer based between Malaysia and Sri Lanka. Welcome to my corner of the Internet, where I showcase my work, projects, and the many things I'm exploring in AI and software development.
                    </p>
                    <p>
                        I love working in the realm between machine learning and practical applications. Some things that excite me most are deep learning, computer vision, NLP, and building systems that transform data into actionable intelligence.
                    </p>
                    <p>
                        I believe that building and sharing projects is the best way to solidify knowledge and contribute to the community.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">Skills</h2>
                <div className="space-y-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm text-neutral-700 dark:text-neutral-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">Experience</h2>
                <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-10">
                    {experience.map((item, idx) => (
                        <div key={idx} className="pl-8 relative">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">{item.role}</h3>
                            <p className="text-neutral-800 dark:text-neutral-200">{item.company}</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{item.period}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">Education</h2>
                <div className="space-y-8">
                    {education.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-4 gap-y-1">
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">{item.degree}</h3>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.period}</p>
                            </div>
                            <div>
                                <p className="text-neutral-700 dark:text-neutral-300">{item.school}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CtaSection />
        </div>
    );
}
