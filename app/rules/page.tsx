"use client";

import { FadeInSection } from "@/components/fade-in-section";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-provider";
import { ShieldCheck, Users, AlertTriangle, CheckCircle2, Lock, MessageSquare, Flame, Ban } from "lucide-react";

export default function RulesPage() {
    const { language } = useLanguage();

    const t = {
        en: {
            title: "Community Guidelines &",
            title_highlight: "Security",
            subtitle: "To maintain a healthy and safe learning environment, please follow these rules and safety tips.",
            guidelines: {
                title: "Community Guidelines",
                desc: "Our community is a place for learning. Let's keep it professional and supportive.",
                items: [
                    {
                        title: "No Financial Advice",
                        desc: "Everything shared is for educational purposes only. Always do your own research (DYOR) before making investment decisions.",
                        icon: AlertTriangle,
                        color: "text-amber-500"
                    },
                    {
                        title: "Respect & Professionalism",
                        desc: "Treat all members with respect. No hate speech, harassment, or toxic behavior. We are all students here.",
                        icon: Users,
                        color: "text-blue-500"
                    },
                    {
                        title: "No Spam or Shilling",
                        desc: "Do not post unsolicited links, referral codes, or promote low-quality projects. Keep discussions high-value.",
                        icon: Ban,
                        color: "text-red-500"
                    },
                    {
                        title: "No Gurus/Mentors",
                        desc: "We promote peer-to-peer learning. Do not claim to be a guru or charge members for private mentorship.",
                        icon: MessageSquare,
                        color: "text-[#FF5900]"
                    }
                ]
            },
            security: {
                title: "Security & Safety Tips",
                desc: "The Web3 and Finance space can be risky. Protect yourself with these essential habits.",
                items: [
                    {
                        title: "Beware of DMs",
                        desc: "Admins will NEVER DM you first for funds or personal info. Most DMs claiming to be 'Support' are scams.",
                        icon: Lock,
                        color: "text-[#FF5900]"
                    },
                    {
                        title: "Protect Your Seeds",
                        desc: "Never share your wallet recovery phrase (seed phrase) with anyone. No legitimate app or person will ever ask for it.",
                        icon: ShieldCheck,
                        color: "text-green-500"
                    },
                    {
                        title: "Verify All Links",
                        desc: "Always double-check URLs before connecting your wallet. Use official sources like our Discord or Telegram channels.",
                        icon: CheckCircle2,
                        color: "text-blue-500"
                    },
                    {
                        title: "Hardware Wallets",
                        desc: "For long-term holdings, we strongly recommend using hardware wallets for an extra layer of security.",
                        icon: Flame,
                        color: "text-orange-600"
                    }
                ]
            }
        },
        id: {
            title: "Panduan Komunitas &",
            title_highlight: "Keamanan",
            subtitle: "Untuk menjaga lingkungan belajar yang sehat dan aman, harap ikuti aturan dan tips keamanan berikut.",
            guidelines: {
                title: "Panduan Komunitas",
                desc: "Komunitas kita adalah tempat untuk belajar. Mari jaga agar tetap profesional dan suportif.",
                items: [
                    {
                        title: "Bukan Saran Finansial",
                        desc: "Semua yang dibagikan murni untuk edukasi. Selalu lakukan riset sendiri (DYOR) sebelum mengambil keputusan investasi.",
                        icon: AlertTriangle,
                        color: "text-amber-500"
                    },
                    {
                        title: "Respek & Profesional",
                        desc: "Hargai semua member. Tidak ada ujaran kebencian, pelecehan, atau perilaku toksik. Kita semua di sini adalah murid.",
                        icon: Users,
                        color: "text-blue-500"
                    },
                    {
                        title: "Dilarang Spam & Shilling",
                        desc: "Jangan posting link sembarangan, kode referral, atau mempromosikan koin/saham 'gorengan'. Jaga diskusi tetap berkualitas.",
                        icon: Ban,
                        color: "text-red-500"
                    },
                    {
                        title: "Tidak Ada Guru/Guru-an",
                        desc: "Kita mengusung peer-learning. Jangan mengaku guru atau menarik biaya dari member untuk jasa coaching pribadi.",
                        icon: MessageSquare,
                        color: "text-[#FF5900]"
                    }
                ]
            },
            security: {
                title: "Tips Keamanan & Safety",
                desc: "Dunia Web3 & Keuangan punya risiko tinggi. Lindungi dirimu dengan kebiasaan-kebiasaan penting ini.",
                items: [
                    {
                        title: "Waspada DM",
                        desc: "Admin Money Hunter TIDAK PERNAH DM kamu duluan untuk minta dana. Kebanyakan DM yang mengaku 'Support' adalah scam.",
                        icon: Lock,
                        color: "text-[#FF5900]"
                    },
                    {
                        title: "Jaga Seed Phrase",
                        desc: "Jangan pernah bagi recovery phrase (seed phrase) dompetmu ke siapa pun. Tidak ada aplikasi resmi yang akan memintanya.",
                        icon: ShieldCheck,
                        color: "text-green-500"
                    },
                    {
                        title: "Verifikasi Semua Link",
                        desc: "Selalu cek ulang URL sebelum connect wallet. Gunakan link resmi dari Discord atau Telegram kami.",
                        icon: CheckCircle2,
                        color: "text-blue-500"
                    },
                    {
                        title: "Gunakan Hardware Wallet",
                        desc: "Untuk aset jangka panjang, kami sangat menyarankan penggunaan hardware wallet demi keamanan ekstra.",
                        icon: Flame,
                        color: "text-orange-600"
                    }
                ]
            }
        }
    }[language];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Header Section */}
            <section className="pt-32 pb-16 px-6 text-center">
                <FadeInSection>
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                            {t.title} <span className="text-[#FF5900]">{t.title_highlight}</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            {t.subtitle}
                        </p>
                    </div>
                </FadeInSection>
            </section>

            {/* Content Sections */}
            <section className="pb-24 px-6">
                <div className="container mx-auto max-w-6xl space-y-24">
                    {/* Guidelines */}
                    <div>
                        <FadeInSection>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.guidelines.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400">{t.guidelines.desc}</p>
                            </div>
                        </FadeInSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            {t.guidelines.items.map((item, i) => (
                                <FadeInSection key={i} delay={i * 100}>
                                    <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl hover:shadow-[#FF5900]/5 hover:-translate-y-1">
                                        <div className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-6 ${item.color}`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>

                    {/* Security */}
                    <div>
                        <FadeInSection>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.security.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400">{t.security.desc}</p>
                            </div>
                        </FadeInSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            {t.security.items.map((item, i) => (
                                <FadeInSection key={i} delay={i * 100}>
                                    <div className="p-6 rounded-2xl bg-[#FF5900]/5 dark:bg-[#FF5900]/5 border border-[#FF5900]/10 dark:border-[#FF5900]/20 transition-all hover:shadow-xl hover:shadow-[#FF5900]/5 hover:-translate-y-1">
                                        <div className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-6 ${item.color}`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
