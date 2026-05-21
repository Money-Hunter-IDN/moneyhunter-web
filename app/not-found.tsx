"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { BackButton } from "@/components/back-button";
import { useLanguage } from "@/components/language-provider";

export default function NotFound() {
    const { language } = useLanguage();

    const t = {
        en: {
            title: "Page Not Found",
            desc: "Sorry, the page you're looking for doesn't exist or has been moved.",
            home: "Back to Home",
        },
        id: {
            title: "Halaman Tidak Ditemukan",
            desc: "Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.",
            home: "Kembali ke Beranda",
        },
    }[language];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <div className="mb-8">
                    <span className="text-[120px] sm:text-[150px] font-bold bg-gradient-to-r from-[#FF5900] to-[#FF5900]/60 bg-clip-text text-transparent leading-none">
                        404
                    </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {t.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-base sm:text-lg">
                    {t.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[#FF5900] text-white hover:bg-[#FF5900]/90 hover:shadow-lg hover:shadow-[#FF5900]/25 transition-all duration-200 shadow-md"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        {t.home}
                    </Link>
                    <BackButton />
                </div>

                <div className="mt-16 flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF5900]/20"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF5900]/40"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF5900]/60"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF5900]/80"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF5900]"></div>
                </div>
            </div>
        </div>
    );
}
