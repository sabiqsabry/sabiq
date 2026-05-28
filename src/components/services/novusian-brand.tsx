"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type NovusianBrandProps = {
    compact?: boolean;
    embedded?: boolean;
};

export function NovusianBrand({ compact = false, embedded = false }: NovusianBrandProps) {
    const label = (
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-500">
            Commercial Entity
        </p>
    );

    const titleClass = embedded
        ? "text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white"
        : "text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white";

    const bodyClass = embedded
        ? "text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl"
        : "text-xl md:text-2xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl";

    const logoImage = (sizeClass: string) => (
        <div
            className={`relative aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 ${sizeClass}`}
        >
            <Image
                src="/projects/novusian-logo.png"
                alt="Novusian Brand Logo"
                fill
                sizes={embedded ? "192px" : "(max-width: 768px) 100vw, 384px"}
                className="object-cover"
            />
        </div>
    );

    const logoBlock = embedded ? (
        <div className="shrink-0 mx-auto lg:mx-0 lg:justify-self-end lg:-translate-y-2">
            {logoImage("w-[11rem] sm:w-[12rem]")}
        </div>
    ) : (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex-1 flex justify-center w-full max-w-sm"
        >
            {logoImage("w-full")}
        </motion.div>
    );

    const content = embedded ? (
        <div className="w-full space-y-4">
            {label}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_12rem] gap-8 lg:gap-12 lg:items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-5 min-w-0 lg:pb-0.5"
                >
                    <h3 className={titleClass}>Novusian</h3>
                    <p className={bodyClass}>
                        While I operate independently, my commercial work is executed under the banner of Novusian. It represents the meticulous engineering, premium aesthetics, and professional standards applied to every client project.
                    </p>
                </motion.div>
                {logoBlock}
            </div>
        </div>
    ) : (
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 min-w-0"
            >
                <div className="space-y-3">
                    {label}
                    <h3 className={titleClass}>Novusian</h3>
                </div>
                <p className={bodyClass}>
                    While I operate independently, my commercial work is executed under the banner of Novusian. It represents the meticulous engineering, premium aesthetics, and professional standards applied to every client project.
                </p>
            </motion.div>
            {logoBlock}
        </div>
    );

    if (embedded) {
        return <div className="w-full">{content}</div>;
    }

    return (
        <section className={`${compact ? "py-12 md:py-16" : "py-24"} relative w-full overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">{content}</div>
        </section>
    );
}
