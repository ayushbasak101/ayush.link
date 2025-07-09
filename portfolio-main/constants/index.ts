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
    name: "DummyDB",
    slug: "dummydb",
    image: {
      url: "/autodiagram.webp",
      width: 400,
      height: 200,
      alt: "AutoDiagram - AI Powered Diagram Generation"
    },
    urls: {
      liveUrl: "https://autodiagram.com/",
      githubUrl: "https://github.com/icantcodefyi/diagram"
    },
    description: "An AI-powered diagram generation tool that transforms text descriptions into professional diagrams. Supports 20+ diagram types including flowcharts, ER diagrams, architecture maps, and sequence diagrams with intelligent suggestions and error prevention.",
    tags: [
      "AI",
      "Diagram Generation",
      "Next.js",
      "TypeScript",
      "SVG",
      "SaaS"
    ]
  },
  {
    name: "My Portfolio v0",
    slug: "portfolio0",
    image: {
      url: "/cattype.webp",
      width: 400,
      height: 200,
      alt: "CatType - A Modern Typing Practice App"
    },
    urls: {
      liveUrl: "https://cattype.live/",
      githubUrl: "https://github.com/icantcodefyi/cattype"
    },
    description: "A modern, customizable typing practice application featuring multiple themes, coding snippets, and real-time statistics. Built with Next.js and TypeScript, it offers various difficulty levels and programming language-specific practice modes.",
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
      url: "/aurastake.webp",
      width: 400,
      height: 200,
      alt: "Aurastake - Decentralized Productivity Tool"
    },
    urls: {
      liveUrl: "https://aurastake.xyz/",
    },
    description: "A decentralized productivity tool that uses SOL staking and Aura points to incentivize consistent daily work habits, with public leaderboards and GitHub-style streaks for accountability.",
    tags: [
      "Productivity",
      "Staking",
      "Solana",
      "Next.js",
      "TypeScript",
      "Leaderboards"
    ]
  },
];
