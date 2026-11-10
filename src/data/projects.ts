export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  challenges: string[];
  result: string;
  keyFeatures: string[];
  category: "Cybersecurity" | "AI / ML" | "Web Development" | "EdTech" | "Healthcare";
  categories: string[];
  github: string;
  liveDemo?: string;
  featured?: boolean;
  year: string;
  status: "Flagship Project" | "Hackathon Winner" | "Completed" | "Conceptual Project";
  badge?: string;
  accentColor: "cyan" | "emerald" | "blue" | "purple" | "rose" | "amber";
  image?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-sentinel-ai",
    slug: "sentinel-ai",
    title: "SENTINEL-AI",
    tagline: "Autonomous Cyber Reasoning & Verified Defense",
    description:
      "An AI-powered autonomous cybersecurity platform designed to detect vulnerabilities, collect evidence, reason about security issues, generate remediation strategies, verify fixes, and perform regression testing.",
    longDescription:
      "SENTINEL-AI acts as an autonomous cyber reasoning agent for engineering codebases. By parsing Python project ZIP archives down into Abstract Syntax Trees (AST) and analyzing call graphs, it pinpoints security vulnerabilities, constructs empirical evidence trails, prompts Gemini API with contextual telemetry to generate automated patches, and validates regression test suites to guarantee zero breaking changes.",
    problem:
      "Security auditing is traditionally slow, manual, and reactive. Developers frequently ship vulnerable code or spend hours writing regression checks to ensure patches do not break mission-critical logic.",
    solution:
      "Engineered an automated end-to-end AST static analysis pipeline paired with Gemini API reasoning to autonomously detect vulnerabilities, formulate remediation patches, and execute verified fix checks.",
    myRole: "Lead Cybersecurity Architect & AI Systems Engineer",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "AST Static Analysis",
    ],
    challenges: [
      "Navigating nested Python AST syntax trees to accurately trace user input injection paths.",
      "Structuring prompt contexts for Gemini API to produce syntactically valid and targeted security diffs.",
      "Automating sandboxed regression tests to guarantee patches do not introduce unintended side effects.",
    ],
    result:
      "Flagship cybersecurity engineering project providing verified vulnerability mitigation workflows with evidence logging.",
    keyFeatures: [
      "Automated vulnerability detection",
      "Evidence collection and analysis",
      "AI-powered security reasoning",
      "Remediation recommendations",
      "Security fix verification",
      "Regression testing",
      "Python project ZIP upload and AST-based static analysis",
    ],
    category: "Cybersecurity",
    categories: ["Cybersecurity", "AI/ML"],
    github: "https://github.com/shaurya07-cell/Sentinel-ai",
    featured: true,
    year: "2026",
    status: "Flagship Project",
    badge: "Flagship Engineering Project",
    accentColor: "cyan",
  },
  {
    id: "proj-flora-ai",
    slug: "flora-ai",
    title: "FLORA AI",
    tagline: "AI-Powered Product Intelligence Platform",
    description:
      "An AI-powered document intelligence platform that extracts, processes, and organizes product information from PDFs, images, Excel sheets, and catalogs, transforming unstructured information into organized and accessible data.",
    longDescription:
      "Flora AI eliminates manual product data entry by leveraging OCR and Gemini API multimodal understanding. It digests unstructured supplier PDFs, scanned catalog images, and spreadsheets, extracting structured product catalogs, technical specs, and pricing information with sub-3-second indexing into MongoDB.",
    problem:
      "Retailers and enterprise procurement teams waste dozens of hours every week manually copying product specifications from inconsistent PDF catalogs and spreadsheet exports.",
    solution:
      "Built an AI-powered document intelligence pipeline using Python OCR, Gemini API, and MongoDB, paired with a sleek React & Tailwind CSS dashboard for instant searchable product indexing.",
    myRole: "AI Integration & Full Stack Developer",
    technologies: ["Python", "React", "Tailwind CSS", "MongoDB", "Gemini API", "OCR"],
    challenges: [
      "Accurately parsing tabular data and multi-column catalog specs from low-resolution scanned pages.",
      "Optimizing multimodal token usage while maintaining high accuracy across diverse document layouts.",
      "Building responsive real-time processing indicators for heavy batch uploads.",
    ],
    result:
      "First Online Hackathon Winner (August 2026) — Recognized for practical real-world utility and fast document processing.",
    keyFeatures: [
      "PDF information extraction",
      "Image-based information processing",
      "Excel sheet processing",
      "Product catalog intelligence",
      "AI-powered document understanding",
    ],
    category: "AI / ML",
    categories: ["AI/ML"],
    github: "https://github.com/shaurya07-cell/flora-ai-platform",
    featured: false,
    year: "2026",
    status: "Hackathon Winner",
    badge: "First Online Hackathon Winner – Aug 2026",
    accentColor: "emerald",
  },
  {
    id: "proj-easeattend",
    slug: "easeattend",
    title: "EASEATTEND",
    tagline: "Smart Attendance Management System",
    description:
      "A web-based attendance management platform designed to simplify attendance-related requests through separate dashboards for students, teachers, and HODs.",
    longDescription:
      "EaseAttend revolutionizes institutional attendance workflows by replacing paper forms with a transparent, role-based approval chain. Students can submit attendance exemption requests with photo/document proofs, while teachers and Head of Departments (HODs) review, verify, and approve records through dedicated real-time control panels.",
    problem:
      "College attendance medical exemption proofs and event leaves get lost in manual paper bureaucracy, leading to disputes, lost records, and delayed semester clearance.",
    solution:
      "Designed a full-stack web platform with separate Student, Teacher, and HOD dashboards, verified image document uploads, and an automated multi-tier approval workflow.",
    myRole: "Full Stack Web Developer & UI Designer",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    challenges: [
      "Designing strict role-based access control (RBAC) across three distinct user hierarchies.",
      "Implementing secure document upload pipelines with validation for medical & official proofs.",
      "Building intuitive status-tracking timelines for students to monitor approvals in real time.",
    ],
    result:
      "Presented at competitive collegiate tech events, demonstrating streamlined student-faculty attendance automation.",
    keyFeatures: [
      "Student dashboard",
      "Teacher dashboard",
      "HOD dashboard",
      "Attendance proof submission",
      "Image-based document uploads",
      "Attendance approval workflow",
    ],
    category: "Web Development",
    categories: ["Web Development", "EdTech"],
    github: "https://github.com/shaurya07-cell/Easeattend",
    featured: false,
    year: "2026",
    status: "Completed",
    badge: "3-Dashboard Architecture (Student, Teacher, HOD)",
    accentColor: "amber",
  },
  {
    id: "proj-explainme",
    slug: "explainme",
    title: "EXPLAINME",
    tagline: "AI Learning Assistant",
    description:
      "An AI-powered educational assistant conceptualized to simplify complex academic topics into easy-to-understand explanations, making learning more accessible and interactive.",
    longDescription:
      "ExplainMe is an AI-powered educational assistant designed to break down dense textbook chapters, computer science concepts, and mathematical theories into intuitive, student-friendly analogies, interactive summaries, and progressive difficulty questions.",
    problem:
      "Students often hit roadblocks when textbooks use dense academic jargon without relatable analogies, slowing down comprehension and discouraging self-guided learning.",
    solution:
      "Conceptualized an interactive AI tutor leveraging large language models to adapt explanations to a student's current skill level, generating simplified summaries and mental models.",
    myRole: "System Designer & AI Prompt Architect",
    technologies: ["Python", "Gemini API", "React", "Tailwind CSS", "Educational AI"],
    challenges: [
      "Designing system prompts that prioritize pedagogical clarity and analogies without sacrificing factual accuracy.",
      "Structuring progressive breakdown layers from high-level intuition down to technical mechanics.",
    ],
    result:
      "Conceptualized AI project targeting democratized STEM education and personalized learning assistance.",
    keyFeatures: [
      "Adaptive academic concept simplification",
      "Context-aware interactive Q&A",
      "Student-friendly analogies & mental models",
      "Topic breakdown into progressive tiers",
      "Self-paced interactive revision summaries",
    ],
    category: "EdTech",
    categories: ["EdTech", "AI/ML"],
    github: "https://github.com/shaurya07-cell",
    featured: false,
    year: "2026",
    status: "Conceptual Project",
    badge: "Conceptual AI Project",
    accentColor: "purple",
  },
  {
    id: "proj-mediplus",
    slug: "mediplus",
    title: "MEDIPLUS",
    tagline: "Digital Healthcare Platform",
    description:
      "A digital healthcare solution conceptualized to simplify access to medical information and healthcare-related services through a user-friendly platform.",
    longDescription:
      "Mediplus is conceptualized as a modern digital health portal that bridges the gap between everyday patients and healthcare resources. Featuring an accessible medical information directory, intuitive service booking, and clean health records overview, it simplifies healthcare navigation.",
    problem:
      "Patients frequently struggle with fragmented medical portals, cluttered appointment interfaces, and difficulty accessing basic preventative care information.",
    solution:
      "Formulated a clean, user-centric healthcare platform layout prioritizing accessibility, clear service listings, and simplified medical guidance.",
    myRole: "UI/UX Designer & Frontend Architect",
    technologies: ["React", "Node.js", "Tailwind CSS", "REST APIs", "UI/UX Design"],
    challenges: [
      "Crafting an empathetic, high-contrast healthcare UI accessible to diverse age demographics.",
      "Designing clean data schema models for patient service requests and medical provider listings.",
    ],
    result:
      "Conceptualized healthcare technology platform focused on human-centric digital patient wellness.",
    keyFeatures: [
      "Patient health information portal",
      "Digital healthcare appointment interface",
      "Accessible medical service directory",
      "High-contrast, user-friendly navigation",
      "Structured health inquiry workflow",
    ],
    category: "Healthcare",
    categories: ["Healthcare", "Web Development"],
    github: "https://github.com/shaurya07-cell",
    featured: false,
    year: "2026",
    status: "Conceptual Project",
    badge: "Conceptual Healthcare Solution",
    accentColor: "rose",
  },
];
