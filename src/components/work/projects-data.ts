import {
    Bot,
    Boxes,
    Camera,
    Car,
    Clapperboard,
    CloudSun,
    Flame,
    House,
    Leaf,
    ListChecks,
    MapPin,
    MessageCircle,
    MessagesSquare,
    Microscope,
    PiggyBank,
    Receipt,
    ShieldCheck,
    Smile,
    Sparkles,
    Stethoscope,
    Tags,
    Wallet,
    type LucideIcon,
} from "lucide-react"

/**
 * Personal projects shown on /work.
 *
 * To add one, append an entry below. `icon` is optional (any lucide-react icon);
 * without it the thumbnail uses the category's default icon. Categories with a
 * defined accent live in project-thumbnail.tsx.
 */
export interface Project {
    title: string
    category: string
    description: string
    href: string
    icon?: LucideIcon
}

export const projects: Project[] = [
    {
        title: "Drive or Ride?",
        icon: Car,
        category: "Web App",
        description: "Is it cheaper to drive or take PickMe / Uber? Fuel, live traffic and ride fares compared for Sri Lanka. React, TypeScript, Google Maps.",
        href: "/tools/drive-or-ride",
    },
    {
        title: "Carbon Compass",
        icon: Leaf,
        category: "AI & ML",
        description: "AI-powered sustainability report analyser and emissions calculator. Fact-checks corporate climate claims using NLP. Python, React, FastAPI.",
        href: "https://github.com/sabiqsabry/Carbon-Compass",
    },
    {
        title: "Spa Ceylon AI Assistant",
        icon: Sparkles,
        category: "AI & ML",
        description: "Claude-powered WhatsApp-style chatbot with ritual knowledge and Dosha quiz. Node.js, React, Claude AI.",
        href: "https://github.com/sabiqsabry/spa-ceylon-bot",
    },
    {
        title: "Gedara Rent",
        icon: House,
        category: "Web App",
        description: "Full-stack rental marketplace with booking system and dashboards. Next.js 14, Stripe, Prisma.",
        href: "https://github.com/sabiqsabry/gedara-rent",
    },
    {
        title: "Pash - Finance Tracker",
        icon: Wallet,
        category: "Web App",
        description: "AI-powered expense splitting and tracking with natural language input. Next.js, Gemini AI.",
        href: "https://github.com/sabiqsabry/Pash",
    },
    {
        title: "Inventory Manager",
        icon: Boxes,
        category: "Web App",
        description: "Manufacturing inventory system with production tracking and analytics. React, TypeScript.",
        href: "https://github.com/sabiqsabry/inventory-manager",
    },
    {
        title: "AlphabetBot",
        icon: Bot,
        category: "Robotics",
        description: "Industrial robot programming to draw the alphabet using RAPID. ABB RobotStudio.",
        href: "https://github.com/sabiqsabry/AlphabetBot",
    },
    {
        title: "Twitter Sentiment Analysis",
        icon: Smile,
        category: "AI & ML",
        description: "Comparative study of BiLSTM vs DistilBERT for sentiment classification. PyTorch, Transformers.",
        href: "https://github.com/sabiqsabry/Twitter-Sentiment-Bilstm-Distilbert",
    },
    {
        title: "Multimodal Pneumonia Diagnosis",
        icon: Stethoscope,
        category: "AI & ML",
        description: "Deep learning framework combining chest X-rays with medical records. 99.63% accuracy. Python, PyTorch.",
        href: "https://github.com/sabiqsabry/Multimodal-Pneumonia-Diagnosis",
    },
    {
        title: "ONCO - AI Cancer Diagnosis",
        icon: Microscope,
        category: "AI & ML",
        description: "AI-based cancer diagnosis platform using deep learning for medical prognosis. TensorFlow, Flask, Azure.",
        href: "https://github.com/Ammar-Raneez/ONCO",
    },
    {
        title: "Text Classification System",
        icon: Tags,
        category: "AI & ML",
        description: "NLP sentiment analysis and spam detection with Streamlit interface. Scikit-learn.",
        href: "https://github.com/sabiqsabry/Text-Classification-System",
    },
    {
        title: "BAWT - Behavior Analysis",
        icon: MessagesSquare,
        category: "AI & ML",
        description: "NLP model analyzing chat behavior and communication patterns.",
        href: "https://github.com/sabiqsabry/bawt",
    },
    {
        title: "Private Ad-Block Extension",
        icon: ShieldCheck,
        category: "Browser Extension",
        description: "Privacy-focused cross-browser ad-blocking with DNR. TypeScript.",
        href: "https://github.com/sabiqsabry/Private-Adblock-Extension",
    },
    {
        title: "Hisaab - Expense Sharing",
        icon: Receipt,
        category: "Web App",
        description: "Expense-sharing app with multi-currency support and PWA. React, TypeScript.",
        href: "https://github.com/sabiqsabry/Hisab",
    },
    {
        title: "Cling - Task Management",
        icon: ListChecks,
        category: "Desktop App",
        description: "Cross-platform desktop task app built with Tauri. React, Rust.",
        href: "https://github.com/sabiqsabry/Cling",
    },
    {
        title: "InstaSplash",
        icon: Camera,
        category: "Mobile App",
        description: "Instagram clone with Unsplash API integration. Flutter, Dart.",
        href: "https://github.com/sabiqsabry/Instagram-Clone",
    },
    {
        title: "TikTok Clone",
        icon: Clapperboard,
        category: "Mobile App",
        description: "Vertical video feed with autoplay and social features. Flutter.",
        href: "https://github.com/sabiqsabry/TikTok-Clone",
    },
    {
        title: "WhatsApp Clone",
        icon: MessageCircle,
        category: "Mobile App",
        description: "Real-time chat with Socket.io. Flutter, Firebase.",
        href: "https://github.com/sabiqsabry/Whatsapp-Clone",
    },
    {
        title: "Uber Clone",
        icon: MapPin,
        category: "Mobile App",
        description: "Ride-hailing app with GPS tracking. Flutter, Maps API.",
        href: "https://github.com/sabiqsabry/Uber-Clone",
    },
    {
        title: "Budget Buddy",
        icon: PiggyBank,
        category: "Mobile App",
        description: "Personal finance tracker with real-time sync. Flutter, Firebase.",
        href: "https://github.com/sabiqsabry/Budget-Buddy",
    },
    {
        title: "Weather & AQI Tracker",
        icon: CloudSun,
        category: "Mobile App",
        description: "Native iOS weather app. Swift, iOS.",
        href: "https://github.com/sabiqsabry/WeatherAirQuality",
    },
    {
        title: "Habit Ease",
        icon: Flame,
        category: "Mobile App",
        description: "Daily habit tracker with streak counting. Flutter, Hive.",
        href: "https://github.com/sabiqsabry/habit-tracker",
    },
];
