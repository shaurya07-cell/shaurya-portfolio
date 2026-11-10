"use client";

import React from "react";

interface AchievementBadgeGraphicProps {
  type: "trophy" | "top24" | "top5" | "top7" | "hackathon" | "controller" | "mvp" | "championship" | "football";
  className?: string;
}

export function AchievementBadgeGraphic({ type, className = "w-12 h-12" }: AchievementBadgeGraphicProps) {
  switch (type) {
    // 01. Gold Champion Trophy (Flora AI)
    case "trophy":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldTrophyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#goldGlow)" />
          {/* Trophy Cup */}
          <path
            d="M32 20h36v28c0 10-8 18-18 18s-18-8-18-18V20z"
            fill="url(#goldTrophyGrad)"
            stroke="#FEF08A"
            strokeWidth="1.5"
          />
          {/* Handles */}
          <path
            d="M32 24c-8 0-14 6-14 14s6 14 14 14M68 24c8 0 14 6 14 14s-6 14-14 14"
            stroke="url(#goldTrophyGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Stem & Base */}
          <path d="M46 66h8v12h-8z" fill="url(#goldTrophyGrad)" />
          <path d="M30 78h40v8H30z" rx="2" fill="url(#goldTrophyGrad)" stroke="#FEF08A" strokeWidth="1" />
          {/* Star Crest */}
          <polygon points="50,28 53,35 60,35 55,39 57,46 50,42 43,46 45,39 40,35 47,35" fill="#FFFBEB" />
        </svg>
      );

    // 02. Top 24 Teams in India (Fetch-A-Thon 3.0)
    case "top24":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="top24Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <radialGradient id="top24Glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#top24Glow)" />
          {/* Outer Cyber Shield */}
          <polygon
            points="50,12 85,28 85,62 50,88 15,62 15,28"
            stroke="url(#top24Grad)"
            strokeWidth="2.5"
            fill="#0B132B"
          />
          {/* Inner Accent Ring */}
          <circle cx="50" cy="50" r="24" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="4 2" />
          {/* Number 24 */}
          <text
            x="50"
            y="56"
            textAnchor="middle"
            fill="#E0F2FE"
            fontSize="18"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="-0.5"
          >
            #24
          </text>
          <text x="50" y="70" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">
            INDIA
          </text>
        </svg>
      );

    // 03. Top 5 Medal Badge (GFG HackSprint)
    case "top5":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="top5Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Ribbons */}
          <path d="M40 10L30 45l15-5 5 15z" fill="#EF4444" />
          <path d="M60 10l10 35-15-5-5 15z" fill="#DC2626" />
          {/* Medal Circle */}
          <circle cx="50" cy="58" r="30" fill="#1C1917" stroke="url(#top5Grad)" strokeWidth="3" />
          <circle cx="50" cy="58" r="25" stroke="#FBBF24" strokeWidth="1" strokeDasharray="3 2" />
          {/* TOP 5 */}
          <text x="50" y="54" textAnchor="middle" fill="#FDE68A" fontSize="8" fontFamily="monospace" fontWeight="bold">
            TOP
          </text>
          <text x="50" y="72" textAnchor="middle" fill="#F59E0B" fontSize="20" fontFamily="monospace" fontWeight="extrabold">
            5
          </text>
        </svg>
      );

    // 04. Hackathon Team Lead (Stop Food Waste)
    case "hackathon":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hackGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="#064E3B" fillOpacity="0.2" stroke="url(#hackGrad)" strokeWidth="2" />
          {/* Code Brackets */}
          <path d="M38 34L26 50l12 16M62 34l12 16-12 16" stroke="#34D399" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Flame / Sprint Pulse in Center */}
          <path
            d="M50 36c2 4 8 8 8 16 0 6-4 10-8 12-4-2-8-6-8-12 0-8 6-12 8-16z"
            fill="#F59E0B"
            stroke="#FDE68A"
            strokeWidth="1"
          />
        </svg>
      );

    // 05. Top 7 Medal (March 2026 Hackathon)
    case "top7":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="top7Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
          </defs>
          {/* Ribbons */}
          <path d="M42 12L32 45l14-5 4 15z" fill="#3B82F6" />
          <path d="M58 12l10 33-14-5-4 15z" fill="#1D4ED8" />
          {/* Medal Circle */}
          <circle cx="50" cy="58" r="30" fill="#18181B" stroke="url(#top7Grad)" strokeWidth="3" />
          <circle cx="50" cy="58" r="25" stroke="#FDBA74" strokeWidth="1" strokeDasharray="3 2" />
          <text x="50" y="54" textAnchor="middle" fill="#FFEDD5" fontSize="8" fontFamily="monospace" fontWeight="bold">
            TOP
          </text>
          <text x="50" y="72" textAnchor="middle" fill="#FB923C" fontSize="20" fontFamily="monospace" fontWeight="extrabold">
            7
          </text>
        </svg>
      );

    // 06. Championship Trophy (Engineers' Day – RIT Roorkee)
    case "championship":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="champGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
          </defs>
          {/* Laurel Wreath */}
          <path
            d="M24 64c-8-12-6-28 4-38M76 64c8-12 6-28-4-38"
            stroke="#EAB308"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Gear / Engineering Emblem behind Trophy */}
          <circle cx="50" cy="46" r="22" stroke="#EAB308" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Trophy Cup */}
          <path
            d="M38 28h24v20c0 7-5 12-12 12s-12-5-12-12V28z"
            fill="url(#champGrad)"
            stroke="#FEF08A"
            strokeWidth="1.5"
          />
          <path d="M46 60h8v10h-8z" fill="url(#champGrad)" />
          <path d="M34 70h32v6H34z" rx="2" fill="url(#champGrad)" />
          <polygon points="50,34 52,39 57,39 53,42 55,47 50,44 45,47 47,42 43,39 48,39" fill="#FFF" />
        </svg>
      );

    // 07. Esports Gaming Controller (BGMI College Tournament)
    case "controller":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="controllerGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <radialGradient id="controllerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#controllerGlow)" />
          {/* Controller Body */}
          <path
            d="M28 32c14-2 30-2 44 0 8 1 18 10 18 24 0 14-8 28-14 30-6 2-10-6-14-12-8-3-16-3-24 0-4 6-8 14-14 12-6-2-14-16-14-30 0-14 10-23 18-24z"
            fill="#0F172A"
            stroke="url(#controllerGrad)"
            strokeWidth="2.5"
          />
          {/* D-Pad (Left) */}
          <path d="M28 46v12M22 52h12" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          {/* ABXY Action Buttons (Right) */}
          <circle cx="72" cy="46" r="2.5" fill="#EC4899" />
          <circle cx="78" cy="52" r="2.5" fill="#3B82F6" />
          <circle cx="72" cy="58" r="2.5" fill="#10B981" />
          <circle cx="66" cy="52" r="2.5" fill="#FACC15" />
          {/* Center Esports Shield */}
          <polygon points="50,44 54,48 54,54 50,57 46,54 46,48" fill="#8B5CF6" />
        </svg>
      );

    // 08. Esports MVP Emblem (College MVP)
    case "mvp":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mvpGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <radialGradient id="mvpGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#mvpGlow)" />
          {/* Crown */}
          <path
            d="M32 30l8 12 10-10 10 10 8-12 4 20H28l4-20z"
            fill="#FACC15"
            stroke="#FEF08A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Shield */}
          <path
            d="M26 48h48v16c0 14-24 24-24 24s-24-10-24-24V48z"
            fill="#111827"
            stroke="url(#mvpGrad)"
            strokeWidth="2.5"
          />
          {/* MVP Letters */}
          <text
            x="50"
            y="68"
            textAnchor="middle"
            fill="#FDE047"
            fontSize="14"
            fontFamily="monospace"
            fontWeight="900"
            letterSpacing="1"
          >
            MVP
          </text>
        </svg>
      );

    // 09. Football & Goalkeeper Champion (Sportec 2K25)
    case "football":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="footballShieldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <radialGradient id="pitchGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ballGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="goldGloveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#pitchGlow)" />
          {/* Champion Shield Outline */}
          <path
            d="M50 14L80 26V54C80 68 66 81 50 86C34 81 20 68 20 54V26L50 14Z"
            fill="#06281E"
            stroke="url(#footballShieldGrad)"
            strokeWidth="2.5"
          />
          {/* Subtle Goal Net Pattern in background */}
          <path
            d="M28 32H72M25 42H75M23 52H77M26 62H74M38 24V74M50 16V84M62 24V74"
            stroke="#10B981"
            strokeWidth="0.7"
            strokeOpacity="0.25"
          />
          {/* Goalkeeper Hands / Wing Protect Motif */}
          <path
            d="M26 48C24 42 27 34 34 32C37 36 38 42 37 48"
            stroke="url(#goldGloveGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M74 48C76 42 73 34 66 32C63 36 62 42 63 48"
            stroke="url(#goldGloveGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Soccer Ball (Football) Base */}
          <circle cx="50" cy="50" r="19" fill="url(#ballGrad)" stroke="#064E3B" strokeWidth="1.5" />
          {/* Central Pentagon on ball */}
          <polygon
            points="50,43 57,48 54,56 46,56 43,48"
            fill="#0F172A"
          />
          {/* Ball Seam Lines connecting to edge */}
          <line x1="50" y1="43" x2="50" y2="31" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="57" y1="48" x2="68" y2="44" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="54" y1="56" x2="62" y2="66" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="46" y1="56" x2="38" y2="66" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="43" y1="48" x2="32" y2="44" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          {/* Victory Stars at Top */}
          <polygon points="50,18 51.5,22 56,22 52.5,25 54,29 50,26.5 46,29 47.5,25 44,22 48.5,22" fill="#FACC15" />
          <polygon points="36,25 37.2,28 40.5,28 38,30 39,33 36,31.2 33,33 34,30 31.5,28 34.8,28" fill="#FACC15" />
          <polygon points="64,25 65.2,28 68.5,28 66,30 67,33 64,31.2 61,33 62,30 59.5,28 62.8,28" fill="#FACC15" />
          {/* Bottom Championship Label */}
          <rect x="34" y="73" width="32" height="9" rx="4.5" fill="#047857" stroke="#34D399" strokeWidth="1" />
          <text
            x="50"
            y="79.5"
            textAnchor="middle"
            fill="#ECFDF5"
            fontSize="5.5"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            WINNER
          </text>
        </svg>
      );

    default:
      return null;
  }
}

