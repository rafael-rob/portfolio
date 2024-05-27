import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SpeedInsights } from "@vercel/speed-insights/next";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Rafael Robalinho | FullStack developer",
  description: "étudiant en développement informatique en 3ème année",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          `font-sans h-full bg-background text-foreground`
        )}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
