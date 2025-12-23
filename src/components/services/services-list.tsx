"use client"

import { ServiceCard } from "@/components/services/service-card";
import { Brain, Code, Smartphone } from "lucide-react";

const services = [
    {
        title: "AI & Machine Learning",
        description: "Development of intelligent systems using deep learning, computer vision, and NLP. From concept to deployment.",
        Icon: Brain,
        items: [
            "Model Development & Training",
            "Computer Vision Solutions",
            "Natural Language Processing",
            "MLOps & Deployment",
        ],
        tags: ["Python", "PyTorch", "TensorFlow"],
    },
    {
        title: "Web Development",
        description: "Development of modern, fast and responsive web applications using the latest technologies. Focus on performance and user experience.",
        Icon: Code,
        items: [
            "Full-Stack Development",
            "API Design & Integration",
            "Database Architecture",
            "Cloud Deployment",
        ],
        tags: ["React", "Django", "Node.js"],
    },
    {
        title: "Mobile Development",
        description: "Cross-platform mobile applications that deliver native-like experiences on iOS and Android.",
        Icon: Smartphone,
        items: [
            "Cross-Platform Apps",
            "Native iOS Development",
            "Real-time Features",
            "Offline-First Design",
        ],
        tags: ["Flutter", "Swift", "Firebase"],
    },
];

export function ServicesList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
            {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
            ))}
        </div>
    );
}

