import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Agentic Frontier - AI & Autonomous Workflows Presentation",
  description: "A premium interactive web presentation on the future of Agentic AI, system architectures, and human-agent collaboration workflows.",
  authors: [{ name: "Antigravity AI" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-hidden">
        {children}
      </body>
    </html>
  );
}
