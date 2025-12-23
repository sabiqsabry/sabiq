"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, User } from "lucide-react"

export function AboutCard() {
    return (
        <Card className="h-full flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <CardHeader>
                <User className="w-10 h-10 mb-2 text-neutral-500" />
                <CardTitle>Sabiq Sabry</CardTitle>
                <CardDescription>My story & my skills.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="ghost" className="w-full justify-between group p-0 hover:bg-transparent hover:text-neutral-900 dark:hover:text-white" asChild>
                    <Link href="/about">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
