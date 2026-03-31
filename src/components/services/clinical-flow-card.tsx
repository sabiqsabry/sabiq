"use client";

import { motion } from "framer-motion";
import { Lock, ExternalLink, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function ClinicalFlowCard() {
    return (
        <div className="w-full bg-white dark:bg-neutral-950 rounded-3xl overflow-hidden relative">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex-1 p-8 lg:p-16 space-y-8 flex flex-col justify-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-32 h-16">
                                <Image src="/projects/clinical-flow/logo.png" alt="Clinical Flow Logo" fill className="object-contain object-left" />
                            </div>
                            <span className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
                            <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500">
                                Case Study
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Clinical Flow
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-12 pt-6">
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Client</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium whitespace-nowrap">CSEM</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Industry</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium whitespace-nowrap">Healthcare</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Project Type</span>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium whitespace-nowrap">Web App</p>
                        </div>
                    </div>
                </div>
                {/* Hero Image Side */}
                <div className="lg:w-[50%] bg-neutral-100 dark:bg-neutral-900 relative min-h-[300px] lg:min-h-auto lg:border-l border-neutral-200 dark:border-neutral-800 overflow-hidden">
                    <Image 
                        src="/projects/clinical-flow/screenshot.png" 
                        alt="Clinical Flow Dashboard Preview" 
                        fill
                        className="object-cover object-left-top"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-16 grid lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
                <div className="space-y-16">
                    {/* the story */}
                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mt-0">The Problem</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            CSEM relied on paper-based patient assessment forms passed between clinical staff (secretary, doctor, physiotherapist). This created bottlenecks in the intake workflow, no audit trail, and no centralized visibility into patient progress across the clinical team.
                        </p>
                        
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white pt-8">The Solution</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            A full-stack clinical workflow management system that digitizes the entire patient journey — from initial intake to discharge.
                        </p>
                        <ul className="space-y-3 pt-2">
                            <li className="flex items-start gap-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" /> 
                                Multi-stage patient registration with tiered service package and payment tracking.
                            </li>
                            <li className="flex items-start gap-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" /> 
                                Role-gated clinical assessments for doctors and physiotherapists.
                            </li>
                            <li className="flex items-start gap-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" /> 
                                Specialized workflows: athlete pre-participation screening, hydrotherapy session tracking.
                            </li>
                            <li className="flex items-start gap-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" /> 
                                Appointment calendar with staff availability management.
                            </li>
                            <li className="flex items-start gap-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" /> 
                                Admin reporting with Excel export, revenue tracking, and a full audit log.
                            </li>
                        </ul>
                    </div>

                    {/* the proof */}
                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">Outcome</h3>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Eliminated paper-based patient handoffs across 4 clinical roles. Built to handle ~3,000 patients/week across the clinic with a full audit trail on all patient data changes for compliance. Deployed in under 2 months as a production-ready system.
                        </p>
                    </div>
                </div>

                {/* Sidebar / Metadata */}
                <div className="h-fit">
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">Role</h4>
                            <p className="text-neutral-900 dark:text-neutral-200 font-medium leading-tight">Solo Developer</p>
                            <p className="text-sm text-neutral-500 mt-1">End-to-end execution</p>
                        </div>
                        
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">Core Technology</h4>
                            <ul className="flex flex-col gap-3">
                                <li className="text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> React 18, TS, Vite
                                </li>
                                <li className="text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Tailwind + shadcn/ui
                                </li>
                                <li className="text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Supabase (PostgreSQL)
                                </li>
                                <li className="text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-3 mt-2">
                                    <div className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-md">Vercel Deployment</div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
                            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">Execution Details</h4>
                            <button 
                                onClick={() => window.open("https://clinicalflow.netlify.app/", "_blank")}
                                className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black text-sm font-medium py-4 px-6 rounded-2xl transition-all shadow-sm active:scale-95"
                            >
                                <ExternalLink size={16} /> View App
                            </button>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => window.open("/services/clinical-flow/invoice", "_blank")}
                                    className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 text-sm font-medium py-4 px-4 rounded-2xl transition-all shadow-sm active:scale-95 whitespace-nowrap"
                                >
                                    <Lock size={16} /> View Invoice
                                </button>
                                <button 
                                    onClick={() => {
                                        const url = window.location.origin + "/services/clinical-flow/invoice";
                                        navigator.clipboard.writeText(url);
                                        const btn = document.getElementById('copy-cf-invoice-btn');
                                        if (btn) {
                                            const originalText = btn.innerHTML;
                                            btn.innerHTML = '<span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg> Copied</span>';
                                            setTimeout(() => { btn.innerHTML = originalText; }, 2000);
                                        }
                                    }}
                                    id="copy-cf-invoice-btn"
                                    className="flex-shrink-0 flex items-center justify-center bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl transition-all shadow-sm active:scale-95"
                                    title="Copy Link"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
