"use client"

import { useState, useMemo } from "react"
import { ProjectCard } from "@/components/work/project-card";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";

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
            <div className="py-12 md:py-20 text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50">Selected Work</h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                    A collection of projects exploring AI, web, and mobile development.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mt-8 mb-8">
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

            <CtaSection />
        </div>
    );
}
