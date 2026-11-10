export interface AchievementItem {
  id: string;
  orderNumber: string;
  title: string;
  achievement: string;
  date: string;
  organization?: string;
  description: string;
  category: "Hackathons" | "Gaming & Esports" | "College Recognition" | "Sports & Athletics";
  categories: string[];
  badge: string;
  prizePool?: string;
  accentColor: "gold" | "cyan" | "amber" | "emerald" | "rose" | "purple";
  graphicType: "trophy" | "top24" | "top5" | "top7" | "hackathon" | "controller" | "mvp" | "championship" | "football";
  featured?: boolean;
  photos?: { src: string; caption: string }[];
  githubUrl?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-flora-ai",
    orderNumber: "01",
    title: "Flora AI – First Hackathon Victory",
    achievement: "Winner",
    date: "August 2026",
    organization: "Online Hackathon",
    description: "Won my first online hackathon by developing Flora AI, an AI-powered product intelligence platform.",
    category: "Hackathons",
    categories: ["Hackathons"],
    badge: "1st Place Champion",
    accentColor: "gold",
    graphicType: "trophy",
    featured: true,
    githubUrl: "https://github.com/shaurya07-cell/flora-ai-platform",
  },
  {
    id: "ach-fetchathon",
    orderNumber: "02",
    title: "Fetch-A-Thon 3.0",
    achievement: "Top 24 Teams in India",
    date: "October 2026",
    organization: "GDGoC RIT × Fetch.ai",
    description: "Participated in an Agentic AI hackathon using Fetch.ai technologies. Also contributed as a hackathon coordinator through GDG on Campus RIT Roorkee.",
    category: "Hackathons",
    categories: ["Hackathons"],
    badge: "Top 24 in India (Dual: Participant & Coordinator)",
    accentColor: "cyan",
    graphicType: "top24",
    featured: true,
    photos: [
      {
        src: "/FETCHAThon-team.jpeg",
        caption: "Fetch-A-Thon 3.0 National Finalist Team (Top 24 Teams in India)",
      },
    ],
  },
  {
    id: "ach-gfg-hacksprint",
    orderNumber: "03",
    title: "GFG HackSprint",
    achievement: "Top 5",
    date: "December 2025",
    organization: "GeeksforGeeks",
    description: "Participated with a three-member team and developed EaseAttend, a smart attendance management solution.",
    category: "Hackathons",
    categories: ["Hackathons"],
    badge: "Top 5 Finalist Medal",
    accentColor: "amber",
    graphicType: "top5",
    githubUrl: "https://github.com/shaurya07-cell/Easeattend",
  },
  {
    id: "ach-stop-food-waste",
    orderNumber: "04",
    title: "College Hackathon – Stop Food Waste",
    achievement: "Team Lead & Participant",
    date: "2025",
    organization: "College Hackathon",
    description: "Collaborated with a five-member team to develop a solution using HTML, Java, and Python.",
    category: "Hackathons",
    categories: ["Hackathons"],
    badge: "Team Lead & Prototype",
    accentColor: "emerald",
    graphicType: "hackathon",
  },
  {
    id: "ach-march-hackathon",
    orderNumber: "05",
    title: "March 2026 Hackathon",
    achievement: "Top 7",
    date: "March 2026",
    organization: "Competitive Hackathon",
    description: "Participated in a competitive hackathon and secured a position among the Top 7 teams.",
    category: "Hackathons",
    categories: ["Hackathons"],
    badge: "Top 7 Finalist",
    accentColor: "amber",
    graphicType: "top7",
  },
  {
    id: "ach-engineers-day",
    orderNumber: "06",
    title: "Engineers' Day – RIT Roorkee",
    achievement: "Winner",
    date: "September 2025",
    organization: "RIT Roorkee",
    description: "Secured the winning position in the Engineers' Day competition organized at my college.",
    category: "College Recognition",
    categories: ["College Recognition"],
    badge: "College Winner Trophy",
    accentColor: "gold",
    graphicType: "championship",
    photos: [
      {
        src: "/engineers day winner.jpeg",
        caption: "Winning 1st Place on Engineers' Day at Roorkee Institute of Technology",
      },
    ],
  },
  {
    id: "ach-bgmi-tournament",
    orderNumber: "07",
    title: "BGMI College Tournament",
    achievement: "Tournament Winner",
    date: "November 2025",
    organization: "College Esports Championship",
    prizePool: "₹5,000",
    description: "Won a competitive BGMI tournament, demonstrating strategic thinking, teamwork, coordination, and competitive gaming skills.",
    category: "Gaming & Esports",
    categories: ["Gaming & Esports"],
    badge: "Esports Champion",
    accentColor: "rose",
    graphicType: "controller",
    featured: true,
  },
  {
    id: "ach-college-mvp",
    orderNumber: "08",
    title: "College MVP",
    achievement: "Most Valuable Player (MVP)",
    date: "2025",
    organization: "College Competitive Esports",
    description: "Recognized as the MVP of my college for my contributions and performance in competitive gaming.",
    category: "Gaming & Esports",
    categories: ["Gaming & Esports", "College Recognition"],
    badge: "Most Valuable Player (MVP)",
    accentColor: "purple",
    graphicType: "mvp",
  },
  {
    id: "ach-sportec-football",
    orderNumber: "09",
    title: "Sportec 2K25 – Inter-College Football Tournament",
    achievement: "Tournament Champions (Goalkeeper)",
    date: "2025",
    organization: "Sportec 2K25 (Inter-Collegiate Sports Fest)",
    description: "Crowned Champions of Sportec 2K25 in football, competing against top visiting college teams from across the region. Defended the net as starting goalkeeper with crucial saves, clean sheets, and defensive composure under high pressure.",
    category: "Sports & Athletics",
    categories: ["Sports & Athletics", "College Recognition"],
    badge: "Tournament Champions (Goalkeeper)",
    accentColor: "emerald",
    graphicType: "football",
    featured: true,
    photos: [
      {
        src: "/sportech winner 2025.jpeg",
        caption: "Sportec 2K25 Football Champions with the Winning Trophy & Team",
      },
    ],
  },
];
