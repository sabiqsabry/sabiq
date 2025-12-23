"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"

export function CalendarCard() {
    return (
        <Card className="h-full flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <CardHeader className="pb-4">
                <Coffee className="w-10 h-10 mb-2 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
                <CardTitle className="text-lg">Buy me a coffee</CardTitle>
                <CardDescription className="text-sm">Support my work ☕</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
                <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                    <a
                        href="https://www.buymeacoffee.com/sabiqsabry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm"
                    >
                        <Coffee className="w-4 h-4 text-neutral-600 dark:text-neutral-400" strokeWidth={1.5} />
                        Support
                    </a>
                </Button>
            </div>
        </Card>
    )
}
