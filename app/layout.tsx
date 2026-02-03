import type React from "react";
import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: {
    default: "Money Hunter - Web3 & Finance Community Indonesia",
    template: "%s | Money Hunter",
  },
  description:
    "Komunitas belajar Web3, crypto, dan finance Indonesia. Bergabung dengan 2,000+ learners sejak 2022. Belajar bersama tentang stocks, cryptocurrency, dan blockchain.",
  keywords: [
    "Web3",
    "crypto",
    "cryptocurrency",
    "finance",
    "komunitas",
    "Indonesia",
    "blockchain",
    "DeFi",
    "stocks",
    "trading",
    "belajar crypto",
  ],
  authors: [{ name: "Money Hunter Community" }],
  creator: "Money Hunter",
  publisher: "Money Hunter",
  metadataBase: new URL("https://moneyhunter.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://moneyhunter.id",
    siteName: "Money Hunter",
    title: "Money Hunter - Web3 & Finance Community Indonesia",
    description:
      "Komunitas belajar Web3, crypto, dan finance Indonesia. Bergabung dengan 2,000+ learners sejak 2022.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Money Hunter - Web3 & Finance Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Hunter - Web3 & Finance Community Indonesia",
    description:
      "Komunitas belajar Web3, crypto, dan finance Indonesia. Bergabung dengan 2,000+ learners sejak 2022.",
    images: ["/og-image.png"],
    creator: "@moneyhunteridn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <style>{`
html {
  font-family: 'Plus Jakarta Sans', sans-serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          <LanguageProvider>
            {/* Skip to content for accessibility */}
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}