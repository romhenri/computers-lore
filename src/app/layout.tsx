import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../providers/ThemeProvider";
import Header from '@/components/struct/Header';
import Footer from "@/components/struct/Footer";
import MobileMenu from "@/components/struct/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computers Lore",
  description: "Aprenda a história e arquitetura dos computadores de forma dinâmica e interativa! A partir da listagem de várias máquina e a história de cada geração.",
  keywords: ["computadores", "história", "arquitetura", "computação"],

  openGraph: {
    title: "Computers Lore",
    description: "Aprenda a história e arquitetura dos computadores de forma dinâmica e interativa!",
    url: "https://computers-lore.vercel.app",
    images: [
      {
        url: "https://computers-lore.vercel.app/assets/banner.png",
        width: 600,
        height: 300,
        alt: "Computers Lore Website",
      },
    ],
    type: "website",
  },

  other: {
    author: "Rômulo Henri",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            
            <MobileMenu />
          </ThemeProvider>
      </body>
    </html>
  );
};