"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { ProjectThumbnail } from "@/components/work/project-thumbnail"
import { memo, useEffect, useRef, useState } from "react"

interface ProjectCardProps {
    title: string
    category: string
    description: string
    icon?: LucideIcon
    index?: number
    href?: string
    priority?: boolean
}

export const ProjectCard = memo(function ProjectCard({ title, category, description, icon, index, href, priority = false }: ProjectCardProps) {
    const [isVisible, setIsVisible] = useState(priority)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (priority || !cardRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1, rootMargin: "50px" }
        )

        observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [priority])

    return (
        <div 
            ref={cardRef}
            className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <Card className="overflow-hidden group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors h-full flex flex-col">
                <ProjectThumbnail category={category} icon={icon} index={index} className="h-48 w-full flex-shrink-0" />

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">{category}</p>
                            <h3 className="text-xl font-bold leading-tight text-neutral-900 dark:text-neutral-50">{title}</h3>
                        </div>
                    </div>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-3 flex-grow">
                        {description}
                    </p>

                    <div className="flex items-center justify-end mt-auto">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
                            asChild
                        >
                            <Link href={href ?? "#"} target="_blank" rel="noreferrer">
                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
})
