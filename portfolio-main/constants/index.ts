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
      url: "/elafda.webp",
      width: 400,
      height: 200,
      alt: "E-Lafda Platform - Discussion Platform with Twitter Integration"
    },
    urls: {
      githubUrl: "https://github.com/icantcodefyi/elafda",
      liveUrl: "https://elafda.fun/",
    },
    description: "A comprehensive discussion platform built with Next.js 15, featuring Twitter integration, interactive polls, threaded comments, and modern UI/UX. Includes dynamic e-lafda pages, real-time voting, and rich media support with server components and TypeScript.",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS"
    ]
  },
  {
    name: "Bio-Wizard",
    slug: "doblar",
    image: {
      url: "/doblar.webp",
      width: 400,
      height: 200,
      alt: "Doblar - Local Image Converter"
    },
    urls: {
      liveUrl: "https://doblar.ani.ink/",
    },
    description: "Doblar is a fully local image converter. No files are sent anywhere as the conversion is completely local, ensuring privacy and security while converting between different image formats.",
    tags: [
      "Image Converter",
      "Local Processing",
      "Privacy",
      "Web App",
      "TypeScript",
      "React"
    ]
  },
  {
    name: "Annapurna",
    slug: "annapurna",
    image: {
      url: "/annu.webp",
      width: 400,
      height: 200,
      alt: "Annu's Poems"
    },
    urls: {
      liveUrl: "https://annnu.art/",
    },
    description: "A collection of poems written by my precious - Annu.",
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
    name: "Detox",
    slug: "detox",
    image: {
      url: "/invoicely.png",
      width: 400,
      height: 200,
      alt: "Invoicely - Create Beautiful & Professional Invoices"
    },
    urls: {
      liveUrl: "https://invoicely.gg/",
      githubUrl: "https://github.com/legions-developer/invoicely"
    },
    description: "Invoicely is a simple and easy to use invoice generator where you can create beautiful and professional invoices in minutes. ~ Proudly OSS",
    tags: [
      "Next.js",
      "Typescript",
      "Pdfjs"
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
