import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../providers/theme-provider";
import Header from '@/components/struct/Header';
import Footer from "@/components/struct/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computers Lore",
  description: "Aprenda a história e arquitetura dos computadores de forma dinâmica e interativa!",
  keywords: ["computadores", "história", "arquitetura", "computação"],
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
          </ThemeProvider>
      </body>
    </html>
  );
};