"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { ResumeModal } from "@/components/sections/ResumeModal";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  useEffect(() => {
    const listener = () => setIsResumeOpen(true);
    window.addEventListener("open-resume-modal", listener);
    return () => window.removeEventListener("open-resume-modal", listener);
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar onOpenResume={handleOpenResume} />
      <CommandPalette onOpenResume={handleOpenResume} />
      <main>{children}</main>
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </>
  );
}
