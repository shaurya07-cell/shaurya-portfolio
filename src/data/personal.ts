export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  titles: string[];
  bio: string[];
  shortIntro: string;
  brandStatement: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
  gdg?: string;
  socialLinks: SocialLinkItem[];
  resumeUrl: string;
  avatarUrl: string;
  availability: string;
  currently: {
    learning: string;
    building: string;
    exploring: string;
    goal: string;
  };
  stats: {
    label: string;
    value: number;
    suffix?: string;
    description: string;
  }[];
}

export const personalData: PersonalInfo = {
  name: "Shaurya Hindocha",
  initials: "SH",
  title: "CSE Student With a Specialisation in AI & ML | Full Stack Developer | AI Enthusiast | Community Builder",
  titles: [
    "Full Stack Web Developer",
    "AI & ML Developer",
    "Computer Science Scholar",
    "Open Source Contributor",
    "Community Tech Leader",
  ],
  shortIntro:
    "I’m Shaurya, a second-year student, builder, and curious explorer. I’m still early in my journey, but with every project, experience, and challenge, I’m learning how to turn curiosity into something meaningful.",
  brandStatement:
    "“Still learning, constantly building, and turning curiosity into meaningful experiences.”",
  bio: [
    "Technology is not just about the code we write, but the possibilities we create",
    "A technology enthusiast and creative builder currently pursuing my journey as a second-year student at Roorkee Institute of Technology. Beyond academics, I enjoy exploring new ideas, building digital experiences, and contributing to the developer community.",
  ],
  location: "Delhi, India",
  email: "hindochashaurya4@gmail.com",
  phone: "8700834739",
  github: "https://github.com/shaurya07-cell",
  linkedin: "https://www.linkedin.com/in/shaurya-hindocha-47961b380/",
  twitter: "https://twitter.com/Shaurya240907",
  instagram: "https://www.instagram.com/shaurya._.2409_/",
  gdg: "https://gdg.community.dev/u/m93szq/#/about",
  socialLinks: [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/shaurya07-cell",
      iconName: "github",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shaurya-hindocha-47961b380/",
      iconName: "linkedin",
    },
    {
      id: "twitter",
      name: "X (Twitter)",
      url: "https://twitter.com/Shaurya240907",
      iconName: "twitter",
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/shaurya._.2409_/",
      iconName: "instagram",
    },
    {
      id: "gdg",
      name: "Google Developer Group (GDG)",
      url: "https://gdg.community.dev/u/m93szq/#/about",
      iconName: "gdg",
    },
  ],
  resumeUrl: "/Shaurya_Hindocha_Resume.pdf",
  avatarUrl: "/shaurya-profile.jpeg",
  availability: "Available for Internships & Collaborations",
  currently: {
    learning: "Full-stack development, AI & Generative AI",
    building: "AI kavach By Indian Army",
    exploring: "Building products that combine technology with real-world impact",
    goal: "My goal is to keep learning, keep building, and eventually create technology that solves meaningful real-world problems — while becoming someone who inspires others to build along the way.",
  },
  stats: [
    {
      label: "Projects Completed",
      value: 8,
      suffix: "+",
      description: "Full-stack apps & AI systems built",
    },
    {
      label: "Technologies Mastered",
      value: 9,
      suffix: "+",
      description: "Languages, frameworks & DevOps tools",
    },
    {
      label: "Hackathons & Events",
      value: 9,
      suffix: "+",
      description: "Competitions participated, won and organized",
    },
    {
      label: "Community Members",
      value: 600,
      suffix: "+",
      description: "Students & developers impacted",
    },
  ],
};
