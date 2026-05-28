"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type WorkSplitHeroProps = {
    personalCount: number;
    clientCount: number;
    onPersonalClick: () => void;
    onClientClick: () => void;
};

export function WorkSplitHero({
    personalCount,
    clientCount,
    onPersonalClick,
    onClientClick,
}: WorkSplitHeroProps) {
    const cardClass =
        "group text-left w-full rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 md:p-10 min-h-[240px] md:min-h-[280px] flex flex-col justify-between transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/80 active:scale-[0.99]";

    return (
        <section className="pt-12 md:pt-20 pb-8 md:pb-12">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Selected Work
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                    Personal builds and client delivery, in one place.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    onClick={onPersonalClick}
                    className={cardClass}
                >
                    <div className="space-y-3">
                        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                            Personal
                        </p>
                        <h2 className="text-2xl md:text-[1.75rem] font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Personal projects
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            AI, web, and mobile - self-directed and open on GitHub.
                        </p>
                    </div>
                    <div className="flex items-end justify-between gap-4 pt-8 border-t border-neutral-100 dark:border-neutral-800 mt-8">
                        <p className="text-[2rem] font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-neutral-50 leading-none">
                            {personalCount}
                            <span className="block text-sm font-normal text-neutral-500 mt-1">projects</span>
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                            View
                            <ChevronDown size={18} className="opacity-70 group-hover:translate-y-0.5 transition-transform" />
                        </span>
                    </div>
                </motion.button>

                <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 }}
                    onClick={onClientClick}
                    className={cardClass}
                >
                    <div className="space-y-3">
                        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                            Client · Novusian
                        </p>
                        <h2 className="text-2xl md:text-[1.75rem] font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Client work
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            Production case studies - shipped systems and premium UI.
                        </p>
                    </div>
                    <div className="flex items-end justify-between gap-4 pt-8 border-t border-neutral-100 dark:border-neutral-800 mt-8">
                        <p className="text-[2rem] font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-neutral-50 leading-none">
                            {clientCount}
                            <span className="block text-sm font-normal text-neutral-500 mt-1">case studies</span>
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                            View
                            <ChevronDown size={18} className="opacity-70 group-hover:translate-y-0.5 transition-transform" />
                        </span>
                    </div>
                </motion.button>
            </div>
        </section>
    );
}
