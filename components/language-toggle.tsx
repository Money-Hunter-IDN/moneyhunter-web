"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";


export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            title={language === "en" ? "Switch to Indonesian" : "Switch to English"}
            className="text-gray-600 dark:text-gray-400 hover:text-[#FF5900] dark:hover:text-[#FF5900] transition-colors"
        >
            <div className="flex items-center gap-1 font-bold text-sm">
                <span>{language.toUpperCase()}</span>
            </div>
        </Button>
    );
}
