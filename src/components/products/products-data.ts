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
            "Blankr. is a minimal, zero-distraction note-taking app for macOS built around a single idea - open it and start writing immediately.\n\nNo dashboards. No accounts. No sync. No save button. No onboarding. No noise. Just a blank page and your words.\n\nThe moment you launch Blankr. you are greeted with nothing but a clean, empty writing surface with your cursor already waiting. When you are done, you simply close the app. Everything you wrote is automatically saved as a plain .txt file directly to your Desktop - timestamped, readable, and yours. No hidden folders. No proprietary formats. No lock-in.\n\nA slim formatting panel sits quietly on the side with only the essentials - bold, italic, underline, font size, and alignment. Nothing more. The writing canvas is always the focus.\n\nBlankr. does not try to organize your life. It does not try to be smart. It just gets out of your way completely.",
        icon: "/products/blankr/icon.png",
        features: [
            "Opens instantly to a blank writing canvas every time",
            "Auto-saves to your Desktop as a .txt file on close - no save button ever",
            "Timestamp-based file naming for effortless organization",
            "Minimal formatting panel with only the essentials",
            "Opens existing .txt files when double-clicked from Finder",
            "Fully offline, fully private, zero telemetry",
            "Native macOS app built with Swift and SwiftUI",
        ],
        platforms: ["mac"],
        downloads: [
            {
                platform: "mac",
                url: "/products/blankr/Blankr-1.0.0-macOS.dmg",
                label: "Download for Mac",
            },
        ],
        developer: "Sabiq Sabry - novusian",
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
