"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { FaTelegram, FaDiscord, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Mail, Globe, BookOpen, Users, MessageSquare } from "lucide-react";

export function Footer() {
    const { language } = useLanguage();

    const t = {
        en: {
            tagline: "Building the next generation of Indonesian investors through peer-to-peer knowledge sharing.",
            company: "Community",
            academy: "Academy",
            support: "Contact & Support",
            links: {
                about: "About Community",
                faq: "Frequently Asked Questions",
                curriculum: "Learning Path",
                stocks: "Stock Market",
                crypto: "Cryptocurrency",
                guidelines: "Community Guidelines",
                security: "Security Tips",
            },
            copyright: "© 2026 Money Hunter. All rights reserved.",
            email_label: "Found a partnership opportunity?",
        },
        id: {
            tagline: "Membangun generasi investor Indonesia berikutnya melalui berbagi ilmu peer-to-peer.",
            company: "Komunitas",
            academy: "Akademi",
            support: "Kontak & Bantuan",
            links: {
                about: "Tentang Komunitas",
                faq: "Pertanyaan Umum (FAQ)",
                curriculum: "Alur Belajar",
                stocks: "Pasar Saham",
                crypto: "Cryptocurrency",
                guidelines: "Panduan Komunitas",
                security: "Tips Keamanan",
            },
            copyright: "© 2026 Money Hunter. Seluruh hak cipta dilindungi.",
            email_label: "Ada peluang kerjasama?",
        }
    }[language];

    return (
        <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 pt-8 pb-8 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#FF5900]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="flex items-center space-x-2 mb-6 group">
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:rotate-12">
                                <Image src="/android-chrome-192x192.png" fill alt="logo" className="object-contain" />
                            </div>
                            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#FF5900] to-orange-400 bg-clip-text text-transparent">
                                Money Hunter
                            </span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 max-w-md">
                            {t.tagline}
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://t.me/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
                                <FaTelegram className="w-4.5 h-4.5" />
                            </a>
                            <a href="https://discord.gg/PcrwafBjAA" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300">
                                <FaDiscord className="w-4.5 h-4.5" />
                            </a>
                            <a href="https://instagram.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300">
                                <FaInstagram className="w-4.5 h-4.5" />
                            </a>
                            <a href="https://x.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                <FaXTwitter className="w-4.5 h-4.5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <Users className="w-3.5 h-3.5 text-[#FF5900]" /> {t.company}
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/#features" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5900] transition-colors text-sm">{t.links.about}</Link></li>
                            <li><Link href="/#faq" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5900] transition-colors text-sm">{t.links.faq}</Link></li>
                            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5900] transition-colors text-sm">{t.links.guidelines}</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <BookOpen className="w-3.5 h-3.5 text-[#FF5900]" /> {t.academy}
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/education" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5900] transition-colors text-sm">{t.links.curriculum}</Link></li>
                            <li><Link href="/education" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5900] transition-colors text-sm">{t.links.stocks}</Link></li>
                            <li><Link href="/education" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5900] transition-colors text-sm">{t.links.crypto}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <MessageSquare className="w-3.5 h-3.5 text-[#FF5900]" /> {t.support}
                        </h4>
                        <div className="space-y-3">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 italic">
                                {t.email_label}
                            </p>
                            <a
                                href="mailto:moneyhunteridn@gmail.com"
                                className="group flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#FF5900]/30 transition-all duration-300"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#FF5900]/10 flex items-center justify-center text-[#FF5900] flex-shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tight group-hover:text-[#FF5900] transition-colors">Email</span>
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 truncate">
                                        moneyhunteridn@gmail.com
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 dark:text-gray-500 text-xs order-2 md:order-1">
                        {t.copyright}
                    </p>
                    <div className="flex items-center gap-6 order-1 md:order-2">
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xs transition-colors">{t.links.security}</Link>
                        <div className="w-1.5 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full" />
                        <Link href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xs transition-colors flex items-center gap-1">
                            <Globe className="w-3 h-3" /> moneyhunter.id
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
