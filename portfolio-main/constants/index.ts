interface Project {
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    source?: string;
  };
  urls: {
    githubUrl?: string;
    liveUrl?: string;
    [key: string]: string | undefined;
  };
  description: string;
  tags: string[];
}

export const Projects: Project[] = [
  {
    name: "Refelia",
    slug: "refelia",
    image: {
      url: "/refelia.webp",
      width: 400,
      height: 200,
      alt: "Refilia – Water Refill Station Locator Across India with Clean UI and Sustainability Focus"
    },
    urls: {
      githubUrl: "https://github.com/IamBATMaN420/refilia_landing",
      liveUrl: "https://refilia-landing.vercel.app/",
    },
    description: "Refilia is a public utility platform that helps users locate free and low-cost water refill stations across India. Built with Next.js 15 and TypeScript, it promotes sustainable hydration by mapping refill points, public water ATMs, and partner cafés. With Twitter integration, real-time station updates, and a clean, responsive UI, Refilia empowers communities to reduce plastic use and access clean drinking water effortlessly.",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS"
    ]
  },
  {
    name: "Detoxxx",
    slug: "detox",
    image: {
      url: "/detox.webp",
      width: 400,
      height: 200,
      alt: "Detox - YT distraction remover"
    },
    urls: {
      githubUrl:"https://github.com/IamBATMaN420/detox",
      liveUrl: "https://chromewebstore.google.com/detail/detoxxx/gnakihjdkdnidjafcnafpjlgjhedepei?hl=en-GB&authuser=0",
    },
    description: "Detox is a distraction-free YouTube search tool. Built with WXT, React, and TypeScript, it removes recommendations and trending content to help you stay focused and consume videos intentionally without clickbait.",
    tags: [
"YouTube Tool",
  "Distraction-Free",
  "Content Filtering",
  "WXT",
  "React",
  "TypeScript"
    ]
  },
  {
    name: "DummyDB",
    slug: "dummy",
    image: {
      url: "/dummy.webp",
      width: 400,
      height: 200,
      alt: "dummy DB"
    },
    urls: {
      liveUrl: "https://dummy-db.vercel.app/",
    },
    description: "An AI-powered SQL assistant that lets you talk to your data using natural language—query, analyze, and explore with ease.",
    tags: [
      "Next.js",
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
    ]
  },
  {
    name: "ChotuBill",
    slug: "cb",
    image: {
      url: "/chotu.webp",
      width: 400,
      height: 200,
      alt: "ChotuBill - Create Beautiful & Professional Invoices for small bussi"
    },
    urls: {
      liveUrl: "https://chotubill.vercel.app",
      githubUrl: "https://github.com/IamBATMaN420/chotubill"
    },
    description: "Chotu Bill is a fast, no-login invoice generator built for freelancers and indie devs. Create clean, professional invoices in seconds — no clutter, no accounts. ~ Proudly OSS",
    tags: [
      "Next.js",
      "Typescript",
      "Pdfjs",
      "Twilo"
    ]
  },
  {
    name: "BioWizard",
    slug: "bw",
    image: {
      url: "/lms.webp",
      width: 400,
      height: 200,
      alt: "Biowizard - Ace NEET Biology with expert"
    },
    urls: {
      liveUrl: "https://lms-freelance.vercel.app/",
    },
    description: "Ace NEET Biology with expert-led videos, killer notes, and smart tests — all in one place.",
    tags: [
       "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "EdTech",
    "LMS",
    "NEET Biology"
    ]
  },
  {
    name: "My Portfolio v0",
    slug: "portV0",
    image: {
      url: "/port.webp",
      width: 400,
      height: 200,
      alt: "PortfolioV0 - my first portfolio"
    },
    urls: {
      liveUrl: "https://ayushworks.vercel.app/",
      githubUrl: "https://github.com/IamBATMaN420/portfolio-v1"
    },
   description: "My first portfolio project — a modern typing practice app built with Next.js and TypeScript. It features coding snippets, real-time stats, customizable themes, and language-specific practice modes to make typing both fun and developer-friendly.",
    tags: [
      "Next.js",
      "TypeScript",
      "Typing Practice",
      "Themes",
      "Code Snippets",
      "Tailwind CSS"
    ]
  },
  {
    name: "chotubill",
    slug: "chotubill",
    image: {
      url: "/urban.webp",
      width: 400,
      height: 200,
      alt: "UrbanOps – Smart City Dashboard for Real-Time Incident Management"
    },
    urls: {
      liveUrl: "https://urbanops.vercel.app/",
    },
    description: "UrbanOps is a smart city command dashboard that monitors real-time incidents across Bengaluru. It features AI-driven event detection, response analytics, and city-wide coverage with live maps, citizen reports, and system health monitoring.",
    tags: [
       "Smart City",
    "AI",
    "Real-Time Dashboard",
    "Next.js",
    "TypeScript",
    "Incident Management",
    "Data Visualization"
    ]
  },
];
