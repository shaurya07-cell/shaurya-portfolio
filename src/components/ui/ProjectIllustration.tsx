"use client";

import React from "react";

interface ProjectIllustrationProps {
  slug: string;
  className?: string;
}

export function ProjectIllustration({ slug, className = "w-full h-full" }: ProjectIllustrationProps) {
  switch (slug) {
    case "sentinel-ai":
      return (
        <svg
          viewBox="0 0 400 240"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="240" fill="#040d1a" />
          {/* Cyber Grid */}
          <path
            d="M0 40h400M0 80h400M0 120h400M0 160h400M0 200h400M50 0v240M100 0v240M150 0v240M200 0v240M250 0v240M300 0v240M350 0v240"
            stroke="#0e2a47"
            strokeWidth="0.8"
          />
          {/* Ambient Glow */}
          <circle cx="200" cy="120" r="90" fill="#06b6d4" fillOpacity="0.12" filter="blur(20px)" />
          {/* Central Shield */}
          <path
            d="M200 45l50 25v50c0 35-50 65-50 65s-50-30-50-65V70l50-25z"
            stroke="#06b6d4"
            strokeWidth="3"
            fill="#06182c"
          />
          {/* AST Tree Branches */}
          <circle cx="200" cy="85" r="8" fill="#38bdf8" />
          <line x1="200" y1="93" x2="180" y2="120" stroke="#06b6d4" strokeWidth="2" />
          <line x1="200" y1="93" x2="220" y2="120" stroke="#06b6d4" strokeWidth="2" />
          <circle cx="180" cy="120" r="6" fill="#10b981" />
          <circle cx="220" cy="120" r="6" fill="#10b981" />
          <line x1="180" y1="126" x2="170" y2="145" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="180" y1="126" x2="190" y2="145" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="170" cy="145" r="4" fill="#a855f7" />
          <circle cx="190" cy="145" r="4" fill="#a855f7" />
          {/* Vulnerability Scan Ray */}
          <line x1="130" y1="110" x2="270" y2="110" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
          {/* Terminal / Code Badges */}
          <rect x="24" y="24" width="95" height="32" rx="8" fill="#071b30" stroke="#06b6d4" strokeWidth="1" />
          <text x="34" y="44" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
            AST :: REASON
          </text>
          <rect x="280" y="24" width="96" height="32" rx="8" fill="#071b30" stroke="#10b981" strokeWidth="1" />
          <text x="290" y="44" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">
            PATCH :: VERIFIED
          </text>
        </svg>
      );

    case "flora-ai":
      return (
        <svg
          viewBox="0 0 400 240"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="240" fill="#03150e" />
          <path
            d="M0 40h400M0 80h400M0 120h400M0 160h400M0 200h400M50 0v240M100 0v240M150 0v240M200 0v240M250 0v240M300 0v240M350 0v240"
            stroke="#0a2a1d"
            strokeWidth="0.8"
          />
          <circle cx="200" cy="120" r="85" fill="#10b981" fillOpacity="0.12" filter="blur(20px)" />
          {/* Document Sheet */}
          <rect x="135" y="40" width="130" height="155" rx="10" fill="#06281a" stroke="#10b981" strokeWidth="2.5" />
          {/* Text & Data Lines */}
          <rect x="155" y="65" width="90" height="6" rx="3" fill="#34d399" />
          <rect x="155" y="80" width="70" height="6" rx="3" fill="#6ee7b7" fillOpacity="0.6" />
          <rect x="155" y="95" width="85" height="6" rx="3" fill="#6ee7b7" fillOpacity="0.6" />
          {/* OCR Scanning Laser */}
          <line x1="120" y1="120" x2="280" y2="120" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5 3" />
          {/* Extracted Product Chips */}
          <rect x="155" y="130" width="38" height="20" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1" />
          <rect x="200" y="130" width="45" height="20" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1" />
          <circle cx="165" cy="140" r="3" fill="#34d399" />
          <circle cx="210" cy="140" r="3" fill="#34d399" />
          {/* Winner Trophy Pill */}
          <rect x="26" y="24" width="105" height="32" rx="8" fill="#192e1b" stroke="#fbbf24" strokeWidth="1" />
          <text x="36" y="44" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
            🏆 1ST WINNER
          </text>
          <rect x="270" y="24" width="105" height="32" rx="8" fill="#192e1b" stroke="#10b981" strokeWidth="1" />
          <text x="280" y="44" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">
            GEMINI + OCR
          </text>
        </svg>
      );

    case "easeattend":
      return (
        <svg
          viewBox="0 0 400 240"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="240" fill="#180f04" />
          <path
            d="M0 40h400M0 80h400M0 120h400M0 160h400M0 200h400M50 0v240M100 0v240M150 0v240M200 0v240M250 0v240M300 0v240M350 0v240"
            stroke="#2e1d09"
            strokeWidth="0.8"
          />
          <circle cx="200" cy="120" r="85" fill="#f59e0b" fillOpacity="0.12" filter="blur(20px)" />
          {/* 3 Dashboard Nodes: Student -> Teacher -> HOD */}
          {/* Student Card */}
          <rect x="40" y="90" width="90" height="70" rx="10" fill="#2b1a07" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="85" cy="115" r="12" fill="#d97706" />
          <text x="58" y="145" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
            STUDENT
          </text>
          {/* Arrow 1 */}
          <line x1="135" y1="125" x2="155" y2="125" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          {/* Teacher Card */}
          <rect x="160" y="80" width="90" height="85" rx="10" fill="#38220a" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="205" cy="110" r="14" fill="#f59e0b" />
          <text x="178" y="145" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
            TEACHER
          </text>
          {/* Arrow 2 */}
          <line x1="255" y1="125" x2="275" y2="125" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          {/* HOD Card */}
          <rect x="280" y="90" width="85" height="70" rx="10" fill="#2b1a07" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="322" cy="115" r="12" fill="#d97706" />
          <text x="310" y="145" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
            HOD
          </text>
          {/* Header Badge */}
          <rect x="130" y="24" width="140" height="30" rx="8" fill="#2b1a07" stroke="#f59e0b" strokeWidth="1" />
          <text x="142" y="43" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
            3-TIER APPROVAL CHAIN
          </text>
        </svg>
      );

    case "explainme":
      return (
        <svg
          viewBox="0 0 400 240"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="240" fill="#12061e" />
          <path
            d="M0 40h400M0 80h400M0 120h400M0 160h400M0 200h400M50 0v240M100 0v240M150 0v240M200 0v240M250 0v240M300 0v240M350 0v240"
            stroke="#270f3d"
            strokeWidth="0.8"
          />
          <circle cx="200" cy="120" r="85" fill="#a855f7" fillOpacity="0.12" filter="blur(20px)" />
          {/* Brain / Synapse Transformation */}
          <circle cx="140" cy="120" r="35" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="140" cy="120" r="15" fill="#9333ea" />
          {/* Transform Wave */}
          <path d="M185 120q15-20 30 0t30 0" stroke="#c084fc" strokeWidth="3" fill="none" />
          {/* Lightbulb / Understanding */}
          <circle cx="270" cy="120" r="30" fill="#2d1047" stroke="#e879f9" strokeWidth="2.5" />
          <circle cx="270" cy="115" r="12" fill="#f0abfc" />
          <path d="M264 135h12M266 140h8" stroke="#e879f9" strokeWidth="2" />
          {/* Conceptual Badge */}
          <rect x="135" y="24" width="130" height="30" rx="8" fill="#220b33" stroke="#a855f7" strokeWidth="1" />
          <text x="148" y="43" fill="#e879f9" fontSize="10" fontFamily="monospace" fontWeight="bold">
            💡 AI LEARNING AGENT
          </text>
        </svg>
      );

    case "mediplus":
      return (
        <svg
          viewBox="0 0 400 240"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="240" fill="#18060e" />
          <path
            d="M0 40h400M0 80h400M0 120h400M0 160h400M0 200h400M50 0v240M100 0v240M150 0v240M200 0v240M250 0v240M300 0v240M350 0v240"
            stroke="#300d1d"
            strokeWidth="0.8"
          />
          <circle cx="200" cy="120" r="85" fill="#f43f5e" fillOpacity="0.12" filter="blur(20px)" />
          {/* Medical Cross */}
          <rect x="185" y="80" width="30" height="80" rx="6" fill="#be123c" />
          <rect x="160" y="105" width="80" height="30" rx="6" fill="#be123c" />
          {/* Pulse ECG Line */}
          <path
            d="M40 120h70l15-30 20 60 20-50 15 20h80l15-25 15 45 15-20h60"
            stroke="#fb7185"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Conceptual Badge */}
          <rect x="125" y="24" width="150" height="30" rx="8" fill="#330d1d" stroke="#f43f5e" strokeWidth="1" />
          <text x="135" y="43" fill="#fda4af" fontSize="10" fontFamily="monospace" fontWeight="bold">
            🩺 DIGITAL HEALTHCARE
          </text>
        </svg>
      );

    default:
      return null;
  }
}

