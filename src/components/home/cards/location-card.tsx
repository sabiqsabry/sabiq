"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Globe, MapPin } from "lucide-react"
import WorldMap from "react-svg-worldmap"
import { motion } from "framer-motion"

// Countries you've been to with their ISO codes
const visitedCountries = {
    LK: { value: 2, color: "#22c55e" }, // Sri Lanka - green (current location)
    MY: { value: 1, color: "#3b82f6" }, // Malaysia - blue
    GB: { value: 1, color: "#3b82f6" }, // United Kingdom - blue
    AE: { value: 1, color: "#3b82f6" }, // United Arab Emirates (Abu Dhabi) - blue
}

export function LocationCard() {
    return (
        <Card className="h-full relative overflow-hidden flex flex-col p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 group cursor-pointer">
            {/* World Map - More visible on hover - showing entire world */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none group-hover:opacity-100 dark:group-hover:opacity-90 transition-opacity duration-300 overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full scale-100 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center">
                    <WorldMap
                        color="#d1d5db"
                        size="responsive"
                        data={Object.entries(visitedCountries).map(([country, config]) => ({
                            country: country,
                            value: config.value,
                        }))}
                        tooltipBgColor="#000000"
                        tooltipTextColor="#ffffff"
                        borderColor="#9ca3af"
                        backgroundColor="transparent"
                        richInteraction={false}
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "100%",
                        }}
                        styleFunction={(countryCode: string) => {
                            const country = visitedCountries[countryCode as keyof typeof visitedCountries]
                            if (!country) {
                                return {
                                    fill: "#d1d5db",
                                    fillOpacity: 0.3,
                                    stroke: "#9ca3af",
                                    strokeWidth: 0.5,
                                    strokeOpacity: 0.5,
                                    cursor: "default",
                                }
                            }
                            return {
                                fill: country.color,
                                fillOpacity: countryCode === "LK" ? 1 : 0.8,
                                stroke: countryCode === "LK" ? "#16a34a" : "#2563eb",
                                strokeWidth: countryCode === "LK" ? 3 : 2,
                                strokeOpacity: 1,
                                cursor: "default",
                            }
                        }}
                    />
                    
                    {/* Pin markers overlay - positioned using your coordinates */}
                    
                    {/* 1. United Kingdom - Blue Ping (moving DOWN to center on the main island) */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                        style={{
                            left: "49.7%",
                            top: "43%",
                        }}
                    >
                        <div className="relative -translate-x-1/2 -translate-y-full">
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full border border-white shadow-md"></div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 w-0 h-0 border-l-[2px] border-r-[2px] border-t-[2px] border-transparent border-t-blue-500"></div>
                        </div>
                    </motion.div>
                    
                    {/* 2. United Arab Emirates (UAE) - Blue Ping (moving DOWN and LEFT back to the Gulf) */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                        style={{
                            left: "67.4%",
                            top: "59.5%",
                        }}
                    >
                        <div className="relative -translate-x-1/2 -translate-y-full">
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full border border-white shadow-md"></div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 w-0 h-0 border-l-[2px] border-r-[2px] border-t-[2px] border-transparent border-t-blue-500"></div>
                        </div>
                    </motion.div>
                    
                    {/* 3. Malaysia - Blue Ping (moving DOWN and RIGHT to center on KL) */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                        style={{
                            left: "80.2%",
                            top: "73%",
                        }}
                    >
                        <div className="relative -translate-x-1/2 -translate-y-full">
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full border border-white shadow-md"></div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 w-0 h-0 border-l-[2px] border-r-[2px] border-t-[2px] border-transparent border-t-blue-500"></div>
                        </div>
                    </motion.div>
                    
                    {/* 4. Sri Lanka - Green Ping (Current Location) (moving UP and LEFT away from Indonesia) */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                        style={{
                            left: "75.3%",
                            top: "71%",
                        }}
                    >
                        <div className="relative -translate-x-1/2 -translate-y-full">
                            <div className="w-3 h-3 bg-green-500 rounded-full border border-white shadow-md animate-pulse"></div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 w-0 h-0 border-l-[2.5px] border-r-[2.5px] border-t-[2.5px] border-transparent border-t-green-500"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Text Content - Hidden on hover */}
            <div className="relative z-10 space-y-2 mt-auto group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300">
                <div className="bg-white/90 dark:bg-neutral-900/90 w-fit p-3 rounded-full shadow-sm backdrop-blur-sm">
                    <Globe className="w-6 h-6 text-neutral-900 dark:text-white" />
                </div>
                <div className="bg-white/80 dark:bg-neutral-900/80 p-4 rounded-2xl backdrop-blur-md">
                    <CardTitle className="mb-1">Location</CardTitle>
                    <p className="font-medium">Malaysia & Sri Lanka</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Open to remote opportunities</p>
                    <div className="mt-3 flex items-center gap-4 text-xs flex-wrap">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-neutral-600 dark:text-neutral-400">Current (Sri Lanka)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-blue-500" />
                            <span className="text-neutral-600 dark:text-neutral-400">Visited (Malaysia, UK, UAE)</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}