import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Server Actions no Next",
  description: "Aprendendo server actions no next.",
  image: "/public/anime.png",
  type: "website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/anime.png" />
      </head>
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#141414]">
          <Hero />
          {children}
        </main>
      </body>
    </html>
  );
}
