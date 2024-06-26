import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import React from "react";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-Inter" });
const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-Noto" });

export const metadata: Metadata = {
  title: "T-SYS",
  description: "It is an online ticketing system built on open source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${noto.variable} font-Noto`}>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
