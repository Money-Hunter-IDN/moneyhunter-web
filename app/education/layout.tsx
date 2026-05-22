import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Education",
    description: "Level up your financial literacy with Money Hunter's curated curriculum. Learn stock market basics, cryptocurrency, blockchain technology, and investment mindset from 2,000+ community members.",
    alternates: {
        canonical: "https://moneyhunter.xyz/education",
    },
    openGraph: {
        title: "Money Hunter Academy | Web3 & Finance Education",
        description: "Curated learning path covering stocks, crypto, blockchain, and investment mindset. Free peer-to-peer education from the Money Hunter community.",
        url: "https://moneyhunter.xyz/education",
    },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
