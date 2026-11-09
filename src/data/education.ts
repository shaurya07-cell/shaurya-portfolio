export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  specialization: string;
  duration: string;
  location: string;
  score?: string;
  highlights: string[];
  coursework: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Roorkee institute Of Technology",
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "CSE in (AIML)",
    duration: "2025 — 2029 (Expected)",
    location: "Roorkee, Uttarakhand, India",
    score: "CGPA: 5.9 / 10.0",
    highlights: [
      "PR & Outreach Lead – GDG on Campus RIT Roorkee | May 2026-Present",
      "Winner – Flora AI | First Online Hackathon | August 2026",
      "Top 24 Teams in India – Fetch-A-Thon 3.0 | october 2026",
      "Top 5 – GFG HackSprint | December 2025",
      "Core Coordinator – Anugoonj 2K26 | April 2026",


    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence",
    ],
  },
  {
    id: "edu-2",
    institution: "St.Xavier's Sr. Sec. School",
    degree: "Higher Secondary Certificate (CBSE Class XII)",
    specialization: "Science Stream (Physics, Chemistry, Math, CS)",
    duration: "2011 — 2023",
    location: "New Delhi, India",
    score: "Percentage: 75.6%",
    highlights: [
      "Amongs the Topper in Mathematics (93/100)",
      "was their in School Football Team",
    ],
    coursework: [
      "Mathematics & Calculus",
      "Leading and speaker",
      "sports person",
    ],
  },
];
