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
        <Card className="h-full flex flex-col justify-between overflow-hidden group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="p-6 pb-0">
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

            {/* Marquee Container */}
            <div className="flex-1 flex items-center relative min-h-[160px] bg-neutral-50 dark:bg-neutral-900/50 py-4">
                {/* Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-900 dark:to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-900 dark:to-transparent z-10" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-4 px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ width: "fit-content" }}
                    >
                        {[...projects, ...projects].map((project, idx) => (
                            <div
                                key={`${project.id}-${idx}`}
                                className="w-48 h-32 md:w-56 md:h-36 rounded-xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 flex-shrink-0 flex flex-col"
                            >
                                {/* Thumbnail */}
                                <div className={`h-2/3 w-full ${project.color} opacity-80 relative overflow-hidden`}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 192px, 224px"
                                        />
                                    ) : null}
                                </div>
                                <div className="p-2 flex-1 flex flex-col justify-center">
                                    <p className="font-semibold text-xs truncate">{project.title}</p>
                                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400">{project.type}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Card>
    )
}
