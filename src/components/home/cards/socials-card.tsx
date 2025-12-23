"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Github, ArrowUpRight } from "lucide-react"

export function SocialsCard() {
    return (
        <Link href="https://github.com/sabiqsabry" target="_blank" className="block h-full">
            <Card className="h-full flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-neutral-400" />
                </div>
                <CardHeader>
                    <Github className="w-10 h-10 mb-2 text-neutral-900 dark:text-white" />
                    <CardTitle>GitHub</CardTitle>
                    <CardDescription>View my open source projects and contributions.</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}
