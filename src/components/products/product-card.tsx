"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, ExternalLink, Check, Monitor } from "lucide-react"
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
}

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
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
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-[28px] overflow-hidden shadow-sm">
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
                    <div className="flex flex-wrap items-start gap-3">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
                                {product.name}
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400 text-base mt-1">
                                {product.tagline}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1">
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
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed whitespace-pre-line line-clamp-4">
                        {product.description.split("\n\n")[0]}
                    </p>

                    {/* Download buttons */}
                    <div className="flex flex-wrap gap-3 pt-1">
                        {product.downloads.map((dl) => {
                            const cfg = platformConfig[dl.platform]
                            const isExternal = dl.external
                            return isExternal ? (
                                <Link
                                    key={dl.platform}
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
                                    key={dl.platform}
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

                    {/* Developer */}
                    <p className="text-xs text-neutral-400 dark:text-neutral-600">
                        by {product.developer}
                    </p>
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
    )
}
