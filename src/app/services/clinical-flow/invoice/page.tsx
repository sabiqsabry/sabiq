"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, FileText, ArrowLeft, ShieldAlert } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function InvoicePage() {
    const [passwordInput, setPasswordInput] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === "navien@CSEM") {
            setIsUnlocked(true);
            setErrorMsg("");
        } else {
            setErrorMsg("Incorrect access key. Please try again.");
            setPasswordInput("");
        }
    };

    if (isUnlocked) {
        return (
            <div className="w-full h-screen bg-neutral-100 flex flex-col">
                <div className="h-14 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-6 flex items-center justify-between shadow-sm z-10 shrink-0">
                    <div className="flex items-center gap-3">
                        <FileText size={18} className="text-neutral-500" />
                        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">invoice.html</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold rounded-md flex items-center gap-1">
                        <Lock size={12}/> Secure Session Active
                    </span>
                </div>
                <iframe 
                    src="/projects/clinical-flow/invoice.html" 
                    className="w-full flex-1 bg-white"
                    title="Clinical Flow Invoice"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center p-6 selection:bg-neutral-200 dark:selection:bg-neutral-800">
            <Link href="/services" className="absolute top-8 left-8 text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-xl"
            >
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                    <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-2">
                        <Lock size={24} className="text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Confidential Document</h1>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        This invoice is protected. Please enter the client access key to view securely.
                    </p>
                </div>

                <form onSubmit={handleUnlock} className="space-y-6">
                    <div className="space-y-2">
                        <div className="relative">
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                placeholder="Access Key"
                                className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl py-4 px-4 text-center tracking-widest focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 placeholder:tracking-normal"
                                autoFocus
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {errorMsg && (
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-xs font-medium text-red-500 text-center flex items-center justify-center gap-1"
                            >
                                <ShieldAlert size={14}/> {errorMsg}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <button 
                        type="submit"
                        disabled={!passwordInput.trim()}
                        className="w-full bg-neutral-900 disabled:bg-neutral-300 disabled:text-neutral-500 hover:bg-black dark:bg-white dark:disabled:bg-neutral-800 dark:disabled:text-neutral-600 dark:hover:bg-neutral-200 text-white dark:text-black text-sm font-medium py-4 px-6 rounded-2xl transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
                    >
                        Unlock Document
                    </button>
                </form>

            </motion.div>
        </div>
    );
}
