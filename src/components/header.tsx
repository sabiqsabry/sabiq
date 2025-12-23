"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { cn } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
]

export function Header() {
    const pathname = usePathname()
    const { theme, resolvedTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Determine if we're in dark mode (default to false/light theme when not mounted)
    const isDark = mounted ? (resolvedTheme === "dark") : false

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
                <div className="flex items-center justify-between max-w-7xl mx-auto pointer-events-auto">
                    {/* Logo */}
                    <Link href="/" className="text-lg font-bold tracking-widest uppercase">
                        SABIQSABRY
                    </Link>

                    {/* Desktop Nav - Pill Shape */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full px-2 py-2 shadow-sm">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-50",
                                        isActive
                                            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50"
                                            : "text-neutral-500 dark:text-neutral-400"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Contact Button & Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        <Button 
                            asChild 
                            variant={isDark ? "default" : "outline"}
                            className="hidden md:inline-flex rounded-full"
                        >
                            <Link href="/contact">Contact</Link>
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="md:hidden rounded-full"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-4 text-2xl font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-2 border-b border-neutral-100 dark:border-neutral-900"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-2 text-neutral-500"
                            >
                                Contact
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
