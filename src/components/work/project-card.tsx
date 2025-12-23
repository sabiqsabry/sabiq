"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
    title: string
    category: string
    description: string
    color: string
    image?: string
    href?: string
}

export function ProjectCard({ title, category, description, color, image, href }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="break-inside-avoid mb-6"
        >
            <Card className="overflow-hidden group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                {/* Thumbnail */}
                <div className={`h-48 w-full ${color} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-4xl font-bold uppercase tracking-widest">
                            {category.split(" ")[0]}
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">{category}</p>
                            <h3 className="text-xl font-bold leading-tight text-neutral-900 dark:text-neutral-50">{title}</h3>
                        </div>
                    </div>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-3">
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
        </motion.div>
    )
}
