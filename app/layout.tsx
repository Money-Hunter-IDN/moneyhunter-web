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
    default: "Money Hunter | Global Web3 & Finance Education Community",
    template: "%s | Money Hunter",
  },
  description:
    "Join Money Hunter, a global peer-to-peer learning community for Web3, Cryptocurrencies, and Stock Markets. Since 2022, we've helped 2,000+ learners master financial literacy.",
  keywords: [
    "Money Hunter",
    "Web3 Community",
    "Finance Education",
    "Crypto Learning",
    "Global Markets",
    "Global Finance Community",
    "Learn Blockchain",
    "Value Investing",
    "Crypto Analysis",
    "Peer-to-peer Learning",
    "Money Hunter IDN",
  ],
  authors: [{ name: "Money Hunter Community" }],
  creator: "Money Hunter",
  publisher: "Money Hunter",
  metadataBase: new URL("https://moneyhunter.xyz"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/?lang=en",
      "id-ID": "/?lang=id",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moneyhunter.id",
    siteName: "Money Hunter",
    title: "Money Hunter | Global Web3 & Finance Education Community",
    description:
      "A global knowledge-sharing community for Web3 and Finance. Lean about stocks, crypto, and market analysis with 2,000+ members worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Money Hunter - Global Education Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Hunter | Global Web3 & Finance Education",
    description:
      "Join 2,000+ learners worldwide sharing knowledge about Web3, Stocks, and Crypto since 2022.",
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
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Money Hunter",
              "url": "https://moneyhunter.xyz",
              "logo": "https://moneyhunter.xyz/android-chrome-192x192.png",
              "sameAs": [
                "https://x.com/moneyhunteridn",
                "https://instagram.com/moneyhunteridn",
                "https://discord.gg/PcrwafBjAA",
                "https://t.me/moneyhunteridn"
              ],
              "description": "Join the global Money Hunter network for Web3 and Finance education. Peer-to-peer learning for stocks, crypto, and blockchain technology.",
              "foundingDate": "2022"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Money Hunter",
              "url": "https://moneyhunter.xyz",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://moneyhunter.xyz/education?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
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