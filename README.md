# 🌌 Shaurya Hindocha — Personal Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

**"Still learning, constantly building, and turning curiosity into meaningful experiences."**

*A modern, high-performance portfolio website engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.*

[Explore Portfolio](#-features) • [Featured Projects](#-featured-projects) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Connect](#-connect--socials)

</div>

---

## 👨‍💻 About Me

Hi there! I'm **Shaurya Hindocha**, a Computer Science and Engineering student specializing in **Artificial Intelligence & Machine Learning** at **Roorkee Institute of Technology (RIT Roorkee)**.

- 🚀 **Full-Stack Developer** & **AI/ML Builder** exploring Agentic AI, LLMs, and intelligent document processing.
- 🏆 **Hackathon Winner** (Flora AI) and Top 24 Finalist at **Fetch-A-Thon 3.0** (Fetch.ai Agentic AI).
- ⚽ **Tournament Champion (Goalkeeper)** at **Sportec 2K25** Inter-College Football Championship.
- 🤝 **Community Volunteer & Leader** with GDG on Campus RIT Roorkee and Inkspire Club.
- 🎤 Delivered **10+ technical presentations & project demos** on stage.

---

## ✨ Features

- **⚡ Instant Command Palette (`Ctrl + K` / `⌘K`)**  
  Keyboard-driven navigation to jump between sections, trigger actions, download resume, or open social profiles.
- **🎨 Modern Glassmorphism & Cyber Aesthetic**  
  Bespoke UI featuring glowing borders, dynamic radial gradients, floating badge pills, and smooth dark/light mode switching.
- **⏱️ Evolution & Milestones Timeline**  
  Chronological story mapping 16 pivotal chapters — from academic foundations (10th/12th Board, JEE 93%ile) to hackathons, community leadership, and AI breakthroughs.
- **💼 Professional Work & Experience**  
  Deep dives into professional project work (Flora AI product intelligence, automobile client website, Code Alpha frontend internship).
- **🛠️ Interactive Skills & Technology Matrix**  
  Categorized badges featuring official vector logos for Programming Languages, Frontend, Backend, AI/ML, Databases, Cloud & DevOps, and Developer Tools.
- **🚀 Featured Engineering Projects with Deep-Dive Modals**  
  Architectural overviews, key features, technology badges, live preview buttons, and full detail modals for flagship systems.
- **🏆 Key Achievements & Hackathons Showcase**  
  Interactive cards highlighting hackathon victories, national finishes, and community contributions with custom SVG badges.
- **📄 Instant Resume Integration**  
  Direct PDF download and interactive resume preview modal with print shortcuts and full credential display.
- **📱 Responsive & Accessible**  
  Fluid layouts fully optimized for ultra-wide monitors, laptops, tablets, and smartphones.

---

## 🚀 Featured Projects

| Project | Category | Key Highlights | Tech Stack |
| :--- | :--- | :--- | :--- |
| **[Sentinel-AI](#)** | AI / Cybersecurity | Autonomous cyber reasoning, AST static analysis, automated remediation verification | Python, FastAPI, React, TS, Gemini API |
| **[Flora AI](#)** | AI / Document Intelligence | Hackathon-winning product intelligence platform extracting data from PDFs, images & sheets | Python, React, Tailwind, MongoDB, Gemini API, OCR |
| **[EaseAttend](#)** | Smart Attendance Solution | Top 5 GFG HackSprint finalist; real-time attendance management & role-based dashboard | React, Node.js, Express, MongoDB, Tailwind |
| **[ExplainMe](#)** | Developer AI Tool | Complex codebase and architecture diagram explainer with interactive breakdown | React, Tailwind, Gemini API, AST |
| **[MediPlus](#)** | Healthcare Web Platform | Patient records, appointment scheduling, and automated medical reports | React, Node.js, Express, MongoDB |

---

## 🛠️ Tech Stack

```
Frontend:          React 18 • Next.js 14 (App Router) • TypeScript • Tailwind CSS
Animations:        Framer Motion 11 • Canvas Confetti • Smooth Lenis Scrolling
Backend & APIs:    FastAPI • Node.js • Express.js • REST APIs • Gemini API
Databases:         MongoDB
Languages:         Python • C • C++ • JavaScript • TypeScript • HTML5 • CSS3
Cloud & Tools:     Google Cloud Platform • Git • GitHub • Postman • VS Code
```

---

## 📂 Project Architecture

```plaintext
my-portfolio/
├── public/
│   ├── Shaurya_Hindocha_Resume.pdf  # Verified resume PDF asset
│   └── shaurya-profile.jpeg         # Profile image asset
├── src/
│   ├── app/
│   │   ├── globals.css              # Global styles, Tailwind directives & glass classes
│   │   ├── layout.tsx               # Root HTML structure, fonts & theme provider
│   │   ├── not-found.tsx            # Custom 404 page handler
│   │   └── page.tsx                 # Main single-page application orchestrator
│   ├── components/
│   │   ├── layout/                  # Navbar, Footer, AppShell, CommandPalette, LoadingScreen
│   │   ├── sections/                # Hero, About, Journey, Experience, Skills,
│   │   │                            # FeaturedProject, Projects, Achievements, Contact, Modals
│   │   └── ui/                      # TechIcon, SocialIcon, CardTilt, SectionHeading, etc.
│   ├── data/                        # Decoupled, type-safe data files
│   │   ├── personal.ts              # Bio, contacts, socials, and metrics
│   │   ├── journey.ts               # Chronological milestones (16 entries)
│   │   ├── experience.ts            # Professional work & internship records
│   │   ├── projects.ts              # Flagship & engineering projects data
│   │   ├── skills.ts                # Categorized technical toolkit
│   │   ├── achievements.ts          # Hackathon wins & honors
│   │   └── community.ts             # Leadership & event organizing records
│   └── lib/
│       └── utils.ts                 # Classname merge & helper utilities
├── tailwind.config.ts               # Custom color palette, animations & fonts
├── tsconfig.json                    # Strict TypeScript configuration
└── package.json                     # Dependencies & build scripts
```

---

## ⚡ Quick Start

### 1. Prerequisites
Ensure you have **Node.js 18.17+** (or 20+) installed on your machine.

```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/shaurya07-cell/shaurya-portfolio.git
cd shaurya-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Reloading (HMR).

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📬 Connect & Socials

I'm always excited to connect with fellow developers, engineers, and creators. Feel free to reach out!

- **Email**: [hindochashaurya4@gmail.com](mailto:hindochashaurya4@gmail.com)
- **LinkedIn**: [linkedin.com/in/shaurya-hindocha-47961b380](https://www.linkedin.com/in/shaurya-hindocha-47961b380/)
- **GitHub**: [@shaurya07-cell](https://github.com/shaurya07-cell)
- **GDG Profile**: [gdg.community.dev/u/m93szq](https://gdg.community.dev/u/m93szq/#/about)
- **Instagram**: [@shaurya._.2409_](https://www.instagram.com/shaurya._.2409_/)

---

<div align="center">

Designed & built by **Shaurya Hindocha** • Released under the [MIT License](LICENSE)

</div>
