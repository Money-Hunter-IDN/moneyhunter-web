"use client";

import { FadeInSection } from "@/components/fade-in-section";
import { EducationCard } from "@/components/education-card";
import {
    BookOpen,
    CandlestickChart,
    Wallet,
    ShieldCheck,
    PieChart,
    TrendingUp,
    Brain,
    Blocks,
    Globe,
    LineChart
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function EducationPage() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "Money Hunter Academy",
            title: "Curated Knowledge for",
            subtitle: "Smart Investors",
            description: "Level up your financial literacy with a structured curriculum. From stock market basics to future blockchain technology.",
            cta_title: "Need Deeper Discussion?",
            cta_desc: "Theory isn't enough. Join 2,000+ members in Discord for real-time discussion, stock picks, and daily market analysis.",
            cta_button: "Join Discord Class",
            sections: {
                stocks: {
                    title: "Stock Market",
                    desc: "The foundation of long-term investing and business ownership.",
                    focus: "Primary Focus",
                    cards: [
                        {
                            title: "Value Investing",
                            desc: "How to analyze financial reports and find undervalued companies. The Warren Buffett way.",
                            badge: "Fundamental"
                        },
                        {
                            title: "Technical Analysis",
                            desc: "Reading charts, trends, and market psychology via candlestick patterns to determine entry momentum.",
                            badge: "Technical"
                        },
                        {
                            title: "Dividends & Compound Interest",
                            desc: "Building a passive income stream that grows exponentially over time.",
                            badge: null
                        }
                    ]
                },
                crypto: {
                    title: "Cryptocurrency",
                    desc: "Decentralized digital assets and the future of money.",
                    cards: [
                        {
                            title: "Wallet Security (Must Read)",
                            desc: "Cold vs Hot Wallets. Understanding 'Seed Phrases' and why exchanges aren't safe for storage.",
                            badge: "Security"
                        },
                        {
                            title: "Bitcoin vs Altcoins",
                            desc: "Understanding Bitcoin's role as 'Digital Gold' and Altcoins as technological innovation (or speculation).",
                            badge: null
                        }
                    ]
                },
                blockchain: {
                    title: "Blockchain Tech",
                    desc: "The technology behind crypto assets. Smart contracts and Web3.",
                    cards: [
                        {
                            title: "What is Blockchain?",
                            desc: "Visual explanation of how a 'Distributed Ledger' works without a central server.",
                            badge: "Tech"
                        },
                        {
                            title: "DeFi (Decentralized Finance)",
                            desc: "Global financial system without banks. Peer-to-peer lending, borrowing, and trading.",
                            badge: null
                        }
                    ]
                },
                mindset: {
                    title: "Investment Mindset",
                    desc: "Psychology is 80% of trading and investing success.",
                    cards: [
                        {
                            title: "Psychology of Trading",
                            desc: "Controlling FOMO (Fear Of Missing Out) and Panic Selling. Why emotion is a trader's biggest enemy.",
                            badge: "Mindset"
                        },
                        {
                            title: "Risk Management",
                            desc: "The art of capital protection. Position sizing, Stop Loss, and Risk/Reward Ratio.",
                            badge: "Critical"
                        },
                        {
                            title: "DYOR (Do Your Own Research)",
                            desc: "How to conduct independent research instead of just following influencers.",
                            badge: null
                        }
                    ]
                }
            }
        },
        id: {
            tag: "Money Hunter Academy",
            title: "Materi Kurasi untuk",
            subtitle: "Investor Cerdas",
            description: "Tingkatkan literasi finansial Anda melalui kurikulum terstruktur. Dari dasar pasar saham hingga teknologi blockchain masa depan.",
            cta_title: "Butuh Diskusi Lebih Dalam?",
            cta_desc: "Teori saja tidak cukup. Bergabunglah dengan 2,000+ member di Discord untuk diskusi real-time, bedah saham, dan analisa market harian.",
            cta_button: "Gabung Kelas Discord",
            sections: {
                stocks: {
                    title: "Pasar Saham",
                    desc: "Pondasi investasi jangka panjang dan kepemilikan bisnis.",
                    focus: "Primary Focus",
                    cards: [
                        {
                            title: "Value Investing",
                            desc: "Cara menganalisis laporan keuangan dan menemukan perusahaan 'salah harga'. Pendekatan Warren Buffett.",
                            badge: "Fundamental"
                        },
                        {
                            title: "Analisis Teknikal",
                            desc: "Membaca grafik, tren, dan psikologi pasar melalui candlestick patterns untuk menentukan momentum entry.",
                            badge: "Technical"
                        },
                        {
                            title: "Dividen & Compound Interest",
                            desc: "Strategi membangun passive income stream yang tumbuh eksponensial seiring waktu.",
                            badge: null
                        }
                    ]
                },
                crypto: {
                    title: "Cryptocurrency",
                    desc: "Aset digital terdesentralisasi dan masa depan uang.",
                    cards: [
                        {
                            title: "Wallet Security (Wajib)",
                            desc: "Perbedaan Cold vs Hot Wallet. Memahami 'Seed Phrase' dan kenapa exchange bukan tempat aman menyimpan aset.",
                            badge: "Security"
                        },
                        {
                            title: "Bitcoin vs Altcoins",
                            desc: "Memahami peran Bitcoin sebagai 'Emas Digital' dan Altcoins sebagai inovasi teknologi (atau spekulasi).",
                            badge: null
                        }
                    ]
                },
                blockchain: {
                    title: "Blockchain Tech",
                    desc: "Teknologi di balik aset crypto. Smart contracts dan Web3.",
                    cards: [
                        {
                            title: "Apa itu Blockchain?",
                            desc: "Penjelasan visual bagaimana 'Distributed Ledger' bekerja tanpa server pusat.",
                            badge: "Tech"
                        },
                        {
                            title: "DeFi (Decentralized Finance)",
                            desc: "Sistem keuangan global tanpa bank. Lending, borrowing, dan trading secara peer-to-peer.",
                            badge: null
                        }
                    ]
                },
                mindset: {
                    title: "Mentalitas Investasi",
                    desc: "Psikologi adalah 80% dari kesuksesan trading dan investasi.",
                    cards: [
                        {
                            title: "Psychology of Trading",
                            desc: "Mengendalikan FOMO (Fear Of Missing Out) dan Panic Selling. Kenapa emosi adalah musuh terbesar trader.",
                            badge: "Mindset"
                        },
                        {
                            title: "Risk Management",
                            desc: "Seni melindungi modal. Position sizing, Stop Loss, dan Risk/Reward Ratio.",
                            badge: "Critical"
                        },
                        {
                            title: "DYOR (Do Your Own Research)",
                            desc: "Cara melakukan riset mandiri dan tidak hanya 'ikut-ikutan' influencer.",
                            badge: null
                        }
                    ]
                }
            }
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 sm:px-4">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-[#FF5900]/5 via-white dark:via-gray-950 to-[#FF5900]/5 -z-10"></div>

            <div className="container mx-auto max-w-6xl">
                <FadeInSection>
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#FF5900] uppercase bg-[#FF5900]/10 rounded-full">
                            {t.tag}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5900] to-orange-500">{t.subtitle}</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            {t.description}
                        </p>
                    </div>
                </FadeInSection>

                <div className="space-y-24">
                    {/* Module 1: Stocks (Priority) */}
                    <section>
                        <FadeInSection>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <TrendingUp className="w-6 h-6 text-[#FF5900]" />
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.sections.stocks.title}</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{t.sections.stocks.desc}</p>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                                    {t.sections.stocks.focus}
                                </span>
                            </div>
                        </FadeInSection>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FadeInSection delay={100}>
                                <EducationCard
                                    title={t.sections.stocks.cards[0].title}
                                    description={t.sections.stocks.cards[0].desc}
                                    href="https://www.investopedia.com/terms/v/valueinvesting.asp"
                                    icon={BookOpen}
                                    badge={t.sections.stocks.cards[0].badge || undefined}
                                />
                            </FadeInSection>
                            <FadeInSection delay={200}>
                                <EducationCard
                                    title={t.sections.stocks.cards[1].title}
                                    description={t.sections.stocks.cards[1].desc}
                                    href="https://www.investopedia.com/terms/t/technicalanalysis.asp"
                                    icon={CandlestickChart}
                                    badge={t.sections.stocks.cards[1].badge || undefined}
                                />
                            </FadeInSection>
                            <FadeInSection delay={300}>
                                <EducationCard
                                    title={t.sections.stocks.cards[2].title}
                                    description={t.sections.stocks.cards[2].desc}
                                    href="https://www.investopedia.com/terms/d/dividend.asp"
                                    icon={PieChart}
                                />
                            </FadeInSection>
                        </div>
                    </section>

                    {/* Module 2: Cryptocurrency */}
                    <section>
                        <FadeInSection>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Wallet className="w-6 h-6 text-[#FF5900]" />
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.sections.crypto.title}</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{t.sections.crypto.desc}</p>
                                </div>
                            </div>
                        </FadeInSection>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FadeInSection delay={100}>
                                <EducationCard
                                    title={t.sections.crypto.cards[0].title}
                                    description={t.sections.crypto.cards[0].desc}
                                    href="https://metamask.io/learn/"
                                    icon={ShieldCheck}
                                    badge={t.sections.crypto.cards[0].badge || undefined}
                                />
                            </FadeInSection>
                            <FadeInSection delay={200}>
                                <EducationCard
                                    title={t.sections.crypto.cards[1].title}
                                    description={t.sections.crypto.cards[1].desc}
                                    href="https://www.investopedia.com/terms/b/bitcoin.asp"
                                    icon={LineChart}
                                />
                            </FadeInSection>
                        </div>
                    </section>

                    {/* Module 3: Blockchain Technology */}
                    <section>
                        <FadeInSection>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Blocks className="w-6 h-6 text-[#FF5900]" />
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.sections.blockchain.title}</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{t.sections.blockchain.desc}</p>
                                </div>
                            </div>
                        </FadeInSection>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FadeInSection delay={100}>
                                <EducationCard
                                    title={t.sections.blockchain.cards[0].title}
                                    description={t.sections.blockchain.cards[0].desc}
                                    href="https://andersbrownworth.com/blockchain/"
                                    icon={Globe}
                                    badge={t.sections.blockchain.cards[0].badge || undefined}
                                />
                            </FadeInSection>
                            <FadeInSection delay={200}>
                                <EducationCard
                                    title={t.sections.blockchain.cards[1].title}
                                    description={t.sections.blockchain.cards[1].desc}
                                    href="https://academy.binance.com/en/articles/what-is-defi"
                                    icon={PieChart}
                                />
                            </FadeInSection>
                        </div>
                    </section>

                    {/* Module 4: Investment Mindset */}
                    <section>
                        <FadeInSection>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Brain className="w-6 h-6 text-[#FF5900]" />
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.sections.mindset.title}</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{t.sections.mindset.desc}</p>
                                </div>
                            </div>
                        </FadeInSection>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FadeInSection delay={100}>
                                <EducationCard
                                    title={t.sections.mindset.cards[0].title}
                                    description={t.sections.mindset.cards[0].desc}
                                    href="https://www.investopedia.com/articles/trading/02/110502.asp"
                                    icon={Brain}
                                    badge={t.sections.mindset.cards[0].badge || undefined}
                                />
                            </FadeInSection>
                            <FadeInSection delay={200}>
                                <EducationCard
                                    title={t.sections.mindset.cards[1].title}
                                    description={t.sections.mindset.cards[1].desc}
                                    href="https://www.investopedia.com/terms/r/riskmanagement.asp"
                                    icon={ShieldCheck}
                                    badge={t.sections.mindset.cards[1].badge || undefined}
                                />
                            </FadeInSection>
                            <FadeInSection delay={300}>
                                <EducationCard
                                    title={t.sections.mindset.cards[2].title}
                                    description={t.sections.mindset.cards[2].desc}
                                    href="https://academy.binance.com/en/glossary/dyor"
                                    icon={BookOpen}
                                />
                            </FadeInSection>
                        </div>
                    </section>
                </div>

                <div className="mt-24 text-center bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.cta_title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                        {t.cta_desc}
                    </p>
                    <a
                        href="https://discord.gg/PcrwafBjAA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg bg-[#FF5900] text-white hover:bg-[#FF5900]/80 transition-all shadow-lg shadow-[#FF5900]/20 transform hover:-translate-y-1"
                    >
                        {t.cta_button}
                    </a>
                </div>
            </div>
        </div>
    );
}
