"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Github, ArrowUpRight } from "lucide-react"

export function SocialsCard() {
    return (
        <Link href="https://github.com/sabiqsabry" target="_blank" className="block h-full">
            <Card className="h-full flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <CardHeader className="pb-6">
                    <Github className="w-10 h-10 mb-2 text-neutral-900 dark:text-white" strokeWidth={1.5} />
                    <CardTitle className="text-lg">GitHub</CardTitle>
                    <CardDescription className="text-sm">View my open source projects and contributions.</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}
