"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { ProjectCard } from "@/components/work/project-card";
import { WorkSplitHero } from "@/components/work/work-split-hero";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { NovusianBrand } from "@/components/services/novusian-brand";
import { ClientProjectsGrid } from "@/components/services/client-projects-grid";
import { projects } from "@/components/work/projects-data";

const CLIENT_CASE_STUDY_COUNT = 4;

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
