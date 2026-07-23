"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { ProjectCard } from "@/components/work/project-card";
import { WorkSplitHero } from "@/components/work/work-split-hero";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { NovusianBrand } from "@/components/services/novusian-brand";
import { ClientProjectsGrid } from "@/components/services/client-projects-grid";

const CLIENT_CASE_STUDY_COUNT = 3;

const projects = [
    {
        title: "Carbon Compass",
        category: "AI & ML",
        description: "AI-powered sustainability report analyser and emissions calculator. Fact-checks corporate climate claims using NLP. Python, React, FastAPI.",
        color: "bg-teal-700",
        image: "/assets/carbon-compass.png",
        href: "https://github.com/sabiqsabry/Carbon-Compass",
    },
    {
        title: "Spa Ceylon AI Assistant",
        category: "AI & ML",
        description: "Claude-powered WhatsApp-style chatbot with ritual knowledge and Dosha quiz. Node.js, React, Claude AI.",
        color: "bg-emerald-700",
        image: "/assets/spa-ceylon-bot.png",
        href: "https://github.com/sabiqsabry/spa-ceylon-bot",
    },
    {
        title: "Gedara Rent",
        category: "Web App",
        description: "Full-stack rental marketplace with booking system and dashboards. Next.js 14, Stripe, Prisma.",
        color: "bg-orange-600",
        image: "/assets/gedara-rent.png",
        href: "https://github.com/sabiqsabry/gedara-rent",
    },
    {
        title: "Pash - Finance Tracker",
        category: "Web App",
        description: "AI-powered expense splitting and tracking with natural language input. Next.js, Gemini AI.",
        color: "bg-violet-600",
        image: "/assets/pash.png",
        href: "https://github.com/sabiqsabry/Pash",
    },
    {
        title: "Inventory Manager",
        category: "Web App",
        description: "Manufacturing inventory system with production tracking and analytics. React, TypeScript.",
        color: "bg-slate-700",
        image: "/assets/inventory-manager.png",
        href: "https://github.com/sabiqsabry/inventory-manager",
    },
    {
        title: "AlphabetBot",
        category: "Robotics",
        description: "Industrial robot programming to draw the alphabet using RAPID. ABB RobotStudio.",
        color: "bg-gray-800",
        image: "/assets/alphabet-bot.png",
        href: "https://github.com/sabiqsabry/AlphabetBot",
    },
    {
        title: "Twitter Sentiment Analysis",
        category: "AI & ML",
        description: "Comparative study of BiLSTM vs DistilBERT for sentiment classification. PyTorch, Transformers.",
        color: "bg-sky-600",
        image: "/assets/twitter-sentiment.png",
        href: "https://github.com/sabiqsabry/Twitter-Sentiment-Bilstm-Distilbert",
    },
    {
        title: "Multimodal Pneumonia Diagnosis",
        category: "AI & ML",
        description: "Deep learning framework combining chest X-rays with medical records. 99.63% accuracy. Python, PyTorch.",
        color: "bg-blue-600",
        image: "/assets/pneumonia-diagnosis.png",
        href: "https://github.com/sabiqsabry/Multimodal-Pneumonia-Diagnosis",
    },
    {
        title: "ONCO - AI Cancer Diagnosis",
        category: "AI & ML",
        description: "AI-based cancer diagnosis platform using deep learning for medical prognosis. TensorFlow, Flask, Azure.",
        color: "bg-rose-600",
        image: "/assets/onco.png",
        href: "https://github.com/Ammar-Raneez/ONCO",
    },
    {
        title: "Text Classification System",
        category: "AI & ML",
        description: "NLP sentiment analysis and spam detection with Streamlit interface. Scikit-learn.",
        color: "bg-indigo-600",
        image: "/assets/text-classification.png",
        href: "https://github.com/sabiqsabry/Text-Classification-System",
    },
    {
        title: "BAWT - Behavior Analysis",
        category: "AI & ML",
        description: "NLP model analyzing chat behavior and communication patterns.",
        color: "bg-amber-600",
        image: "/assets/bawt.png",
        href: "https://github.com/sabiqsabry/bawt",
    },
    {
        title: "Private Ad-Block Extension",
        category: "Browser Extension",
        description: "Privacy-focused cross-browser ad-blocking with DNR. TypeScript.",
        color: "bg-emerald-600",
        image: "/assets/ad-block.png",
        href: "https://github.com/sabiqsabry/Private-Adblock-Extension",
    },
    {
        title: "Hisaab - Expense Sharing",
        category: "Web App",
        description: "Expense-sharing app with multi-currency support and PWA. React, TypeScript.",
        color: "bg-cyan-600",
        image: "/assets/hisaab.png",
        href: "https://github.com/sabiqsabry/Hisab",
    },
    {
        title: "Cling - Task Management",
        category: "Desktop App",
        description: "Cross-platform desktop task app built with Tauri. React, Rust.",
        color: "bg-purple-600",
        image: "/assets/cling.png",
        href: "https://github.com/sabiqsabry/Cling",
    },
    {
        title: "InstaSplash",
        category: "Mobile App",
        description: "Instagram clone with Unsplash API integration. Flutter, Dart.",
        color: "bg-pink-600",
        image: "/assets/instasplash.png",
        href: "https://github.com/sabiqsabry/Instagram-Clone",
    },
    {
        title: "TikTok Clone",
        category: "Mobile App",
        description: "Vertical video feed with autoplay and social features. Flutter.",
        color: "bg-black",
        image: "/assets/tiktok-clone.png",
        href: "https://github.com/sabiqsabry/TikTok-Clone",
    },
    {
        title: "WhatsApp Clone",
        category: "Mobile App",
        description: "Real-time chat with Socket.io. Flutter, Firebase.",
        color: "bg-green-600",
        image: "/assets/whatsapp-clone.png",
        href: "https://github.com/sabiqsabry/Whatsapp-Clone",
    },
    {
        title: "Uber Clone",
        category: "Mobile App",
        description: "Ride-hailing app with GPS tracking. Flutter, Maps API.",
        color: "bg-zinc-800",
        image: "/assets/uber-clone.png",
        href: "https://github.com/sabiqsabry/Uber-Clone",
    },
    {
        title: "Budget Buddy",
        category: "Mobile App",
        description: "Personal finance tracker with real-time sync. Flutter, Firebase.",
        color: "bg-lime-600",
        image: "/assets/budget-buddy.png",
        href: "https://github.com/sabiqsabry/Budget-Buddy",
    },
    {
        title: "Weather & AQI Tracker",
        category: "Mobile App",
        description: "Native iOS weather app. Swift, iOS.",
        color: "bg-blue-400",
        image: "/assets/weather-aqi.png",
        href: "https://github.com/sabiqsabry/WeatherAirQuality",
    },
    {
        title: "Habit Ease",
        category: "Mobile App",
        description: "Daily habit tracker with streak counting. Flutter, Hive.",
        color: "bg-orange-500",
        image: "/assets/habit-ease.png",
        href: "https://github.com/sabiqsabry/habit-tracker",
    },
];

export default function WorkPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const scrollToSection = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash === "personal-work" || hash === "client-work") {
            requestAnimationFrame(() => scrollToSection(hash));
        }
    }, [scrollToSection]);

    // Get unique categories
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
        return ["All", ...uniqueCategories.sort()];
    }, []);

    // Filter projects based on selected category
    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") {
            return projects;
        }
        return projects.filter(project => project.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="max-w-7xl mx-auto px-6 pb-20">
            <WorkSplitHero
                personalCount={projects.length}
                clientCount={CLIENT_CASE_STUDY_COUNT}
                onPersonalClick={() => scrollToSection("personal-work")}
                onClientClick={() => scrollToSection("client-work")}
            />

            <section
                id="personal-work"
                className="scroll-mt-28 pt-8 md:pt-12 border-t border-neutral-200 dark:border-neutral-800"
            >
                <div className="mb-10 md:mb-12 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                        Personal
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                        Personal projects
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
                        A collection of projects exploring AI, web, and mobile development.
                    </p>
                </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className="rounded-full px-6"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
                {filteredProjects.map((project, idx) => (
                    <ProjectCard 
                        key={project.href || project.title} 
                        {...project} 
                        priority={idx < 6}
                    />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-neutral-500 dark:text-neutral-400">
                        No projects found in this category.
                    </p>
                </div>
            )}
            </section>

            <section
                id="client-work"
                className="scroll-mt-28 mt-20 md:mt-28 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
            >
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
                    <header className="space-y-4 w-full pb-12 md:pb-16">
                        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                            Client · Novusian
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Client work
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-2xl">
                            Deep dives into commercial projects - premium UI and full-stack delivery.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
                            I&apos;ve delivered much more client work than what&apos;s shown here. These case studies are projects where the client has agreed to let me showcase them on my portfolio.
                        </p>
                    </header>

                    <div className="w-full pt-12 md:pt-16">
                        <NovusianBrand embedded />
                    </div>

                    <div className="w-full pt-12 md:pt-16">
                        <ClientProjectsGrid showHeader={false} />
                    </div>
                </div>
            </section>

            <CtaSection />
        </div>
    );
}
