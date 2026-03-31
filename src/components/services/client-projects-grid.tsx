"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LighthouseCard } from "@/components/services/lighthouse-card";
import { ClinicalFlowCard } from "@/components/services/clinical-flow-card";

const projects = [
    {
        id: "lighthouse",
        title: "The Lighthouse",
        category: "Web & UI/UX",
        description: "A premium digital platform showcasing a legacy of massive historical events and international concerts.",
        logo: "/projects/lighthouse/logo-white.jpg",
        image: "/projects/lighthouse/logo-white.jpg",
    },
    {
        id: "clinical-flow",
        title: "Clinical Flow",
        category: "Healthcare App",
        description: "A full-stack workflow management system digitizing the entire patient journey for CSEM.",
        logo: "/projects/clinical-flow/logo.png",
        image: "/projects/clinical-flow/logo.png",
    }
];

export function ClientProjectsGrid() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [selectedProject]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedProject(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                     <h3 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">Featured Client Work</h3>
                     <p className="text-neutral-500 dark:text-neutral-400">Deep dives into recent commercial projects.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="group cursor-pointer border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-950 transition-all hover:shadow-xl hover:-translate-y-1 block h-full flex flex-col"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <div className="relative h-56 w-full bg-black overflow-hidden group-hover:opacity-90 transition-opacity p-8">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain p-8"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent flex flex-col justify-end p-6">
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">{project.category}</p>
                                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{project.title}</h4>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-3 flex-grow">{project.description}</p>
                                <div className="mt-auto flex items-center justify-between text-sm font-medium text-neutral-900 dark:text-white group-hover:underline">
                                    View Full Case Study <ArrowRight size={16} className="text-current group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-neutral-950/40 dark:bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div 
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-7xl max-h-[90vh] bg-white dark:bg-neutral-950 rounded-3xl overflow-y-auto shadow-2xl border border-neutral-200 dark:border-neutral-800 scrollbar-hide"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-50 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                            
                            {/* Render the specific project card detail based on ID */}
                            {selectedProject === "lighthouse" && <LighthouseCard />}
                            {selectedProject === "clinical-flow" && <ClinicalFlowCard />}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
