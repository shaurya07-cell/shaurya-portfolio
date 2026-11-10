export interface LeadershipStat {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
  accentColor: "pink" | "emerald" | "cyan" | "amber";
}

export interface CommunityPhoto {
  src: string;
  caption: string;
}

export interface CommunityExperience {
  id: string;
  orderNumber: string;
  event: string;
  role: string;
  year?: string;
  description: string;
  highlight?: string;
  category: string;
  accentColor: "indigo" | "violet" | "pink" | "blue" | "emerald" | "amber" | "cyan";
  iconName: string;
  tags: string[];
  photos?: CommunityPhoto[];
}

export const leadershipStats: LeadershipStat[] = [
  {
    id: "stat-presentations",
    value: "10+",
    label: "Technical Presentations",
    description: "On-stage talks, system breakdowns & project demos",
    iconName: "Presentation",
    accentColor: "pink",
  },
  {
    id: "stat-freshers",
    value: "600+",
    label: "Freshers Reached",
    description: "Addressed during the GDG RIT 2026 induction keynote",
    iconName: "Users",
    accentColor: "emerald",
  },
  {
    id: "stat-cloud-sessions",
    value: "5+",
    label: "Google Cloud Sessions",
    description: "Hands-on Study Jams, skill labs & interactive workshops",
    iconName: "Cloud",
    accentColor: "cyan",
  },
  {
    id: "stat-hackathon-rank",
    value: "Top 24",
    label: "Teams in India",
    description: "National standing achieved in Fetch-A-Thon 3.0",
    iconName: "Trophy",
    accentColor: "amber",
  },
];

export const communityExperiences: CommunityExperience[] = [
  {
    id: "lead-eloquence",
    orderNumber: "01",
    event: "Eloquence 2K25 – Inkspire Club",
    role: "Club Member & Event Organizer",
    year: "2025",
    description:
      "Contributed to organizing and conducting Eloquence 2K25 as a member of the Inkspire Club. Participated in event coordination, teamwork, and student engagement.",
    category: "Club Event Organization",
    accentColor: "indigo",
    iconName: "Sparkles",
    tags: ["Inkspire Club", "Event Coordination", "Teamwork", "Student Engagement"],
  },
  {
    id: "lead-anugoonj",
    orderNumber: "02",
    event: "Anugoonj 2K26 – RIT Roorkee",
    role: "Core Team Member & Event Coordinator",
    year: "April 2026",
    description:
      "Worked as a core team member and coordinator for Anugoonj 2K26, one of the major college festivals at RIT Roorkee. Contributed to event planning, coordination, team management, and execution.",
    category: "Campus Fest Leadership",
    accentColor: "violet",
    iconName: "Users",
    tags: ["Anugoonj 2K26", "Event Planning", "Team Management", "RIT Roorkee"],
    photos: [
      {
        src: "/anugoonj team.jpeg",
        caption: "Anugoonj 2K26 Core Organizing & Coordination Team at RIT Roorkee",
      },
      {
        src: "/coordinator appreciation anugoonjh.jpeg",
        caption: "Coordinator Appreciation Certificate for Anugoonj 2K26 execution",
      },
    ],
  },
  {
    id: "lead-presentations",
    orderNumber: "03",
    event: "Technical Presentations & Public Speaking",
    role: "Technical Presenter",
    description:
      "Presented 10+ projects and technical presentations on stage, sharing innovative ideas, explaining technical concepts, and showcasing project implementations to audiences.",
    highlight: "10+ Presentations",
    category: "Public Speaking & Demos",
    accentColor: "pink",
    iconName: "Presentation",
    tags: ["Public Speaking", "10+ Stage Demos", "Concept Breakdown", "Tech Evangelism"],
    photos: [
      {
        src: "/presenting my project in hackathon 2.jpeg",
        caption: "Presenting system architecture and live project demo on stage",
      },
    ],
  },
  {
    id: "lead-bootcamps",
    orderNumber: "04",
    event: "Build with AI Bootcamps – GDG RIT × Hack2Skill",
    role: "Bootcamp Volunteer",
    year: "2026",
    description:
      "Volunteered at Build with AI bootcamps organized in collaboration with GDG on Campus RIT Roorkee and Hack2Skill. Contributed to event operations, student engagement, and facilitating AI learning experiences.",
    category: "AI Bootcamp Operations",
    accentColor: "blue",
    iconName: "Cpu",
    tags: ["Build with AI", "Hack2Skill", "GDGoC RIT", "AI Enablement"],
    photos: [
      {
        src: "/Build with ai bootcamp team.jpeg",
        caption: "Build with AI Bootcamp Organizing & Volunteer Team (GDG RIT × Hack2Skill)",
      },
      {
        src: "/gdgrit x hack2skill bootcamp.jpeg",
        caption: "Guiding student developers through hands-on AI model deployment",
      },
    ],
  },
  {
    id: "lead-induction",
    orderNumber: "05",
    event: "GDG on Campus RIT – Induction 2026",
    role: "Community Representative & PR and Outreach Lead",
    year: "August 2026",
    description:
      "Represented Google Developer Groups on Campus RIT Roorkee during the 2026 induction programme. Introduced the developer community, its initiatives, technical opportunities, and upcoming activities to an audience of 600+ freshers.",
    highlight: "600+ Students Reached",
    category: "Community Keynote & Outreach",
    accentColor: "emerald",
    iconName: "Megaphone",
    tags: ["GDGoC RIT", "PR & Outreach Lead", "600+ Freshers", "Keynote Speaker"],
    photos: [
      {
        src: "/induction photo gdg rit guiding 600+ students.jpeg",
        caption: "Addressing 600+ freshers on stage during GDG RIT Induction 2026",
      },
      {
        src: "/gdg team present at induction 2026.jpeg",
        caption: "GDG on Campus RIT Core Team at Induction 2026",
      },
    ],
  },
  {
    id: "lead-fetchathon",
    orderNumber: "06",
    event: "Fetch-A-Thon 3.0 – GDG on Campus RIT",
    role: "Hackathon Coordinator & Core Team Member",
    year: "October 2026",
    description:
      "Coordinated Fetch-A-Thon 3.0, an Agentic AI hackathon organized by GDG on Campus RIT Roorkee. Contributed to event planning, volunteer coordination, participant engagement, and overall event execution. Also participated in the hackathon with my team and secured a position among the Top 24 teams in India.",
    highlight: "Top 24 Teams in India",
    category: "Agentic AI Hackathon Lead",
    accentColor: "amber",
    iconName: "Zap",
    tags: ["Fetch-A-Thon 3.0", "Top 24 in India", "Hackathon Coordinator", "Agentic AI"],
    photos: [
      {
        src: "/FETCHAThon-team.jpeg",
        caption: "Team Fetch-A-Thon 3.0 – National Finalists among Top 24 in India",
      },
      {
        src: "/fetch ai session.jpeg",
        caption: "Hosting and coordinating the Fetch.ai Agentic AI hackathon session",
      },
    ],
  },
  {
    id: "lead-study-jams",
    orderNumber: "07",
    event: "Google Cloud Learn with Communities – Study Jams",
    role: "Session Host & Community Volunteer",
    year: "October 2026",
    description:
      "Conducted and delivered 5+ online and offline sessions as part of the Google Cloud Learn with Communities campaign. Helped students understand Google Cloud, navigate skill labs, complete learning activities, and explore cloud technologies.",
    highlight: "5+ Sessions Conducted",
    category: "Cloud Mentorship & Study Jams",
    accentColor: "cyan",
    iconName: "Cloud",
    tags: ["Google Cloud", "5+ Sessions Conducted", "Skill Labs", "Community Volunteer"],
    photos: [
      {
        src: "/fetch ai session.jpeg",
        caption: "Conducting interactive technical mentoring session for engineering students",
      },
    ],
  },
];

// Backward-compatible alias
export const communityData = communityExperiences;
