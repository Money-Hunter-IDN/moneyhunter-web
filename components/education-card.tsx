"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface EducationCardProps {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    badge?: string;
}

export function EducationCard({ title, description, href, icon: Icon, badge }: EducationCardProps) {
    return (
        <Link
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            className="group block h-full"
        >
            <div className="relative h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-[#FF5900]/10 dark:border-[#FF5900]/20 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF5900]/10 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FF5900]/10 flex items-center justify-center text-[#FF5900] group-hover:bg-[#FF5900] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                    </div>
                    {badge && (
                        <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-[#FF5900] bg-[#FF5900]/10 rounded-full">
                            {badge}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FF5900] transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center text-sm font-semibold text-[#FF5900] group-hover:translate-x-1 transition-transform mt-auto">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
            </div>
        </Link>
    );
}
