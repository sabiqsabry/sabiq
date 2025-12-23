"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { LucideIcon, Check } from "lucide-react"

interface ServiceCardProps {
    title: string
    description: string
    Icon: LucideIcon
    items: string[]
    tags: string[]
}

export function ServiceCard({ title, description, Icon, items, tags }: ServiceCardProps) {
    return (
        <Card className="h-full flex flex-col hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <CardHeader>
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-neutral-900 dark:text-white" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-base mt-2">{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                <ul className="space-y-2">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                            <Check className="w-4 h-4 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="bg-neutral-100 dark:bg-neutral-800 text-xs font-medium px-2 py-1 rounded-md text-neutral-600 dark:text-neutral-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
