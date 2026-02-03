"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Bitcoin } from "lucide-react";
import { FaTelegram, FaDiscord, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FadeInSection } from "@/components/fade-in-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { InvestmentCalculator } from "@/components/investment-calculator";
import { MarketTicker } from "@/components/market-ticker";
import { useLanguage } from "@/components/language-provider";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        badge: "2,000+ Learners • Since 2022",
        title_pre: "Web3 & Finance",
        title_highlight: "Community",
        desc: "A knowledge-sharing community where we're all students. Learn about stocks, cryptocurrencies, market analysis, and Web3 developments through peer-to-peer discussions and educational content.",
        cta_join: "Join Our Community",
        cta_faq: "View FAQ"
      },
      features: {
        title: "Knowledge Sharing",
        title_highlight: "Community",
        desc: "Connect with 2,000+ learners exploring stocks, crypto, and Web3. Share knowledge, learn from peers, and grow together in a supportive environment where everyone's a student.",
        points: [
          { title: "Multi-Asset Focus", desc: "Stocks, crypto, and Web3 discussions in one place" },
          { title: "Peer Learning", desc: "Everyone's a student, no gurus or mentors" },
          { title: "Education Focus", desc: "Knowledge sharing over profit showing" }
        ],
        social_title: "Join Our Community"
      },
      calculator: {
        title: "Plan Your",
        title_highlight: "Financial Future",
        desc: "See how small consistent investments can grow over time with the power of compound interest."
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about Money Hunter community.",
        items: [
          {
            q: "What makes Money Hunter different from other finance communities?",
            a: "We've been building this community since 2022 with one core principle: we're all students here. No gurus, no hierarchy, just genuine peer-to-peer learning. We cover both traditional markets (stocks) and digital assets (crypto, Web3) in one supportive environment."
          },
          {
            q: "What topics do you cover in the community?",
            a: "Our community covers stocks, cryptocurrencies, and Web3 developments. We have members specializing in technical analysis, fundamental research, and market analysis. Discussions range from beginner basics to advanced strategies across both traditional and digital assets."
          },
          {
            q: "Which platforms should I join and what's the difference?",
            a: "We're active across three platforms: Telegram for daily discussions and quick updates, Discord for more structured community interactions, and Instagram for educational content and market insights. Start with whichever platform you prefer, or join multiple for the full experience."
          }
        ]
      }
    },
    id: {
      hero: {
        badge: "2,000+ Belajar • Sejak 2022",
        title_pre: "Komunitas Web3 &",
        title_highlight: "Keuangan",
        desc: "Komunitas berbagi ilmu dimana kita semua adalah murid. Belajar saham, crypto, analisa pasar, dan perkembangan Web3 melalui diskusi peer-to-peer.",
        cta_join: "Gabung Komunitas",
        cta_faq: "Lihat FAQ"
      },
      features: {
        title: "Komunitas Berbagi",
        title_highlight: "Ilmu",
        desc: "Terhubung dengan 2,000+ pembelajar yang mendalami saham, crypto, dan Web3. Berbagi ilmu dan tumbuh bersama di lingkungan yang suportif.",
        points: [
          { title: "Fokus Multi-Aset", desc: "Diskusi Saham, Crypto, dan Web3 di satu tempat" },
          { title: "Peer Learning", desc: "Semua adalah murid, tidak ada guru atau mentor" },
          { title: "Fokus Edukasi", desc: "Berbagi ilmu lebih penting daripada pamer profit" }
        ],
        social_title: "Gabung Sosial Media Kami"
      },
      calculator: {
        title: "Rencanakan",
        title_highlight: "Masa Depanmu",
        desc: "Lihat bagaimana investasi rutin kecil bisa tumbuh seiring waktu dengan kekuatan bunga majemuk."
      },
      faq: {
        title: "Pertanyaan Umum (FAQ)",
        subtitle: "Segala hal yang perlu kamu tahu tentang komunitas Money Hunter.",
        items: [
          {
            q: "Apa bedanya Money Hunter dengan komunitas lain?",
            a: "Kami membangun komunitas ini sejak 2022 dengan satu prinsip: kita semua murid. Tidak ada guru, tidak ada hierarki, hanya belajar tulus antar teman. Kami membahas pasar tradisional (saham) dan aset digital (crypto) dalam satu wadah."
          },
          {
            q: "Topik apa saja yang dibahas?",
            a: "Komunitas kami membahas saham, cryptocurrency, dan Web3. Kami punya member yang jago analisa teknikal, fundamental, dan analisa pasar. Diskusi mulai dari dasar banget sampai strategi tingkat lanjut."
          },
          {
            q: "Platform mana yang harus saya ikuti?",
            a: "Kami aktif di 3 platform: Telegram untuk diskusi harian santai, Discord untuk diskusi terstruktur dan materi, serta Instagram untuk konten edukasi visual. Mulai dari yang paling kamu suka aja!"
          }
        ]
      }
    }
  };

  const handleJoin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open("https://t.me/moneyhunteridn", "_blank");
    } else {
      window.open("https://discord.gg/PcrwafBjAA", "_blank");
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="fixed inset-0 bg-gradient-to-r from-[#FF5900]/8 via-white dark:via-gray-950 to-[#FF5900]/8"></div>
      <div className="relative">
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-24 md:pb-16 px-6 sm:px-4 min-h-[90vh] flex items-center justify-center">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-6">
              <Badge className="bg-[#FF5900]/10 text-[#FF5900] border-[#FF5900]/30 mb-4 shadow-md shadow-[#FF5900]/10 text-sm sm:text-base">
                <Bitcoin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.hero.badge}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 dark:from-white via-gray-700 dark:via-gray-300 to-gray-900 dark:to-white bg-clip-text text-transparent">
              {t.hero.title_pre} <span className="text-[#FF5900] block sm:inline">{t.hero.title_highlight}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="#features"
                onClick={handleJoin}
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold rounded-lg bg-[#FF5900] border-2 border-transparent text-white hover:bg-[#FF5900]/80 hover:shadow-lg hover:shadow-[#FF5900]/25 transition-all duration-200 shadow-md w-full sm:w-auto cursor-pointer"
              >
                {t.hero.cta_join}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold rounded-lg border-2 border-[#FF5900] text-[#FF5900] bg-white dark:bg-gray-900 hover:bg-[#FF5900]/10 hover:text-[#FF5900] hover:shadow-lg hover:shadow-[#FF5900]/25 transition-all duration-200 shadow-sm group w-full sm:w-auto"
              >
                {t.hero.cta_faq}
              </a>
            </div>
          </div>
        </section>

        <MarketTicker />

        <section id="features" className="py-24 sm:py-36 md:py-40 px-6 sm:px-4 flex items-center justify-center">
          <FadeInSection>
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="md:col-span-1 lg:col-span-7">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    {t.features.title}{" "}
                    <span className="text-[#FF5900]">{t.features.title_highlight}</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {t.features.desc}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    {t.features.points.map((point, i) => (
                      <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FF5900] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{point.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-1 lg:col-span-5">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {t.features.social_title}
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    <a href="https://t.me/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                          <FaTelegram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Telegram</h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Daily discussions & updates</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500" />
                    </a>

                    <a href="https://discord.gg/PcrwafBjAA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-lg transition-colors group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                          <FaDiscord className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Discord</h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Structured community</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-500" />
                    </a>

                    <a href="https://instagram.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-pink-50 dark:bg-pink-950/50 hover:bg-pink-100 dark:hover:bg-pink-900/50 rounded-lg transition-colors group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-bl from-purple-600 via-pink-500 to-yellow-400 rounded-lg flex items-center justify-center">
                          <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Instagram</h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Educational content</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-pink-500" />
                    </a>

                    <a href="https://x.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                          <FaXTwitter className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">X (Twitter)</h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Latest news & insights</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-black" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section id="calculator" className="py-20 sm:py-24 px-6 sm:px-4 flex items-center justify-center">
          <FadeInSection>
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t.calculator.title} <span className="text-[#FF5900]">{t.calculator.title_highlight}</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  {t.calculator.desc}
                </p>
              </div>
              <InvestmentCalculator />
            </div>
          </FadeInSection>
        </section>

        <section id="faq" className="py-20 sm:py-24 md:py-40 px-6 sm:px-4 flex items-center justify-center">
          <FadeInSection>
            <div className="container mx-auto max-w-3xl px-4 sm:px-0">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t.faq.title}
                </h2>
                <p className="pt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                  {t.faq.subtitle}
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {t.faq.items.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i + 1}`} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-[#FF5900]/10 dark:border-[#FF5900]/20 rounded-lg px-4 sm:px-6 shadow-md shadow-[#FF5900]/5 hover:shadow-lg hover:shadow-[#FF5900]/10 transition-shadow duration-200">
                    <AccordionTrigger className="text-gray-900 dark:text-white hover:text-[#FF5900] text-base sm:text-lg accordion-trigger text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInSection>
        </section>

        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
