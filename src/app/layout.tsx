import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import { personalData } from "@/data/personal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050609",
};

export const metadata: Metadata = {
  title: `${personalData.name} | Computer Science Student & Full Stack Developer`,
  description: personalData.shortIntro,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Engineer",
    "Computer Science Portfolio",
    personalData.name,
  ],
  authors: [{ name: personalData.name }],
  openGraph: {
    title: `${personalData.name} — Personal Portfolio`,
    description: personalData.shortIntro,
    url: "https://shauryasingh.dev",
    siteName: `${personalData.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} — Portfolio`,
    description: personalData.shortIntro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} overflow-x-clip max-w-full`}
    >
      <body className="antialiased selection:bg-blue-500 selection:text-white overflow-x-clip max-w-full w-full">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
