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
        id: "everything",
        name: "everything",
        tagline: "Paste a link. Get the file.",
        description:
            "everything is a single-window download hub for macOS. Paste a link - a video URL, a magnet link, a .torrent file, or a plain HTTP/FTP address - and it works out what it is and fetches it. No browser extensions, no ad-riddled download sites, no separate app for every kind of file.\n\nTwo engines sit behind the one link field: a self-built fork of yt-dlp handles the ~1,800 sites it can extract from, and aria2 handles torrents, magnets, and direct transfers. Auto-detection picks the right one and tells you what it decided before anything starts downloading, with a Type dropdown to overrule it. Quality and format controls appear only when the link actually resolves to a video, because a control that quietly does nothing is worse than no control.\n\nEvery engine ships inside the app. yt-dlp, FFmpeg, QuickJS, and aria2 are all bundled, so it runs on a fresh Mac with nothing installed and nothing configured. aria2 is started as a private RPC server on a random loopback port with a random secret and dies with the app, so no daemon outlives it.\n\nBuilt with Flutter for Apple Silicon, macOS 12 and later. A Windows target is scaffolded and coming.",
        icon: "/products/everything/icon.png",
        features: [
            "One link field for videos, torrents, magnets, and direct HTTP/FTP",
            "Auto-detects the link type and shows its guess before downloading",
            "Type dropdown to overrule the guess when it gets it wrong",
            "Self-built yt-dlp fork covering the ~1,800 sites it can extract from",
            "aria2 for torrents and magnets, with live seeder and peer counts",
            "Every engine bundled - nothing to install, nothing to configure",
            "Live log pane with per-download progress, speed, and ETA",
            "Quality and format controls that appear only for video links",
        ],
        platforms: ["mac"],
        downloads: [],
        developer: "Sabiq Sabry - novusian",
        badge: "In Development",
        comingSoon: "macOS build coming soon - Windows to follow",
    },
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
            "Drive or Ride? answers one everyday question: for this trip, right now, is it cheaper to take your own vehicle or book a ride? Enter a start, a destination, and what you drive, and it compares your fuel cost against estimated PickMe and Uber fares for tuks, bikes, and cars.\n\nEstimates are adjusted for live traffic, time of day, and weather, using traffic-aware routing from Google Maps Platform. Sri Lanka is the main market; a few other countries work with fares you enter yourself.\n\nThe fare model is calibrated from real trips and keeps improving through anonymous quotes: enter the real fare you were offered and, if you choose to share it, a rounded, anonymous record helps tune future estimates. No names, place names, or device ids are ever stored.\n\nThe interface is a Liquid Glass UI rendered in a custom WebGL shader, built with React, TypeScript, and Vite. Fares are modelled and clearly labelled as estimates.",
        icon: "/products/drive-or-ride/icon.png",
        features: [
            "Fuel cost vs. PickMe / Uber fares for tuks, bikes, and cars",
            "Traffic-aware routing with live traffic, time of day, and weather",
            "Google Places search with a live route map",
            "Fare model calibrated from real trips",
            "Anonymous, opt-in fare quotes that improve future estimates",
            "Liquid Glass UI rendered in a custom WebGL shader",
            "Light and dark themes",
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
