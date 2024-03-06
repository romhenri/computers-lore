import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

import Header from '@/components/comp/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computers Lore",
  description: "Next app",
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
          </ThemeProvider>
      </body>
    </html>
  );
};