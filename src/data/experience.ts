export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type: "Professional Work / Project" | "Freelance / Professional Project" | "Internship";
  duration: string;
  location?: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  focusAreas?: string[];
  highlightBadge?: string;
  isSpecialHighlight?: boolean;
  projectUrl?: string;
  accentColor: "emerald" | "amber" | "blue" | "purple";
  iconName: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-flora-ai",
    organization: "Flora AI",
    role: "AI Product Intelligence Platform Developer",
    type: "Professional Work / Project",
    duration: "August 2026",
    location: "Remote / Hackathon Project",
    description:
      "Developed Flora AI, an AI-powered product intelligence platform that extracts, processes, and organizes product information from PDFs, images, Excel sheets, and catalogs. This project also became my first hackathon-winning project.",
    responsibilities: [
      "Engineered automated document intelligence pipeline extracting multi-modal product specs from PDFs, spreadsheets, and scanned catalogs.",
      "Integrated Gemini API and OCR technologies to classify unstructured data into structured searchable catalogs.",
      "Designed an intuitive React & Tailwind CSS dashboard with responsive search filters and real-time processing indicators.",
    ],
    achievements: [
      "Secured 1st Place — Won my first hackathon among competitive student developer submissions.",
      "Built end-to-end functional prototype delivering sub-3-second parsing across complex commercial catalogs.",
    ],
    technologies: ["Python", "React.js", "Tailwind CSS", "MongoDB", "Gemini API", "OCR"],
    highlightBadge: "First Hackathon Victory",
    isSpecialHighlight: true,
    projectUrl: "https://github.com/shaurya07-cell/flora-ai-platform",
    accentColor: "emerald",
    iconName: "Award",
  },
  {
    id: "exp-automobile",
    organization: "Automobile Business Website",
    role: "Web Developer",
    type: "Freelance / Professional Project",
    duration: "September 2026",
    location: "Freelance / Client Engagement",
    description:
      "Designed and developed a professional website for an automobile business, focusing on showcasing business information, services, and establishing a user-friendly digital presence.",
    responsibilities: [
      "Architected clean, modern business presence highlighting vehicle servicing packages, company history, and appointment inquiries.",
      "Created tailored UI/UX layouts focusing on high conversion, clear contact touchpoints, and mobile accessibility.",
      "Optimized website assets, typography, and page responsiveness to ensure rapid loading on cellular devices.",
    ],
    achievements: [
      "Delivered a production-ready digital brand identity driving customer inquiry engagement.",
      "Achieved 95+ Google Lighthouse performance and accessibility scores across mobile and desktop.",
    ],
    technologies: [
      "Frontend Development",
      "UI/UX Design",
      "Responsive Web Design",
      "Business Website Development",
      "React.js",
      "Tailwind CSS",
    ],
    focusAreas: [
      "Frontend Development",
      "UI/UX Design",
      "Responsive Web Design",
      "Business Website Development",
    ],
    highlightBadge: "Real-World Business Project",
    isSpecialHighlight: false,
    accentColor: "amber",
    iconName: "Globe",
  },
  {
    id: "exp-code-alpha",
    organization: "Code Alpha",
    role: "Frontend Developer",
    type: "Internship",
    duration: "May 2026 – July 2026",
    location: "Virtual Internship",
    description:
      "Worked as a Software Development Intern at Code Alpha, gaining practical exposure to software development workflows, technical problem-solving, and hands-on development experience.",
    responsibilities: [
      "Engineered modular frontend user interfaces following modern component architecture and clean code best practices.",
      "Collaborated through agile developer workflows, Git version control, and team technical problem-solving.",
      "Translated UI wireframes into responsive, cross-browser compatible web experiences with interactive states.",
    ],
    achievements: [
      "Successfully completed rigorous internship milestones and delivered hands-on software development tasks on schedule.",
      "Strengthened practical engineering problem-solving and software development lifecycle knowledge.",
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Git & GitHub", "HTML5/CSS3", "REST APIs"],
    highlightBadge: "Software Development Internship",
    isSpecialHighlight: false,
    accentColor: "blue",
    iconName: "Briefcase",
  },
];
