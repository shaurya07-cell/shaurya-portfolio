export interface JourneyMilestone {
  id: string;
  period: string;
  yearLabel: string;
  title: string;
  category: "School & Foundations" | "College & Academics" | "Hackathons & Wins" | "Leadership & Community" | "Future";
  description: string;
  expandedDetails?: string;
  highlightBadge?: string;
  isSpecialHighlight?: boolean;
  accentColor: "cyan" | "indigo" | "blue" | "amber" | "emerald" | "purple" | "rose" | "orange" | "violet" | "pink";
  iconName: string;
  tags: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "m-1",
    period: "2011 – 2023",
    yearLabel: "2011–23",
    title: "Building My Foundation",
    category: "School & Foundations",
    description: "Completed my schooling journey and passed Class 10 with 80%.",
    expandedDetails:
      "Cultivated discipline, problem-solving habits, and an early curiosity for how mathematical concepts and computers could solve real problems.",
    highlightBadge: "80% – Class 10",
    isSpecialHighlight: true,
    accentColor: "cyan",
    iconName: "GraduationCap",
    tags: ["Schooling", "Foundations", "Class 10 Board", "Academics"],
  },
  {
    id: "m-2",
    period: "2023 – 2024",
    yearLabel: "2023–24",
    title: "Exploring Science",
    category: "School & Foundations",
    description:
      "Chose Physics, Chemistry, and Mathematics (PCM) and began exploring science, mathematics, and different possibilities for my future.",
    expandedDetails:
      "Dove deep into calculus, coordinate geometry, mechanics, and physical sciences, cementing a structured analytical mindset that directly transferred to algorithms.",
    accentColor: "indigo",
    iconName: "Compass",
    tags: ["PCM", "Pure Sciences", "Exploration", "Logic"],
  },
  {
    id: "m-3",
    period: "2024 – 2025",
    yearLabel: "2024–25",
    title: "The Board Examination Chapter",
    category: "School & Foundations",
    description: "Entered my final year of school, completed my CBSE Class 12 board examinations, and secured 75%.",
    expandedDetails:
      "Balanced demanding board exam preparations with self-directed explorations into computer applications and higher competitive exams.",
    highlightBadge: "75% – Class 12",
    isSpecialHighlight: true,
    accentColor: "blue",
    iconName: "FileCheck",
    tags: ["CBSE Board", "Senior Secondary", "Class 12", "Academics"],
  },
  {
    id: "m-4",
    period: "April 2025",
    yearLabel: "Apr 2025",
    title: "The JEE Milestone",
    category: "College & Academics",
    description:
      "Appeared for JEE Main and achieved 93 percentile. I received an opportunity to pursue engineering at a government college in Delhi, but due to personal circumstances, I missed the counselling process. It was an unexpected setback and a turning point in my journey.",
    expandedDetails:
      "Missing the counseling window after a 93 percentile was a testing moment, but it became my greatest catalyst for mental toughness, resilience, and taking total ownership of my destiny.",
    highlightBadge: "93 Percentile – JEE Main",
    isSpecialHighlight: true,
    accentColor: "amber",
    iconName: "Target",
    tags: ["JEE Main", "93 Percentile", "Turning Point", "Resilience"],
  },
  {
    id: "m-5",
    period: "August 2025",
    yearLabel: "Aug 2025",
    title: "A New Beginning at RIT",
    category: "College & Academics",
    description:
      "Decided to step outside Delhi and begin a new chapter at Roorkee Institute of Technology (RIT Roorkee), pursuing B.Tech in Computer Science and Engineering (AI/ML).",
    expandedDetails:
      "Stepping into an independent campus environment outside my hometown fueled my hunger to learn quickly, build software, and delve deep into modern Artificial Intelligence.",
    accentColor: "emerald",
    iconName: "Rocket",
    tags: ["RIT Roorkee", "B.Tech CSE", "AI & ML", "Freshman Year"],
  },
  {
    id: "m-6",
    period: "November 2025",
    yearLabel: "Nov 2025",
    title: "My First Hackathon",
    category: "Hackathons & Wins",
    description:
      "Participated in my first hackathon. It was my first experience turning ideas into working solutions under pressure and collaborating with a team.",
    expandedDetails:
      "Wrote code continuously through the night, faced merge conflicts, tackled tight sprint deadlines, and delivered our first functional demo to evaluators.",
    accentColor: "purple",
    iconName: "Terminal",
    tags: ["Hackathon Debut", "Fast Prototyping", "Teamwork", "Sprint Building"],
  },
  {
    id: "m-7",
    period: "December 2025",
    yearLabel: "Dec 2025",
    title: "My First Top 5 Finish",
    category: "Hackathons & Wins",
    description:
      "Participated in my second hackathon and secured a Top 5 position. Although we didn't win, the experience strengthened my problem-solving mindset and teamwork.",
    expandedDetails:
      "Refined how we presented our architecture, handled live demos smoothly, and realized the immense value of rapid technical iteration.",
    highlightBadge: "Top 5 – December Hackathon",
    isSpecialHighlight: true,
    accentColor: "amber",
    iconName: "Trophy",
    tags: ["Top 5 Finish", "Hackathon", "Problem Solving", "Team Synergy"],
  },
  {
    id: "m-8",
    period: "January 2026",
    yearLabel: "Jan 2026",
    title: "First Semester – A Learning Curve",
    category: "College & Academics",
    description: "Completed my first odd semester. Due to health issues, I missed one examination, resulting in an academic backlog.",
    expandedDetails:
      "A raw, honest lesson in physical health and balance. It eliminated any fear of failure and instilled the grit to work twice as hard to clear backlogs while excelling in tech.",
    accentColor: "rose",
    iconName: "HeartPulse",
    tags: ["Semester 1", "Health & Balance", "Learning Curve", "Mental Grit"],
  },
  {
    id: "m-9",
    period: "March 2026",
    yearLabel: "Mar 2026",
    title: "Growth Through Challenges",
    category: "Hackathons & Wins",
    description:
      "Participated in another hackathon and secured a Top 7 position. My second-semester results were also announced, with an SGPA of 6.0 and one pending backlog.",
    expandedDetails:
      "Showed that setbacks don't define trajectory. While managing coursework, I continued shipping code and proving my mettle on competitive hackathon stages.",
    highlightBadge: "Top 7 – March Hackathon",
    isSpecialHighlight: true,
    accentColor: "orange",
    iconName: "TrendingUp",
    tags: ["Top 7 Finalist", "Persistence", "Hackathon", "Academic Resilience"],
  },
  {
    id: "m-10",
    period: "April 2026",
    yearLabel: "Apr 2026",
    title: "Leading Anugoonj 2K26",
    category: "Leadership & Community",
    description:
      "Got the opportunity to work as a coordinator for Anugoonj 2K26, one of the biggest college fests at RIT. This experience introduced me to large-scale event coordination, teamwork, and leadership.",
    expandedDetails:
      "Managed logistics, stage scheduling, volunteer coordination, and crowd communication for hundreds of participants, discovering a natural aptitude for leadership.",
    accentColor: "violet",
    iconName: "Sparkles",
    tags: ["Anugoonj 2K26", "Fest Coordinator", "Campus Leadership", "Event Ops"],
  },
  {
    id: "m-11",
    period: "May 2026",
    yearLabel: "May 2026",
    title: "Joining GDG on Campus RIT",
    category: "Leadership & Community",
    description:
      "Joined Google Developer Groups on Campus – RIT Roorkee as the PR & Outreach Lead. Started contributing to the developer community through outreach, technical events, workshops, and student engagement.",
    expandedDetails:
      "Spearheaded PR campaigns, connected student developers with technical mentors, and fostered an active open developer culture on campus.",
    highlightBadge: "GDG on Campus – PR & Outreach Lead",
    isSpecialHighlight: true,
    accentColor: "blue",
    iconName: "Megaphone",
    tags: ["GDGoC RIT", "Google Developer Groups", "PR & Outreach", "Community Lead"],
  },
  {
    id: "m-12",
    period: "June – July 2026",
    yearLabel: "Jun–Jul 2026",
    title: "A Challenging Phase",
    category: "College & Academics",
    description:
      "Went through a difficult personal phase while preparing for my second-semester examinations. It wasn't the easiest period, but it taught me lessons beyond academics.",
    expandedDetails:
      "Faced emotional hurdles and mental fatigue head-on. Built inner peace, emotional patience, and unbreakable focus that solidified my commitment to personal growth.",
    accentColor: "indigo",
    iconName: "Shield",
    tags: ["Self-Reflection", "Mental Toughness", "Endurance", "Life Lessons"],
  },
  {
    id: "m-13",
    period: "August 2026",
    yearLabel: "Aug 2026",
    title: "My First Hackathon Victory – Flora AI",
    category: "Hackathons & Wins",
    description:
      "Won my first online hackathon with my project Flora AI, an AI-powered product intelligence platform. Also completed my first year of B.Tech and participated in the GDG RIT induction session, where our team introduced freshers to the developer community and its opportunities.",
    expandedDetails:
      "Engineered Flora AI with Gemini API, Python OCR, and Next.js to extract insights from multi-format enterprise documents. Stepped on the podium as Winner, capping off Year 1 on a glorious high.",
    highlightBadge: "Flora AI – First Hackathon Winner",
    isSpecialHighlight: true,
    accentColor: "emerald",
    iconName: "Award",
    tags: ["Flora AI", "1st Place Winner", "GDG Induction", "Year 1 Completed", "Gemini API"],
  },
  {
    id: "m-14",
    period: "September 2026",
    yearLabel: "Sep 2026",
    title: "Welcome to Second Year",
    category: "College & Academics",
    description:
      "Started my second year at RIT Roorkee, stepping into a new role as a senior and embracing new responsibilities. Participated in two hackathons during the month.",
    expandedDetails:
      "Transitioned from learner to mentor for juniors, took on deeper departmental responsibilities, and doubled down on agentic AI workflows across two weekend hackathons.",
    accentColor: "cyan",
    iconName: "Users",
    tags: ["Sophomore Year", "Senior Role", "Junior Mentorship", "2 Hackathons"],
  },
  {
    id: "m-15",
    period: "October 2026",
    yearLabel: "Oct 2026",
    title: "Fetch-A-Thon 3.0 & New Experiences",
    category: "Hackathons & Wins",
    description:
      "Met Striver (Take U Forward) and captured a memorable photograph with him. Took on the responsibility of coordinating Fetch-A-Thon 3.0 as part of GDG on Campus RIT Roorkee. Alongside organizing the hackathon, participated with my team and secured a place among the Top 24 teams in India.",
    expandedDetails:
      "Meeting Striver inspired me to double down on Data Structures and deep computer science fundamentals. Co-leading Fetch-A-Thon 3.0 and placing in the Top 24 nationally with our autonomous agent solution was surreal.",
    highlightBadge: "Top 24 India – Fetch-A-Thon 3.0",
    isSpecialHighlight: true,
    accentColor: "pink",
    iconName: "Zap",
    tags: ["Met Striver (TUF)", "Fetch-A-Thon 3.0", "Top 24 in India", "Agentic AI", "Fetch.ai"],
  },
  {
    id: "m-16",
    period: "November 2026 – Beyond",
    yearLabel: "Nov 2026+",
    title: "Beyond the Milestones",
    category: "Future",
    description:
      "The journey continues. More ideas to build, technologies to explore, communities to lead, and challenges to overcome.",
    expandedDetails:
      "Focusing on Agentic AI frameworks, open source contributions, production-grade full-stack architectures, and inspiring the next generation of builders.",
    highlightBadge: "The Journey Continues",
    isSpecialHighlight: true,
    accentColor: "purple",
    iconName: "Flame",
    tags: ["Still Learning", "Still Building", "Still Becoming", "Agentic AI", "Unstoppable"],
  },
];

// Backward-compatible alias for existing imports if any
export const journeyData = journeyMilestones;
