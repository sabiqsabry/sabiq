"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export function AwardsCard() {
    return (
        <Card className="h-full flex flex-col justify-center hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <CardContent className="p-6 pb-6 space-y-4">
                <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full shrink-0">
                        <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" strokeWidth={1.5} fill="currentColor" />
                    </div>
                    <div>
                        <p className="font-medium text-sm leading-tight text-neutral-900 dark:text-neutral-50">3rd Place</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">SLIIT Datathon 2020</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full shrink-0">
                        <Trophy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="font-medium text-sm leading-tight text-neutral-900 dark:text-neutral-50">Runner-Up</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">IIT Hackathon 2019</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
