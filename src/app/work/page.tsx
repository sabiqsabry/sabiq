"use client"

import { useState, useMemo } from "react"
import { ProjectCard } from "@/components/work/project-card";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Multimodal Pneumonia Diagnosis",
        date: "Nov 2024",
        category: "AI & ML",
        description: "Deep learning framework combining chest X-rays with medical records. 99.63% accuracy. Python, PyTorch.",
        color: "bg-blue-600",
        image: "/assets/pneumonia-diagnosis.png",
    },
    {
        title: "ONCO - AI Cancer Diagnosis",
        date: "2024",
        category: "AI & ML",
        description: "AI-based cancer diagnosis platform using deep learning for medical prognosis. TensorFlow, Flask, Azure.",
        color: "bg-rose-600",
        image: "/assets/onco.png",
    },
    {
        title: "Text Classification System",
        date: "2024",
        category: "AI & ML",
        description: "NLP sentiment analysis and spam detection with Streamlit interface. Scikit-learn.",
        color: "bg-indigo-600",
        image: "/assets/text-classification.png",
    },
    {
        title: "BAWT - Behavior Analysis",
        date: "2024",
        category: "AI & ML",
        description: "NLP model analyzing chat behavior and communication patterns.",
        color: "bg-amber-600",
        image: "/assets/bawt.png",
    },
    {
        title: "Private Ad-Block Extension",
        date: "2024",
        category: "Browser Extension",
        description: "Privacy-focused cross-browser ad-blocking with DNR. TypeScript.",
        color: "bg-emerald-600",
        image: "/assets/ad-block.png",
    },
    {
        title: "Hisaab - Expense Sharing",
        date: "2024",
        category: "Web App",
        description: "Expense-sharing app with multi-currency support and PWA. React, TypeScript.",
        color: "bg-cyan-600",
        image: "/assets/hisaab.png",
    },
    {
        title: "Cling - Task Management",
        date: "2024",
        category: "Desktop App",
        description: "Cross-platform desktop task app built with Tauri. React, Rust.",
        color: "bg-purple-600",
        image: "/assets/cling.png",
    },
    {
        title: "InstaSplash",
        date: "2023",
        category: "Mobile App",
        description: "Instagram clone with Unsplash API integration. Flutter, Dart.",
        color: "bg-pink-600",
        image: "/assets/instasplash.png",
    },
    {
        title: "TikTok Clone",
        date: "2023",
        category: "Mobile App",
        description: "Vertical video feed with autoplay and social features. Flutter.",
        color: "bg-black",
        image: "/assets/tiktok-clone.png",
    },
    {
        title: "WhatsApp Clone",
        date: "2023",
        category: "Mobile App",
        description: "Real-time chat with Socket.io. Flutter, Firebase.",
        color: "bg-green-600",
        image: "/assets/whatsapp-clone.png",
    },
    {
        title: "Uber Clone",
        date: "2023",
        category: "Mobile App",
        description: "Ride-hailing app with GPS tracking. Flutter, Maps API.",
        color: "bg-zinc-800",
        image: "/assets/uber-clone.png",
    },
    {
        title: "Budget Buddy",
        date: "2023",
        category: "Mobile App",
        description: "Personal finance tracker with real-time sync. Flutter, Firebase.",
        color: "bg-lime-600",
        image: "/assets/budget-buddy.png",
    },
    {
        title: "Weather & AQI Tracker",
        date: "2023",
        category: "Mobile App",
        description: "Native iOS weather app. Swift, iOS.",
        color: "bg-blue-400",
        image: "/assets/weather-aqi.png",
    },
    {
        title: "Habit Ease",
        date: "2023",
        category: "Mobile App",
        description: "Daily habit tracker with streak counting. Flutter, Hive.",
        color: "bg-orange-500",
        image: "/assets/habit-ease.png",
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
                <h1 className="text-4xl md:text-5xl font-serif font-bold">Selected Work</h1>
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

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12 mb-12">
                {filteredProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
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
