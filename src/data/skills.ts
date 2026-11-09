export interface SkillItem {
  name: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: "languages" | "frontend" | "backend" | "ai" | "databases" | "cloud" | "tools";
  filterLabel: string;
  iconName: string;
  description: string;
  accentColor: "blue" | "purple" | "emerald" | "pink" | "cyan" | "amber" | "violet";
  skills: {
    name: string;
    level?: string; // Optional for backward compatibility with ResumeModal
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    categoryKey: "languages",
    filterLabel: "Programming",
    iconName: "Code",
    description: "Core languages used to engineer scalable systems, algorithms, and high-performance applications.",
    accentColor: "blue",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    filterLabel: "Frontend",
    iconName: "Layout",
    description: "Modern web standards, responsive styling engines, and component architectures.",
    accentColor: "purple",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Backend Development",
    categoryKey: "backend",
    filterLabel: "Backend",
    iconName: "Server",
    description: "Server runtimes, microservices, asynchronous request pipelines, and RESTful APIs.",
    accentColor: "emerald",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "AI, ML & Generative AI",
    categoryKey: "ai",
    filterLabel: "AI/ML",
    iconName: "BrainCircuit",
    description: "Cognitive computing, foundation models, multimodal extraction, and autonomous agent workflows.",
    accentColor: "pink",
    skills: [
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
      { name: "Generative AI" },
      { name: "Large Language Models (LLMs)" },
      { name: "Gemini API" },
      { name: "OCR" },
      { name: "Agentic AI" },
    ],
  },
  {
    title: "Databases & Data Management",
    categoryKey: "databases",
    filterLabel: "Databases",
    iconName: "Database",
    description: "NoSQL document stores, automated ingestion pipelines, and structured information extraction.",
    accentColor: "cyan",
    skills: [
      { name: "MongoDB" },
      { name: "Data Processing" },
      { name: "Document Intelligence" },
    ],
  },
  {
    title: "Cloud & DevOps",
    categoryKey: "cloud",
    filterLabel: "Cloud",
    iconName: "Cloud",
    description: "Cloud infrastructure, version control collaboration, and automated API connectivity.",
    accentColor: "amber",
    skills: [
      { name: "Google Cloud Platform (GCP)" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "API Integration" },
    ],
  },
  {
    title: "Developer Tools & Platforms",
    categoryKey: "tools",
    filterLabel: "Tools",
    iconName: "Wrench",
    description: "Productivity editors, API testing environments, agent sandboxes, and modern IDEs.",
    accentColor: "violet",
    skills: [
      { name: "VS Code" },
      { name: "Antigravity IDE" },
      { name: "Postman" },
      { name: "Agentverse" },
    ],
  },
];

export const marqueeTechnologies = [
  "Python",
  "React.js",
  "Gemini API",
  "FastAPI",
  "Agentic AI",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Google Cloud Platform (GCP)",
  "VS Code",
  "Git",
  "Antigravity IDE",
  "REST APIs",
  "C++",
  "Express.js",
  "Postman",
  "Agentverse",
  "Large Language Models (LLMs)",
  "OCR",
];
