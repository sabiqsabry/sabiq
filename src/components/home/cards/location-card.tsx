"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"

export function LocationCard() {
    return (
        <Card className="h-full relative overflow-hidden flex flex-col justify-end p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group">

            {/* 3D Dotted Globe Effect */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="relative w-48 h-48 md:w-64 md:h-64"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Dotted Globe Pattern */}
                        <svg
                            viewBox="0 0 200 200"
                            className="w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Latitude lines */}
                            <circle cx="100" cy="50" r="2" fill="currentColor" opacity="0.4" />
                            <circle cx="100" cy="70" r="2" fill="currentColor" opacity="0.5" />
                            <circle cx="100" cy="90" r="2" fill="currentColor" opacity="0.6" />
                            <circle cx="100" cy="110" r="2" fill="currentColor" opacity="0.7" />
                            <circle cx="100" cy="130" r="2" fill="currentColor" opacity="0.6" />
                            <circle cx="100" cy="150" r="2" fill="currentColor" opacity="0.5" />
                            
                            {/* Longitude lines with perspective */}
                            {[20, 40, 60, 80, 120, 140, 160, 180].map((x) => (
                                <circle key={x} cx={x} cy={100} r="1.5" fill="currentColor" opacity="0.3" />
                            ))}
                            
                            {/* Additional dots for 3D effect */}
                            {[30, 50, 70, 90, 110, 130, 150, 170].map((x) => (
                                <circle key={x} cx={x} cy={60} r="1" fill="currentColor" opacity="0.2" />
                            ))}
                            {[30, 50, 70, 90, 110, 130, 150, 170].map((x) => (
                                <circle key={x} cx={x} cy={140} r="1" fill="currentColor" opacity="0.2" />
                            ))}
                            
                            {/* Highlight dots for Malaysia & Sri Lanka region */}
                            <circle cx="120" cy="80" r="3" fill="currentColor" opacity="0.8" />
                            <circle cx="115" cy="95" r="2.5" fill="currentColor" opacity="0.7" />
                        </svg>
                    </motion.div>
                </div>
            </div>

            <div className="relative z-10 space-y-2">
                <div className="bg-white/90 dark:bg-neutral-900/90 w-fit p-3 rounded-full shadow-sm backdrop-blur-sm">
                    <Globe className="w-6 h-6 text-neutral-900 dark:text-white" />
                </div>
                <div className="bg-white/80 dark:bg-neutral-900/80 p-4 rounded-2xl backdrop-blur-md">
                    <CardTitle className="mb-1">Location</CardTitle>
                    <p className="font-medium">Malaysia & Sri Lanka</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Open to remote opportunities</p>
                </div>
            </div>
        </Card>
    )
}
