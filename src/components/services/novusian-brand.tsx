"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function NovusianBrand() {
    return (
        <section className="py-24 relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                >
                    <div className="space-y-4">
                        <div className="inline-flex items-center text-xs font-medium tracking-widest uppercase text-neutral-500">
                            Commercial Entity
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Novusian
                        </h2>
                    </div>
                    
                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">
                        While I operate independently, my commercial work is executed under the banner of Novusian. It represents the meticulous engineering, premium aesthetics, and professional standards applied to every client project.
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex-1 flex justify-center w-full"
                >
                    <div className="relative w-full max-w-sm aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-neutral-200 dark:border-neutral-800">
                        <Image 
                            src="/projects/novusian-logo.png"
                            alt="Novusian Brand Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
