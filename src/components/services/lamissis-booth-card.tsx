"use client";

import { ExternalLink, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function LamissisBoothCard() {
    return (
        <div className="w-full bg-white dark:bg-neutral-950 rounded-3xl overflow-hidden relative">
            <div className="flex flex-col lg:flex-row border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex-1 p-8 lg:p-16 space-y-8 flex flex-col justify-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-32 h-16">
                                <Image src="/projects/lamissis-booth/logo.png" alt="Lamissi's Booth Logo" fill className="object-contain object-left" />
                            </div>
                            <span className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
                            <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500">
                                Case Study
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Lamissi&apos;s Booth
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-12 pt-6">
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Client</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Lamissi&apos;s Booth</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Industry</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Entertainment / Events</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Project Type</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Kiosk App</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] bg-neutral-100 dark:bg-neutral-900 relative min-h-[300px] lg:min-h-auto lg:border-l border-neutral-200 dark:border-neutral-800 overflow-hidden">
                    <Image
                        src="/projects/lamissis-booth/hero.png"
                        alt="Lamissi's Booth kiosk interface"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <div className="p-8 lg:p-16 grid lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
                <div className="space-y-16">
                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mt-0">The Problem</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Lamissi&apos;s Booth needed a fully self-service photo booth for the Sri Lankan market - Korean-style instant prints, no staff at the booth, and no &quot;we&apos;ll email you a link later.&quot; Existing setups relied on manual operation, disconnected payment and print workflows, and no centralized session tracking or remote troubleshooting once hardware was deployed off-site.
                        </p>

                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white pt-8">The Solution</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            A full-stack automated photo booth kiosk that runs the entire customer journey - package selection, payment, styled photo capture, review, and physical print - with zero staff involvement.
                        </p>
                        <ul className="space-y-3 pt-2">
                            {[
                                "End-to-end kiosk flow with auto-reset inactivity timer",
                                "Real-time USB camera capture with MJPEG live preview and 1080p stills via v4l2 on Raspberry Pi",
                                "Server-side print layout engine: template compositing, filters, frames, stickers, dual 2×6\" strips on 4×6\" dye-sub output",
                                "Tiered packages with LKR pricing, configurable via admin dashboard",
                                "Password-protected operator dashboard - sessions, config, printer status, logs, system controls",
                                "SQLite sessions plus async Supabase cloud backup (print never waits on upload)",
                                "Remote dev and ops over Tailscale - test layouts, preview prints, deploy via systemd on Pi",
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
                            Deployed as a production kiosk on Raspberry Pi at the client&apos;s location, driving a DNP RX1HS dye-sub printer via CUPS with zero staff per session. Built and iterated from initial commit to live booth deployment in ~5 weeks (Apr–May 2026). Includes a marketing landing page at lamissisbooth.com. Payment flow is built; POS terminal integration is in progress before full commercial launch.
                        </p>
                    </div>
                </div>

                <div className="h-fit">
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">Role</h4>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Solo Developer</p>
                            <p className="text-sm text-neutral-500 mt-1">Hardware + software end-to-end</p>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">Core Technology</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    "Node.js, Express, Vanilla JS PWA",
                                    "React 18, Vite, Tailwind (marketing site)",
                                    "SQLite + Supabase",
                                    "sharp · CUPS · v4l2 · Raspberry Pi",
                                    "systemd + Tailscale",
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
                                onClick={() => window.open("https://lamissisbooth.com", "_blank")}
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
