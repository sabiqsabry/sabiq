"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"

export function CalendarCard() {
    return (
        <Card className="relative h-full flex flex-col justify-between overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div
                className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#FF813F]/[0.12] blur-2xl dark:bg-[#FF813F]/[0.18]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FF813F]/25 to-transparent"
                aria-hidden
            />
            <CardHeader className="relative pb-3">
                <Coffee
                    className="mb-2 h-10 w-10 text-[#FF813F]/90 dark:text-[#FF813F]/80"
                    strokeWidth={1.5}
                />
                <CardTitle className="text-lg">Buy me a coffee</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Thank you for supporting — tip in a tap, or use the button on the screen.
                </CardDescription>
            </CardHeader>
            <div className="relative px-6 pb-6">
                <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-neutral-200 bg-white hover:border-[#FF813F]/45 hover:bg-[#FF813F]/[0.06] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-[#FF813F]/40 dark:hover:bg-[#FF813F]/[0.08]"
                >
                    <a
                        href="https://www.buymeacoffee.com/sabiqsabry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-100"
                    >
                        <Coffee className="h-4 w-4 text-[#FF813F]" strokeWidth={1.5} />
                        Support on Buy Me a Coffee
                    </a>
                </Button>
            </div>
        </Card>
    )
}
