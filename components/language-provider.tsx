"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "id";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
    if (typeof navigator === "undefined") return "en";
    const lang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || "en";
    return lang.toLowerCase().startsWith("id") ? "id" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language | null;
        if (savedLang === "en" || savedLang === "id") {
            setLanguage(savedLang);
        } else {
            setLanguage(detectBrowserLanguage());
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const toggleLanguage = () => {
        handleSetLanguage(language === "en" ? "id" : "en");
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
