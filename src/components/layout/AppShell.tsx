"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { ResumeModal } from "@/components/sections/ResumeModal";
import { VisitorTracker } from "@/components/analytics/VisitorTracker";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  useEffect(() => {
    const listener = () => setIsResumeOpen(true);
    window.addEventListener("open-resume-modal", listener);
    return () => window.removeEventListener("open-resume-modal", listener);
  }, []);

  // Dedicated clean view for Admin Portal (no portfolio chrome)
  if (isAdmin) {
    return (
      <div className="w-full min-h-screen bg-[#050609] text-white">
        {children}
      </div>
    );
  }

  return (
    <>
      <VisitorTracker />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar onOpenResume={handleOpenResume} />
      <CommandPalette onOpenResume={handleOpenResume} />
      <main className="w-full max-w-full overflow-x-clip">{children}</main>
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </>
  );
}
