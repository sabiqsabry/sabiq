"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-8 md:p-12 lg:p-20 text-center">
            {/* Background Effect - Simple CSS Dots */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">

                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl"
                >
                    <Image
                        src="/assets/sabiq-profile.jpg"
                        alt="Sabiq Sabry"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 128px, 160px"
                    />
                </motion.div>

                <div className="max-w-2xl space-y-4">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white"
                    >
                        AI Engineer
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400"
                    >
                        I build AI systems that think — from data to intelligence.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4 flex-wrap justify-center"
                >
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <Link href="/work">View My Work</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <a href="/resume.pdf" download="Sabiq-Sabry-Resume.pdf">Resume</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
