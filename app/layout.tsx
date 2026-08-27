import type { Metadata } from "next";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "A3Fitness — Luxury Gym, Spa & Performance Club",
  description: "Experience A3Fitness luxury fitness & performance club. World-class biomechanics, Finnish saunas, cold plunge contrast therapy, and real-time smart member portals.",
  keywords: ["A3Fitness", "Gym", "Luxury Fitness", "Spa", "Sauna", "Cold Plunge", "Personal Trainer", "Next.js Gym App"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-emerald-500 selection:text-zinc-950">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}