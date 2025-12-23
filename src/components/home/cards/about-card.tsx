"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, User } from "lucide-react"

export function AboutCard() {
    return (
        <Card className="h-full flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <CardHeader className="pb-4">
                <User className="w-10 h-10 mb-2 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
                <CardTitle className="text-lg">Sabiq Sabry</CardTitle>
                <CardDescription className="text-sm">My story & my skills.</CardDescription>
            </CardHeader>
            <CardContent className="pb-6 pt-0">
                <Link 
                    href="/about"
                    className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
                >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </CardContent>
        </Card>
    )
}
