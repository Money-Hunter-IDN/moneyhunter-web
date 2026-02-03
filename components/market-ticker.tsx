"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoPrice {
    id: string;
    symbol: string;
    name: string;
    current_price_usd: number;
    price_change_percentage_24h: number;
}

const FALLBACK_DATA: CryptoPrice[] = [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin", current_price_usd: 96000, price_change_percentage_24h: 2.5 },
    { id: "ethereum", symbol: "ETH", name: "Ethereum", current_price_usd: 2700, price_change_percentage_24h: 1.2 },
    { id: "solana", symbol: "SOL", name: "Solana", current_price_usd: 170, price_change_percentage_24h: -0.5 },
    { id: "binancecoin", symbol: "BNB", name: "BNB", current_price_usd: 600, price_change_percentage_24h: 0.8 },
    { id: "ripple", symbol: "XRP", name: "XRP", current_price_usd: 1.5, price_change_percentage_24h: -1.5 },
    { id: "hyperliquid", symbol: "HYPE", name: "Hyperliquid", current_price_usd: 120, price_change_percentage_24h: 5.4 },
    { id: "pudgy-penguins", symbol: "PENGU", name: "Pengu", current_price_usd: 0.04, price_change_percentage_24h: 12.0 },
    { id: "aster-2", symbol: "ATC", name: "Aster", current_price_usd: 0.06, price_change_percentage_24h: 1.1 },
    { id: "zcash", symbol: "ZEC", name: "Zcash", current_price_usd: 45, price_change_percentage_24h: -2.3 },
    { id: "dogecoin", symbol: "DOGE", name: "Dogecoin", current_price_usd: 0.12, price_change_percentage_24h: 4.2 },
];

export function MarketTicker() {
    const [data, setData] = useState<CryptoPrice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,ripple,hyperliquid,pudgy-penguins,aster-2,zcash,dogecoin&vs_currencies=usd&include_24hr_change=true"
                );

                if (!response.ok) throw new Error("Rate limit or error");

                const result = await response.json();
                console.log("CoinGecko API Response:", result); // Debugging

                const parsePrice = (val: number | string | null | undefined) => {
                    const num = Number(val);
                    return isNaN(num) ? 0 : num;
                };

                const formattedData: CryptoPrice[] = [
                    {
                        id: "bitcoin",
                        symbol: "BTC",
                        name: "Bitcoin",
                        current_price_usd: parsePrice(result?.bitcoin?.usd),
                        price_change_percentage_24h: parsePrice(result?.bitcoin?.usd_24h_change)
                    },
                    {
                        id: "ethereum",
                        symbol: "ETH",
                        name: "Ethereum",
                        current_price_usd: parsePrice(result?.ethereum?.usd),
                        price_change_percentage_24h: parsePrice(result?.ethereum?.usd_24h_change)
                    },
                    {
                        id: "solana",
                        symbol: "SOL",
                        name: "Solana",
                        current_price_usd: parsePrice(result?.solana?.usd),
                        price_change_percentage_24h: parsePrice(result?.solana?.usd_24h_change)
                    },
                    {
                        id: "binancecoin",
                        symbol: "BNB",
                        name: "BNB",
                        current_price_usd: parsePrice(result?.binancecoin?.usd),
                        price_change_percentage_24h: parsePrice(result?.binancecoin?.usd_24h_change)
                    },
                    {
                        id: "ripple",
                        symbol: "XRP",
                        name: "XRP",
                        current_price_usd: parsePrice(result?.ripple?.usd),
                        price_change_percentage_24h: parsePrice(result?.ripple?.usd_24h_change)
                    },
                    {
                        id: "hyperliquid",
                        symbol: "HYPE",
                        name: "Hyperliquid",
                        current_price_usd: parsePrice(result?.hyperliquid?.usd),
                        price_change_percentage_24h: parsePrice(result?.hyperliquid?.usd_24h_change)
                    },
                    {
                        id: "pudgy-penguins",
                        symbol: "PENGU",
                        name: "Pengu",
                        current_price_usd: parsePrice(result?.["pudgy-penguins"]?.usd),
                        price_change_percentage_24h: parsePrice(result?.["pudgy-penguins"]?.usd_24h_change)
                    },
                    {
                        id: "aster-2",
                        symbol: "ATC",
                        name: "Aster",
                        current_price_usd: parsePrice(result?.["aster-2"]?.usd),
                        price_change_percentage_24h: parsePrice(result?.["aster-2"]?.usd_24h_change)
                    },
                    {
                        id: "zcash",
                        symbol: "ZEC",
                        name: "Zcash",
                        current_price_usd: parsePrice(result?.zcash?.usd),
                        price_change_percentage_24h: parsePrice(result?.zcash?.usd_24h_change)
                    },
                    {
                        id: "dogecoin",
                        symbol: "DOGE",
                        name: "Dogecoin",
                        current_price_usd: parsePrice(result?.dogecoin?.usd),
                        price_change_percentage_24h: parsePrice(result?.dogecoin?.usd_24h_change)
                    },
                ];

                setData(formattedData);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch market data:", err);
                // Use fallback data seamlessly if API fails (common with free CoinGecko)
                setData(FALLBACK_DATA);
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
        // Refresh every 60 seconds
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return null; // Or skeleton

    return (
        <div className="w-full bg-white dark:bg-gray-900 border-y border-[#FF5900]/10 dark:border-[#FF5900]/20 py-3 overflow-hidden relative group cursor-pointer">
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-[2]"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-[2]"></div>

            {/* Helper text for user if error/fallback is active */}
            {error && (
                <div className="absolute top-0 right-0 z-10 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-[10px] text-red-500 rounded-bl-lg">
                    Live data limited
                </div>
            )}

            <div className="flex overflow-hidden group">
                {/* Track 1 */}
                <div className="flex animate-marquee gap-12 pr-12 whitespace-nowrap shrink-0 items-center">
                    {[...data, ...data, ...data, ...data].map((coin, index) => (
                        <div key={`${coin.id}-${index}-1`} className="flex items-center gap-2 group-hover/item:opacity-75 transition-opacity">
                            <span className="font-bold text-sm text-gray-700 dark:text-gray-200">{coin.symbol}</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(coin.current_price_usd || 0)}
                            </span>
                            <div className={`flex items-center text-xs font-semibold ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                                {coin.price_change_percentage_24h >= 0 ? (
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                ) : (
                                    <TrendingDown className="w-3 h-3 mr-1" />
                                )}
                                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                            </div>
                        </div>
                    ))}
                </div>

                {/* Track 2 (Duplicate) */}
                <div className="flex animate-marquee gap-12 pr-12 whitespace-nowrap shrink-0 items-center">
                    {[...data, ...data, ...data, ...data].map((coin, index) => (
                        <div key={`${coin.id}-${index}-2`} className="flex items-center gap-2 group-hover/item:opacity-75 transition-opacity">
                            <span className="font-bold text-sm text-gray-700 dark:text-gray-200">{coin.symbol}</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(coin.current_price_usd || 0)}
                            </span>
                            <div className={`flex items-center text-xs font-semibold ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                                {coin.price_change_percentage_24h >= 0 ? (
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                ) : (
                                    <TrendingDown className="w-3 h-3 mr-1" />
                                )}
                                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
