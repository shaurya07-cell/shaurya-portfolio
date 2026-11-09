"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Mail,
  Youtube,
  Code2,
  BookOpen,
} from "lucide-react";

interface SocialIconProps {
  iconName: string;
  className?: string;
}

export function SocialIcon({ iconName, className = "w-5 h-5" }: SocialIconProps) {
  const name = iconName.toLowerCase();

  if (name === "github") {
    return <Github className={className} />;
  }
  if (name === "linkedin") {
    return <Linkedin className={className} />;
  }
  if (name === "twitter" || name === "x") {
    return <Twitter className={className} />;
  }
  if (name === "instagram") {
    return <Instagram className={className} />;
  }
  if (name === "youtube") {
    return <Youtube className={className} />;
  }
  if (name === "gdg" || name === "google developer group" || name === "gdsc") {
    // Exact Official GDG (Google Developer Groups) Logo SVG with transparent background
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Left Chevron '<': Blue bottom arm, Red top arm overlapping */}
        <line
          x1="18"
          y1="50"
          x2="42"
          y2="67"
          stroke="#4285F4"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="50"
          x2="42"
          y2="33"
          stroke="#EA4335"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Right Chevron '>': Yellow bottom arm, Green top arm overlapping */}
        <line
          x1="58"
          y1="67"
          x2="82"
          y2="50"
          stroke="#FBBC04"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <line
          x1="58"
          y1="33"
          x2="82"
          y2="50"
          stroke="#34A853"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return <Globe className={className} />;
}
