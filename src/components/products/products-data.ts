export type Platform = "mac" | "windows" | "ios" | "android" | "web" | "devtool" | "diagramming";

export interface DownloadLink {
    platform: Platform;
    url: string;
    label: string;
    /** If true, this is an external store link (App Store / Play Store) — opens in new tab */
    external?: boolean;
    /** If true, navigates within the site (same tab, no download) — for hosted tools */
    internal?: boolean;
    /** If true, the button is rendered as "Coming Soon" with no link */
    comingSoon?: boolean;
}

export interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    features: string[];
    platforms: Platform[];
    downloads: DownloadLink[];
    developer: string;
    badge?: string; // e.g. "New", "Beta", "Coming Soon"
    comingSoon?: string; // text for upcoming platforms
    privacyPolicy?: string; // detailed privacy policy text
}

export const products: Product[] = [
    {
        id: "blankr",
        name: "Blankr.",
        tagline: "Write. Close. Done.",
        description:
            "Blankr. is a minimal, zero-distraction notes app for macOS built around a single idea - open it and start writing immediately.\n\nNo dashboards. No accounts. No sync. No save button. No onboarding. No noise. Just a blank page and your words.\n\nWork in browser-style tabs, each with its own text and formatting. When you close a tab, quit, or shut down, every tab is saved for you - back to the file it came from, or to your Desktop as a plain .txt named after the tab (.rtf when it has formatting). Existing files are never overwritten, and your open tabs are back exactly where you left them on the next launch. No hidden folders. No proprietary formats. No lock-in.\n\nVersion 1.4 also makes Blankr. a quiet viewer: Markdown files open fully rendered - tables, task lists, highlighted code blocks, images - and code in 80+ languages opens with syntax highlighting and line numbers, read-only until you choose to edit.\n\nA slim side panel holds only the essentials - bold, italic, underline, size, alignment, checklists and numbered lists. Zoom adapts to each display, and everything stays fully offline.\n\nBlankr. does not try to organize your life. It does not try to be smart. It just gets out of your way completely.",
        icon: "/products/blankr/icon.png",
        features: [
            "Browser-style tabs, restored exactly as you left them on next launch",
            "Auto-saves every tab on close, quit, or shutdown - no save button ever",
            "Plain .txt (or .rtf with formatting) on your Desktop, named after the tab - never overwrites a file",
            "Rendered Markdown viewer with tables, task lists, and highlighted code blocks",
            "Code viewer for 80+ languages with syntax highlighting, line numbers, and find",
            "Minimal formatting panel with checklists and numbered lists",
            "Display-aware zoom that stays sharp on every monitor",
            "Fully offline, fully private, zero telemetry - native Swift and SwiftUI, macOS 13+",
        ],
        platforms: ["mac"],
        downloads: [
            {
                platform: "mac",
                url: "/products/blankr/Blankr-1.4.0-macOS.dmg",
                label: "Download for Mac",
            },
            {
                platform: "mac",
                url: "https://github.com/sabiqsabry/blankr",
                label: "View Source",
                external: true,
            },
        ],
        developer: "Sabiq Sabry - novusian",
        badge: "v1.4",
        comingSoon: "Windows version coming soon.",
    },
    {
        id: "drive-or-ride",
        name: "Drive or Ride?",
        tagline: "Is it cheaper to drive there yourself, or take PickMe / Uber?",
        description:
            "Drive or Ride? answers one everyday question: for this trip, right now, is it cheaper to take your own vehicle or book a ride? Enter a start, a destination, and what you drive, and it compares your fuel cost against estimated PickMe and Uber fares for tuks, bikes, and cars.\n\nEstimates are adjusted for live traffic, time of day, and weather, using traffic-aware routing from Google Maps Platform. Sri Lanka is the main market; a few other countries work with fares you enter yourself.\n\nThe fare model is calibrated from real trips and keeps improving through anonymous quotes: enter the real fare you were offered and, if you choose to share it, a rounded, anonymous record helps tune future estimates. No names, place names, or device ids are ever stored.\n\nThe interface follows Apple's Liquid Glass style in light and dark themes, built with React, TypeScript, and Vite. Fares are modelled and clearly labelled as estimates.",
        icon: "/products/drive-or-ride/icon.png",
        features: [
            "Fuel cost vs. PickMe / Uber fares for tuks, bikes, and cars",
            "Traffic-aware routing with live traffic, time of day, and weather",
            "Google Places search with a live route map",
            "Fare model calibrated from real trips",
            "Anonymous, opt-in fare quotes that improve future estimates",
            "Apple-style Liquid Glass UI with light and dark themes",
        ],
        platforms: ["web"],
        downloads: [
            {
                platform: "web",
                url: "/tools/drive-or-ride",
                label: "Open Project",
                external: true,
            },
            {
                platform: "web",
                url: "https://github.com/sabiqsabry/drive-or-ride",
                label: "View Source",
                external: true,
            },
        ],
        developer: "Sabiq Sabry - novusian",
        badge: "New",
    },
    {
        id: "mermaid-on-steroids",
        name: "Mermaid on Steroids",
        tagline: "ELK-powered Mermaid diagram editor and export tool",
        description:
            "Mermaid on Steroids helps turn Mermaid code into cleaner, more readable diagrams using ELK layout, with high-quality SVG, PNG, and PDF exports plus an evolving bridge to Excalidraw for editable workflows.\n\nTurn Mermaid code into cleaner ELK-powered diagrams with polished exports and Excalidraw handoff support.",
        icon: "/products/mermaid-on-steroids/icon.png",
        features: [
            "ELK-powered Mermaid rendering for cleaner graph layouts",
            "High-quality single-page SVG, PNG, and PDF exports",
            "Live preview with zoom, fullscreen, and inline label editing",
            "Faithful Excalidraw handoff for preserving rendered diagrams",
            "Experimental editable ELK export for Excalidraw workflows",
            "Built for large architecture, systems, and flow diagrams",
        ],
        platforms: ["web", "devtool", "diagramming"],
        downloads: [
            {
                platform: "web",
                url: "/tools/mermaid-on-steroids",
                label: "Open Project",
                external: true,
            },
            {
                platform: "web",
                url: "https://github.com/sabiqsabry/Mermaid-On-Steroids",
                label: "View Source",
                external: true,
            },
        ],
        developer: "Sabiq Sabry",
    },
];
