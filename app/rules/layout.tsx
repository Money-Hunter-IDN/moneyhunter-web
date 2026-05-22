import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Community Guidelines & Security",
    description: "Money Hunter community guidelines and Web3 security tips. Learn how to protect your crypto assets, avoid scams, and participate respectfully in our global finance community.",
    alternates: {
        canonical: "https://moneyhunter.xyz/rules",
    },
    openGraph: {
        title: "Community Guidelines & Security | Money Hunter",
        description: "Stay safe in Web3. Learn how to protect your seed phrases, spot scams, and be a great community member in Money Hunter.",
        url: "https://moneyhunter.xyz/rules",
    },
};

export default function RulesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
