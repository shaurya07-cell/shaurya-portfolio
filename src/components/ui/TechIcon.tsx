"use client";

import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const norm = name.trim().toLowerCase();

  // Python
  if (norm === "python") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M63.89 3.05c-15.65 0-25.26 1.4-32.9 4.34-11.84 4.54-13.9 11.23-13.9 25.13v9.84h28.16v3.52H17.29c-13.9 0-24.28 8.4-27.18 24.37-3.35 18.23-3.5 29.58 0 48.7 2.6 14.33 10.74 24.37 24.64 24.37h8.04v-11.45c0-13.3 11.35-24.97 25.07-24.97h28.1v-28.1h-44.5v-3.52h44.5V40.2c0-12.72-10.74-23.77-24.6-23.77h-6.47c-.01 0-.01-13.38 0-13.38z"
          fill="#387EB8"
        />
        <path
          d="M64.11 124.95c15.65 0 25.26-1.4 32.9-4.34 11.84-4.54 13.9-11.23 13.9-25.13v-9.84H82.75v-3.52h47.96c13.9 0 24.28-8.4 27.18-24.37 3.35-18.23 3.5-29.58 0-48.7-2.6-14.33-10.74-24.37-24.64-24.37h-8.04v11.45c0 13.3-11.35 24.97-25.07 24.97H52.04v28.1h44.5v3.52h-44.5v35.08c0 12.72 10.74 23.77 24.6 23.77h6.47c.01 0 .01 13.38 0 13.38z"
          fill="#FFE052"
        />
        <circle cx="43.5" cy="23.5" r="4.5" fill="#fff" />
        <circle cx="84.5" cy="104.5" r="4.5" fill="#fff" />
      </svg>
    );
  }

  // C
  if (norm === "c") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M116.5 86.8c-7.9 14.1-23.2 23.6-40.8 23.6-25.7 0-46.6-20.9-46.6-46.6s20.9-46.6 46.6-46.6c17.6 0 32.9 9.5 40.8 23.6l17-10.2C122.4 11.2 99.4 0 75.7 0 34.4 0 1.1 33.3 1.1 74.6s33.3 74.6 74.6 74.6c23.7 0 46.7-11.2 57.8-30.6l-17-10.2z"
          fill="#00599C"
        />
      </svg>
    );
  }

  // C++
  if (norm === "c++") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M86.5 76.8c-5.9 10.6-17.4 17.7-30.6 17.7-19.3 0-35-15.7-35-35s15.7-35 35-35c13.2 0 24.7 7.1 30.6 17.7l13-7.8C91.4 18.2 74.1 10 55.9 10 25.6 10 1.1 34.5 1.1 64.8s24.5 54.8 54.8 54.8c18.2 0 35.5-8.2 43.6-24.6l-13-7.8z"
          fill="#00599C"
        />
        <path
          d="M98 56h6v-6h4v6h6v4h-6v6h-4v-6h-6v-4zm20 0h6v-6h4v6h6v4h-6v6h-4v-6h-6v-4z"
          fill="#004482"
        />
      </svg>
    );
  }

  // JavaScript
  if (norm === "javascript") {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path
          d="M34.8 108c3.2 5.5 8.1 9.4 16.3 9.4 8.7 0 14.3-4.3 14.3-12.7V62.4h-12.7v42.3c0 3.7-1.9 5.4-5.3 5.4-3.5 0-5.1-2.4-6.8-5.3L34.8 108zm48.7-2.9c3.7 6.1 9.7 10.9 19.3 10.9 8.2 0 13.5-4.1 13.5-10.2 0-7.1-5.7-9.7-15.3-13.8l-5.3-2.3c-15.4-6.6-22.3-14.8-22.3-25.7 0-12.8 9.9-22.4 25.5-22.4 11 0 18.9 4.3 24.4 14l-10 6.4c-2.8-5-6-7.3-14.4-7.3-6.6 0-11.2 3.6-11.2 8.6 0 5.8 4.6 8.3 13.4 12.1l5.3 2.3c17.5 7.6 24.5 15.6 24.5 27.4 0 15.6-12.2 24.7-28 24.7-15.7 0-25.1-7.7-29.8-17.5l10.4-6.9z"
          fill="#000"
        />
      </svg>
    );
  }

  // HTML5
  if (norm === "html5" || norm === "html") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path d="M19.3 115.8L7.9 0h112.2l-11.4 115.8L64 128l-44.7-12.2z" fill="#E44D26" />
        <path d="M64 117.7l36.5-10 9.8-97.7H64v107.7z" fill="#F16529" />
        <path
          d="M64 53.4H47.1l-1.2-13.3H64V27.5H32.1l3.5 38.6H64v-12.7zm0 35.7l-.1.1-15.7-4.2-1-11.2H34.4l2 22.4 27.6 7.6V89.1z"
          fill="#EBEBEB"
        />
        <path
          d="M63.9 53.4h17.2l-1.6 18.3-15.6 4.2v13.2l27.6-7.7 2.3-25.3.3-2.7H63.9v-12.7zm0-25.9h31.9l-.3 2.7-.9 9.9H63.9V27.5z"
          fill="#fff"
        />
      </svg>
    );
  }

  // CSS3
  if (norm === "css3" || norm === "css") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path d="M19.3 115.8L7.9 0h112.2l-11.4 115.8L64 128l-44.7-12.2z" fill="#1572B6" />
        <path d="M64 117.7l36.5-10 9.8-97.7H64v107.7z" fill="#33A9DC" />
        <path
          d="M64 53.4H47.1l-1.2-13.3H64V27.5H32.1l3.5 38.6H64v-12.7zm0 35.7l-.1.1-15.7-4.2-1-11.2H34.4l2 22.4 27.6 7.6V89.1z"
          fill="#EBEBEB"
        />
        <path
          d="M63.9 53.4h17.2l-1.6 18.3-15.6 4.2v13.2l27.6-7.7 2.3-25.3.3-2.7H63.9v-12.7zm0-25.9h31.9l-.3 2.7-.9 9.9H63.9V27.5z"
          fill="#fff"
        />
      </svg>
    );
  }

  // React.js
  if (norm === "react.js" || norm === "react") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <ellipse cx="64" cy="64" rx="14" ry="14" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="6" fill="none">
          <ellipse cx="64" cy="64" rx="56" ry="21" />
          <ellipse cx="64" cy="64" rx="56" ry="21" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="56" ry="21" transform="rotate(120 64 64)" />
        </g>
      </svg>
    );
  }

  // Tailwind CSS
  if (norm === "tailwind css" || norm === "tailwind") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M64 32c-17.07 0-27.73 8.53-32 25.6 6.4-8.53 13.87-11.73 22.4-9.6 4.88 1.22 8.37 4.76 12.23 8.68C72.93 63.07 85.3 75.63 106.67 75.63c17.07 0 27.73-8.53 32-25.6-6.4 8.53-13.87 11.73-22.4 9.6-4.88-1.22-8.37-4.76-12.23-8.68C97.73 44.57 85.37 32 64 32zM32 68.27C14.93 68.27 4.27 76.8 0 93.87c6.4-8.53 13.87-11.73 22.4-9.6 4.88 1.22 8.37 4.76 12.23 8.68 6.3 6.39 18.67 18.95 40.04 18.95 17.07 0 27.73-8.53 32-25.6-6.4 8.53-13.87 11.73-22.4 9.6-4.88-1.22-8.37-4.76-12.23-8.68C65.73 80.84 53.37 68.27 32 68.27z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // TypeScript
  if (norm === "typescript" || norm === "ts") {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path
          d="M56 40H30v12h10v48h13V52h10V40h-7zm27.4 34.2c3.4 2.2 7.7 3.8 12.6 3.8 4.8 0 7.2-2 7.2-5 0-3.3-2.7-4.8-8.2-7-8.8-3.5-14.7-8.3-14.7-16.7 0-9.8 8.1-16.3 20.6-16.3 5.9 0 11.1 1.4 15.1 3.8l-3.3 9.7c-3.2-1.9-7-3.1-11.7-3.1-4.7 0-6.9 2-6.9 4.6 0 3 2.6 4.3 8.4 6.7 9.5 3.9 14.6 8.7 14.6 17 0 10.5-8.4 17.2-21.7 17.2-6.9 0-13.2-1.8-17.6-4.7l3.6-10z"
          fill="#fff"
        />
      </svg>
    );
  }

  // Node.js
  if (norm === "node.js" || norm === "node") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M64 4l52 30v60l-52 30-52-30V34L64 4z"
          fill="#539E43"
        />
        <path
          d="M64 14l43 25v50l-43 25-43-25V39l43-25z"
          fill="#333"
        />
        <path
          d="M72 48v32h-8V58l-8 12h-4l-8-12v22h-8V48h8l8 12 8-12h12z"
          fill="#fff"
        />
      </svg>
    );
  }

  // Express.js
  if (norm === "express.js" || norm === "express") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <rect width="128" height="128" rx="20" fill="#222" />
        <path
          d="M32 44h32v10H44v14h18v10H44v16h22v10H32V44zm40 18l14 18-14 18h14l7-10 7 10h14L100 80l14-18h-14l-7 10-7-10H72z"
          fill="#fff"
        />
      </svg>
    );
  }

  // FastAPI
  if (norm === "fastapi") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="60" fill="#009688" />
        <path
          d="M68 20L34 72h24l-6 36 34-52H62l6-36z"
          fill="#fff"
        />
      </svg>
    );
  }

  // REST APIs
  if (norm === "rest apis" || norm === "api integration") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="56" stroke="#38BDF8" strokeWidth="8" />
        <circle cx="36" cy="64" r="10" fill="#38BDF8" />
        <circle cx="92" cy="64" r="10" fill="#38BDF8" />
        <line x1="46" y1="64" x2="82" y2="64" stroke="#38BDF8" strokeWidth="8" strokeDasharray="6 4" />
        <path d="M64 36v12M64 80v12" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // Gemini API
  if (norm === "gemini api" || norm === "gemini") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <defs>
          <linearGradient id="geminiGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1BA1E2" />
            <stop offset="50%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#EC407A" />
          </linearGradient>
        </defs>
        <path
          d="M64 4C64 37.14 37.14 64 4 64c33.14 0 60 26.86 60 60 0-33.14 26.86-60 60-60-33.14 0-60-26.86-60-60z"
          fill="url(#geminiGrad)"
        />
      </svg>
    );
  }

  // Artificial Intelligence
  if (norm === "artificial intelligence" || norm === "ai") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="48" stroke="#EC4899" strokeWidth="6" />
        <circle cx="64" cy="64" r="14" fill="#EC4899" />
        <circle cx="64" cy="24" r="8" fill="#A855F7" />
        <circle cx="64" cy="104" r="8" fill="#A855F7" />
        <circle cx="24" cy="64" r="8" fill="#A855F7" />
        <circle cx="104" cy="64" r="8" fill="#A855F7" />
        <line x1="64" y1="32" x2="64" y2="50" stroke="#EC4899" strokeWidth="4" />
        <line x1="64" y1="78" x2="64" y2="96" stroke="#EC4899" strokeWidth="4" />
        <line x1="32" y1="64" x2="50" y2="64" stroke="#EC4899" strokeWidth="4" />
        <line x1="78" y1="64" x2="96" y2="64" stroke="#EC4899" strokeWidth="4" />
      </svg>
    );
  }

  // Machine Learning
  if (norm === "machine learning" || norm === "ml") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="36" cy="36" r="14" fill="#8B5CF6" />
        <circle cx="92" cy="36" r="14" fill="#8B5CF6" />
        <circle cx="64" cy="92" r="14" fill="#EC4899" />
        <line x1="36" y1="36" x2="64" y2="92" stroke="#8B5CF6" strokeWidth="6" />
        <line x1="92" y1="36" x2="64" y2="92" stroke="#8B5CF6" strokeWidth="6" />
        <line x1="36" y1="36" x2="92" y2="36" stroke="#8B5CF6" strokeWidth="6" strokeDasharray="4 4" />
      </svg>
    );
  }

  // Generative AI
  if (norm === "generative ai") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M64 8l12 36 36 12-36 12-12 36-12-36-36-12 36-12 12-36z"
          fill="#A855F7"
        />
        <path
          d="M102 84l5 15 15 5-15 5-5 15-5-15-15-5 15-5 5-15z"
          fill="#EC4899"
        />
      </svg>
    );
  }

  // Large Language Models (LLMs)
  if (norm === "large language models (llms)" || norm === "llms") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <rect x="20" y="24" width="88" height="64" rx="14" stroke="#06B6D4" strokeWidth="6" />
        <path d="M40 92v16l18-16h50" stroke="#06B6D4" strokeWidth="6" strokeLinecap="round" />
        <circle cx="48" cy="56" r="6" fill="#06B6D4" />
        <circle cx="64" cy="56" r="6" fill="#06B6D4" />
        <circle cx="80" cy="56" r="6" fill="#06B6D4" />
      </svg>
    );
  }

  // OCR
  if (norm === "ocr") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <rect x="24" y="16" width="80" height="96" rx="8" stroke="#3B82F6" strokeWidth="6" />
        <line x1="40" y1="40" x2="88" y2="40" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
        <line x1="40" y1="64" x2="88" y2="64" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
        <line x1="40" y1="88" x2="70" y2="88" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
        <line x1="16" y1="64" x2="112" y2="64" stroke="#EF4444" strokeWidth="4" strokeDasharray="8 4" />
      </svg>
    );
  }

  // Agentic AI
  if (norm === "agentic ai") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="50" stroke="#10B981" strokeWidth="6" strokeDasharray="12 6" />
        <polygon points="64,26 78,54 110,64 78,74 64,102 50,74 18,64 50,54" fill="#10B981" />
        <circle cx="64" cy="64" r="8" fill="#fff" />
      </svg>
    );
  }

  // MongoDB
  if (norm === "mongodb") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M62.6 123.6c-1.8-6.1-8.5-17.7-14.7-27.1-15.6-23.7-23.6-43.9-23.6-59.6 0-25 15.6-43.9 39.7-43.9 24.1 0 39.7 18.9 39.7 43.9 0 15.7-8 35.9-23.6 59.6-6.2 9.4-12.9 21-14.7 27.1h-2.8z"
          fill="#47A248"
        />
        <path
          d="M64 4c0 0 2 12 2 40s-2 60-2 79v-119z"
          fill="#3FA037"
        />
      </svg>
    );
  }

  // Data Processing
  if (norm === "data processing") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <ellipse cx="64" cy="32" rx="44" ry="16" stroke="#06B6D4" strokeWidth="6" />
        <path d="M20 32v32c0 8.8 19.7 16 44 16s44-7.2 44-16V32" stroke="#06B6D4" strokeWidth="6" />
        <path d="M20 64v32c0 8.8 19.7 16 44 16s44-7.2 44-16V64" stroke="#06B6D4" strokeWidth="6" />
      </svg>
    );
  }

  // Document Intelligence
  if (norm === "document intelligence") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path d="M32 16h44l28 28v68H32V16z" stroke="#3B82F6" strokeWidth="6" />
        <path d="M76 16v28h28" stroke="#3B82F6" strokeWidth="6" />
        <circle cx="56" cy="76" r="10" fill="#3B82F6" />
        <path d="M64 84l16 16" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // Google Cloud Platform (GCP)
  if (norm === "google cloud platform (gcp)" || norm === "gcp" || norm === "google cloud") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M87.6 52.8C85.5 37 72 25 56 25c-15.6 0-29 11.4-31.5 26.8C10.7 54.3 0 66.8 0 81.7 0 98 13.3 111 29.7 111h57.6c17.5 0 31.7-14.2 31.7-31.7 0-14.8-10.3-27.2-24.4-30.2l-3-4.3-.4-4.5z"
          fill="#4285F4"
        />
        <path
          d="M87.3 111H29.7C13.3 111 0 98 0 81.7c0-14 9.5-25.9 22.8-28.7l5.4 12.8C25.2 67.5 20 74 20 81.7 20 90.7 27.3 98 36.3 98h51c9 0 16.3-7.3 16.3-16.3 0-7.8-5.5-14.4-13.2-15.9l4.8-13.1c14.1 3 24.4 15.4 24.4 30.2 0 17.5-14.2 31.7-31.7 31.7-.7 0-1.4 0-2.3-.6z"
          fill="#34A853"
        />
        <circle cx="56" cy="68" r="12" fill="#EA4335" />
      </svg>
    );
  }

  // Git
  if (norm === "git") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M125.4 56.6L71.4 2.6c-3.5-3.5-9.1-3.5-12.6 0L46.2 15.2l16 16c3.7-1.3 8.1-.4 11 2.5 2.9 2.9 3.7 7.2 2.5 11l15.4 15.4c3.7-1.3 8.1-.4 11 2.5 4.1 4.1 4.1 10.7 0 14.8s-10.7 4.1-14.8 0c-3.1-3.1-3.9-7.8-2.3-11.7L71.2 51.5v35.3c1.2.6 2.3 1.4 3.2 2.4 4.1 4.1 4.1 10.7 0 14.8s-10.7 4.1-14.8 0-4.1-10.7 0-14.8c1.3-1.3 2.9-2.2 4.6-2.7V50.9c-1.7-.5-3.3-1.4-4.6-2.7-3.2-3.2-3.9-7.9-2.3-11.9L22.6 51.1 2.6 71.1c-3.5 3.5-3.5 9.1 0 12.6l54 54c3.5 3.5 9.1 3.5 12.6 0l56.2-56.2c3.5-3.5 3.5-9.2 0-12.7z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // GitHub
  if (norm === "github") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 0C28.65 0 0 28.65 0 64c0 28.28 18.34 52.28 43.78 60.72 3.2.59 4.37-1.39 4.37-3.08 0-1.52-.06-6.52-.09-11.87-17.8 3.87-21.56-7.59-21.56-7.59-2.91-7.4-7.11-9.37-7.11-9.37-5.81-3.97.44-3.89.44-3.89 6.42.45 9.8 6.59 9.8 6.59 5.71 9.78 14.99 6.96 18.64 5.32.58-4.14 2.24-6.96 4.08-8.56-14.21-1.61-29.15-7.1-29.15-31.62 0-6.98 2.49-12.69 6.58-17.16-.66-1.62-2.85-8.12.63-16.92 0 0 5.37-1.72 17.6 6.56 5.1-1.42 10.57-2.13 16-2.16 5.43.03 10.9.74 16 2.16 12.23-8.28 17.6-6.56 17.6-6.56 3.48 8.8 1.29 15.3.63 16.92 4.09 4.47 6.58 10.18 6.58 17.16 0 24.58-14.96 30-29.22 31.57 2.3 1.98 4.35 5.88 4.35 11.85 0 8.56-.08 15.46-.08 17.56 0 1.71 1.15 3.71 4.41 3.08C109.68 116.26 128 92.27 128 64 128 28.65 99.35 0 64 0z"
        />
      </svg>
    );
  }

  // VS Code
  if (norm === "vs code" || norm === "vscode") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <path
          d="M94.6 126.8c3.2 1.6 7.1.9 9.6-1.7l21.2-20.2c2.6-2.5 3.6-6.2 2.6-9.6L108.6 64l19.4-31.3c1-3.4 0-7.1-2.6-9.6L104.2 2.9c-2.5-2.6-6.4-3.3-9.6-1.7L36.2 33.7c-2.4 1.2-3.9 3.6-4 6.3-.1 2.7 1.2 5.2 3.4 6.7L66.7 64 35.6 81.3c-2.2 1.5-3.5 4-3.4 6.7.1 2.7 1.6 5.1 4 6.3l58.4 32.5z"
          fill="#007ACC"
        />
        <path
          d="M94.6 126.8c3.2 1.6 7.1.9 9.6-1.7l21.2-20.2c2.6-2.5 3.6-6.2 2.6-9.6L108.6 64l19.4-31.3c1-3.4 0-7.1-2.6-9.6L104.2 2.9c-2.5-2.6-6.4-3.3-9.6-1.7L66.7 64l27.9 62.8z"
          fill="#0065A9"
        />
        <path
          d="M19.3 43.1c-2.2-1.5-5.1-1.6-7.4-.4L1.7 48.4C.6 49 .1 50.1 0 51.3v25.4c.1 1.2.6 2.3 1.7 2.9l10.2 5.7c2.3 1.2 5.2 1.1 7.4-.4L46 64 19.3 43.1z"
          fill="#1F8AD2"
        />
      </svg>
    );
  }

  // Antigravity IDE
  if (norm === "antigravity ide" || norm === "antigravity") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="54" stroke="#8B5CF6" strokeWidth="6" />
        <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#06B6D4" strokeWidth="4" transform="rotate(-30 64 64)" />
        <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#EC4899" strokeWidth="4" transform="rotate(30 64 64)" />
        <circle cx="64" cy="64" r="12" fill="#8B5CF6" />
      </svg>
    );
  }

  // Postman
  if (norm === "postman") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="60" fill="#FF6C37" />
        <path
          d="M74.8 33.6c-13.4 0-24.3 10.9-24.3 24.3 0 3.7.8 7.2 2.3 10.3L37.2 83.8c-.8.8-.8 2.1 0 2.9.8.8 2.1.8 2.9 0l15.6-15.6c3.1 1.5 6.6 2.3 10.3 2.3 13.4 0 24.3-10.9 24.3-24.3 0-13.4-10.9-24.3-24.3-24.3zm-6.2 20.3c0-3.4 2.8-6.2 6.2-6.2s6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2-6.2-2.8-6.2-6.2z"
          fill="#fff"
        />
      </svg>
    );
  }

  // Agentverse
  if (norm === "agentverse") {
    return (
      <svg viewBox="0 0 128 128" className={className} fill="none">
        <circle cx="64" cy="64" r="54" stroke="#6366F1" strokeWidth="6" />
        <polygon points="64,24 98,44 98,84 64,104 30,84 30,44" stroke="#A855F7" strokeWidth="5" />
        <circle cx="64" cy="64" r="10" fill="#6366F1" />
        <circle cx="64" cy="24" r="6" fill="#A855F7" />
        <circle cx="98" cy="84" r="6" fill="#A855F7" />
        <circle cx="30" cy="84" r="6" fill="#A855F7" />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

