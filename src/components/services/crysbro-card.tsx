"use client";

import { ExternalLink, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function CrysbroCard() {
    return (
        <div className="w-full bg-white dark:bg-neutral-950 rounded-3xl overflow-hidden relative">
            <div className="flex flex-col lg:flex-row border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex-1 p-8 lg:p-16 space-y-8 flex flex-col justify-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-32 h-10">
                                <Image src="/projects/crysbro/logo.png" alt="Crysbro Logo" fill className="object-contain object-left" />
                            </div>
                            <span className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
                            <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500">
                                Case Study
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Crysbro
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-12 pt-6">
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Client</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Crysbro</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Industry</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Poultry / FMCG</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Project Type</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Corporate Website</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] bg-neutral-100 dark:bg-neutral-900 relative min-h-[300px] lg:min-h-auto lg:border-l border-neutral-200 dark:border-neutral-800 overflow-hidden">
                    <Image
                        src="/projects/crysbro/hero.png"
                        alt="Crysbro website homepage"
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </div>

            <div className="p-8 lg:p-16 grid lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
                <div className="space-y-16">
                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mt-0">The Problem</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Crysbro has been Sri Lanka&apos;s &quot;Chicken Specialist&quot; for 53 years, running a fully vertically integrated operation from breeder farms to retail shelf - and none of that showed on an ageing WordPress site. The brief was to build the entire corporate site from a Figma design. The real difficulty was the hand-off: hero photography came back from the client&apos;s own export with page titles baked into the pictures, product pack shots arrived on studio backdrops at wildly mixed resolutions, retailer and partner logos had never been exported at all, and the milestone photography existed only as images embedded in a Word document.
                        </p>

                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white pt-8">The Solution</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            A statically exported Next.js site covering every part of the business, laid out full-width so the design scales with the viewport instead of sitting in a fixed centre column.
                        </p>
                        <ul className="space-y-3 pt-2">
                            {[
                                "93 prerendered routes - 7 main pages plus 62 products, 9 news articles, 7 recipes and 3 legal pages",
                                "Full-width layout that scales proportionally with the viewport rather than a fixed centre column",
                                "Complete product catalogue with individual detail pages, photography and per-product SEO copy",
                                "15-entry milestones timeline, recipes with grouped ingredients and timed steps, and a full news archive",
                                "Contact, newsletter and careers forms all working on a static export via Netlify Forms",
                                "Scroll-reveal animation across every page, with a reduced-motion check and a safety timeout so no section can be left blank",
                                "Python/Pillow asset pipeline - edge-erosion background removal for pack shots, logo normalisation, milestone image recovery",
                                "Single source of truth in site.ts: the Buy/Enquiry destination is a documented one-line switch",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                    <CheckCircle2 className="w-6 h-6 text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">Outcome</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Built solo across roughly ten weeks (July - September 2026), through an initial two-variant layout exploration and a full client revision round, and handed over as a static Netlify export with the build and lint clean. Every asset the design hand-off never supplied - retailer logos, the correct homepage and careers heroes, standalone ISO badges, all 15 milestone photos - was recovered or rebuilt in-house rather than left blocking on the client.
                        </p>
                    </div>
                </div>

                <div className="h-fit">
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">Role</h4>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Solo Developer</p>
                            <p className="text-sm text-neutral-500 mt-1">Design hand-off to production</p>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">Core Technology</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    "Next.js 16, React 19, TypeScript",
                                    "Tailwind CSS 4",
                                    "Framer Motion",
                                    "Netlify Forms + static export",
                                    "Python + Pillow (asset pipeline)",
                                ].map((tech) => (
                                    <li key={tech} className="text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">Execution Details</h4>
                            <button
                                type="button"
                                onClick={() => window.open("https://crysbro.com", "_blank")}
                                className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black text-sm font-medium py-4 px-6 rounded-2xl transition-all shadow-sm active:scale-95"
                            >
                                <ExternalLink size={16} /> Visit Website
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
