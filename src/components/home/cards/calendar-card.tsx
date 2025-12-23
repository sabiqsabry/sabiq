"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"

export function CalendarCard() {
    return (
        <Card className="h-full flex flex-col hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors overflow-hidden group">
            <CardHeader className="pb-2">
                <Coffee className="w-10 h-10 mb-2 text-neutral-500" />
                <CardTitle>Buy me a coffee</CardTitle>
                <CardDescription>Support my work ☕</CardDescription>
            </CardHeader>

            <div className="flex-1 flex items-center justify-center p-4 bg-neutral-50/50 dark:bg-neutral-900/30 -mx-6 mb-0 mt-2">
                <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-6 opacity-60 group-hover:opacity-100 transition-opacity"
                >
                    <a
                        href="https://www.buymeacoffee.com/sabiqsabry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <Coffee className="w-4 h-4" />
                        Support
                    </a>
                </Button>
            </div>
        </Card>
    )
}
