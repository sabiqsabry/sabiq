"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CtaSection() {
    return (
        <section className="relative w-full overflow-hidden rounded-[2rem] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white p-8 md:p-12 lg:p-20 text-center">
            <div className="relative z-10 flex flex-col items-center gap-6">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight"
                >
                    Let's work together
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl"
                >
                    If you are interested in building a project together or if you have any questions, feel free to contact me.
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
