import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800 py-12 px-6 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
                {/* Brand Column */}
                <div className="space-y-4">
                    <Link href="/" className="text-lg font-bold tracking-widest uppercase block">
                        SABIQSABRY
                    </Link>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        © Sabiq Sabry 2025,<br />All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://x.com/sabiqsabryy" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="https://github.com/sabiqsabry" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/sabiqsabry" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* Menu Column */}
                <div>
                    <h4 className="font-semibold mb-4">Menu</h4>
                    <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <li><Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-50">Home</Link></li>
                        <li><Link href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-50">About</Link></li>
                        <li><a href="/resume.pdf" download="Sabiq-Sabry-Resume.pdf" className="hover:text-neutral-900 dark:hover:text-neutral-50">Resume</a></li>
                        <li><Link href="/contact" className="hover:text-neutral-900 dark:hover:text-neutral-50">Contact</Link></li>
                        <li><Link href="/sitemap" className="hover:text-neutral-900 dark:hover:text-neutral-50">Sitemap</Link></li>
                    </ul>
                </div>

                {/* Creative Column */}
                <div>
                    <h4 className="font-semibold mb-4">Creative</h4>
                    <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <li><Link href="/work" className="hover:text-neutral-900 dark:hover:text-neutral-50">Work</Link></li>
                        <li><Link href="/work" className="hover:text-neutral-900 dark:hover:text-neutral-50">Projects</Link></li>
                        <li><Link href="/products" className="hover:text-neutral-900 dark:hover:text-neutral-50">Products</Link></li>
                    </ul>
                </div>

                {/* Helpful Links Column */}
                <div>
                    <h4 className="font-semibold mb-4">Helpful Links</h4>
                    <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <li><Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-50">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Preferences Column */}
                <div>
                    <h4 className="font-semibold mb-4">Preferences</h4>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    )
}
