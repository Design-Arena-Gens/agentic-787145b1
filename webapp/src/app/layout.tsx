import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agent Primer",
  description:
    "Learn what an AI agent is, explore the lifecycle, key components, and real-world applications.",
  metadataBase: new URL("https://agentic-787145b1.vercel.app"),
  openGraph: {
    title: "AI Agent Primer",
    description:
      "Understand how modern AI agents perceive, plan, act, and learn across industries.",
    url: "https://agentic-787145b1.vercel.app",
    siteName: "AI Agent Primer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Primer",
    description:
      "A concise guide to the anatomy, lifecycle, and use cases of autonomous AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
