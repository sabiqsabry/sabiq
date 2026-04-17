"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee } from "lucide-react"

const BMC_URL = "https://www.buymeacoffee.com/sabiqsabry"

export function CalendarCard() {
    return (
        <a
            href={BMC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
            aria-label="Buy me a coffee — opens Buy Me a Coffee in a new tab"
        >
            <Card className="h-full flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <CardHeader className="pb-6">
                    <Coffee
                        className="w-10 h-10 mb-2 text-neutral-500 dark:text-neutral-400"
                        strokeWidth={1.5}
                    />
                    <CardTitle className="text-lg">Buy me a coffee</CardTitle>
                    <CardDescription className="text-sm">
                        Tap anywhere on this card to tip
                    </CardDescription>
                </CardHeader>
            </Card>
        </a>
    )
}
