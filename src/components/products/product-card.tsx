"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, ExternalLink, Check, Link2, Monitor, ShieldCheck, Smartphone } from "lucide-react"
import { Product, Platform } from "./products-data"

const platformConfig: Record<Platform, { label: string; color: string }> = {
    mac: {
        label: "macOS",
        color: "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900",
    },
    windows: {
        label: "Windows",
        color: "bg-blue-600 text-white",
    },
    ios: {
        label: "iOS",
        color: "bg-sky-500 text-white",
    },
    android: {
        label: "Android",
        color: "bg-green-600 text-white",
    },
    web: {
        label: "Web",
        color: "bg-violet-600 text-white",
    },
    devtool: {
        label: "Developer Tool",
        color: "bg-amber-500 text-white",
    },
    diagramming: {
        label: "Diagramming",
        color: "bg-teal-600 text-white",
    },
}

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        // The anchor sits on a plain wrapper, not on the animated element: a
        // browser scrolling to #id measures the rendered box, so the fade-in's
        // 24px rise would land every deep link 24px high, under the header.
        <div
            id={product.id}
            className="scroll-mt-28 rounded-2xl target:ring-2 target:ring-neutral-400/60"
        >
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden"
        >
            {/* Top section */}
            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-[28px] overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800">
                        <Image
                            src={product.icon}
                            alt={`${product.name} icon`}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-4">
                    {/* Name + platforms */}
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center gap-[15px]">
                            <div className="group/anchor flex items-center gap-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
                                    {product.name}
                                </h2>
                                <a
                                    href={`#${product.id}`}
                                    aria-label={`Link to ${product.name}`}
                                    title={`Link to ${product.name}`}
                                    className="text-neutral-300 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-50 opacity-100 md:opacity-0 md:group-hover/anchor:opacity-100 focus-visible:opacity-100 transition-all"
                                >
                                    <Link2 className="h-4 w-4" />
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {product.platforms.map((p) => {
                                    const cfg = platformConfig[p]
                                    return (
                                        <span
                                            key={p}
                                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${cfg.color}`}
                                        >
                                            {cfg.label}
                                        </span>
                                    )
                                })}
                                {product.badge && (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 text-base">
                            {product.tagline}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed whitespace-pre-line line-clamp-4">
                        {product.description.split("\n\n")[0]}
                    </p>

                    {/* Download buttons */}
                    <div className="flex flex-wrap gap-3 pt-1">
                        {product.downloads.map((dl, idx) => {
                            const cfg = platformConfig[dl.platform]
                            const isMobile = dl.platform === "ios" || dl.platform === "android"
                            const Icon = isMobile ? Smartphone : Monitor
                            const key = `${dl.platform}-${idx}`

                            if (dl.comingSoon) {
                                return (
                                    <span
                                        key={key}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 text-sm font-medium cursor-default"
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                        {dl.label}
                                    </span>
                                )
                            }

                            if (dl.internal) {
                                return (
                                    <Link
                                        key={key}
                                        href={dl.url}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
                                    >
                                        {dl.label}
                                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                                    </Link>
                                )
                            }

                            return dl.external ? (
                                <Link
                                    key={key}
                                    href={dl.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    {dl.label}
                                    <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                                </Link>
                            ) : (
                                <a
                                    key={key}
                                    href={dl.url}
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    <Download className="h-3.5 w-3.5" />
                                    {dl.label}
                                </a>
                            )
                        })}
                        {product.comingSoon && (
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 text-sm font-medium cursor-default">
                                <Monitor className="h-3.5 w-3.5" />
                                {product.comingSoon}
                            </span>
                        )}
                    </div>

                    {/* Developer + Privacy Policy */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-50 dark:border-neutral-800/50">
                        <p className="text-xs text-neutral-400 dark:text-neutral-600">
                            by {product.developer}
                        </p>
                        {product.privacyPolicy && (
                            <Link
                                href={`/products/${product.id}/privacy`}
                                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 flex items-center gap-1.5 transition-colors group"
                            >
                                <ShieldCheck className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                Privacy Policy
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100 dark:border-neutral-800" />

            {/* Features */}
            <div className="px-8 md:px-10 py-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mb-4">
                    Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                            <Check className="h-4 w-4 text-neutral-400 dark:text-neutral-600 flex-shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
        </div>
    )
}
