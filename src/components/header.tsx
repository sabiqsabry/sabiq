"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-6",
                scrolled
                    ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
                    : "bg-transparent"
            )}>
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link href="/" className={cn(
                        "text-lg font-bold tracking-widest uppercase transition-colors duration-300",
                        scrolled
                            ? "text-neutral-900 dark:text-neutral-50"
                            : "text-neutral-900 dark:text-neutral-50"
                    )}>
                        SABIQSABRY
                    </Link>

                    {/* Desktop Nav - Pill Shape */}
                    <nav className={cn(
                        "hidden md:flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300",
                        scrolled
                            ? "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                            : "bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50"
                    )}>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-800"
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
                            variant="outline"
                            className={cn(
                                "hidden md:inline-flex rounded-full transition-all duration-300",
                                !scrolled && "bg-white/60 backdrop-blur-sm border-neutral-200/50"
                            )}
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
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "py-2 border-b border-neutral-100 dark:border-neutral-800 transition-colors",
                                            isActive
                                                ? "text-neutral-900 dark:text-neutral-50"
                                                : "text-neutral-500 dark:text-neutral-400"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-2 text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800"
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
