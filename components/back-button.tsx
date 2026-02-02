"use client";

import { ArrowLeft } from "lucide-react";

export function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Halaman Sebelumnya
        </button>
    );
}
