"use client"

import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Featured projects data
const projects = [
    { id: 1, title: "Multimodal Pneumonia Diagnosis", type: "AI Healthcare", color: "bg-blue-500", image: "/assets/pneumonia-diagnosis.png" },
    { id: 2, title: "ONCO - AI Cancer Diagnosis", type: "AI Healthcare", color: "bg-rose-500", image: "/assets/onco.png" },
    { id: 3, title: "Text Classification System", type: "NLP", color: "bg-indigo-500", image: "/assets/text-classification.png" },
]

export function FeaturedProjectsCard() {
    return (
        <Card className="h-full flex flex-col overflow-hidden group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <CardTitle>Featured Work</CardTitle>
                        <CardDescription>AI & ML Projects</CardDescription>
                    </div>
                    <Link href="/work" className="text-sm border border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1">
                        View All <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>

            {/* Projects Container - Animation with hidden scrollbar */}
            <div className="flex-1 flex items-center relative bg-neutral-50 dark:bg-neutral-900/50 p-4 overflow-hidden">
                {/* Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-900 dark:to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-900 dark:to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <motion.div
                        className="flex gap-4 px-2"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ width: "fit-content" }}
                    >
                        {[...projects, ...projects].map((project, idx) => (
                            <div
                                key={`${project.id}-${idx}`}
                                className="w-72 h-48 md:w-80 md:h-52 lg:w-96 lg:h-56 rounded-xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 flex-shrink-0 flex flex-col group/item hover:scale-[1.02] transition-transform"
                            >
                                {/* Thumbnail */}
                                <div className={`h-3/4 w-full ${project.color} opacity-90 relative overflow-hidden`}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover/item:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                        />
                                    ) : null}
                                </div>
                                <div className="p-3 flex-1 flex flex-col justify-center bg-white dark:bg-neutral-800">
                                    <p className="font-semibold text-sm truncate">{project.title}</p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{project.type}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Card>
    )
}
