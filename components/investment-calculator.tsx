"use client";

import { useState, useMemo, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Calculator, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const translations = {
    en: {
        title: "Investment Calculator",
        subtitle: "Simulate your wealth growth over time",
        initialInvestment: "Initial Investment",
        monthlyContribution: "Monthly Contribution",
        interestRate: "Interest Rate (%)",
        period: "Period (Years)",
        totalInvestment: "Total Investment",
        totalInterest: "Total Interest",
        futureValue: "Future Value",
        totalBalance: "Total Balance",
        investedCapital: "Invested Capital",
    },
    id: {
        title: "Kalkulator Investasi",
        subtitle: "Simulasikan pertumbuhan kekayaan Anda dari waktu ke waktu",
        initialInvestment: "Investasi Awal",
        monthlyContribution: "Kontribusi Bulanan",
        interestRate: "Tingkat Bunga (%)",
        period: "Jangka Waktu (Tahun)",
        totalInvestment: "Total Investasi",
        totalInterest: "Total Bunga",
        futureValue: "Nilai Masa Depan",
        totalBalance: "Total Saldo",
        investedCapital: "Modal Diinvestasikan",
    },
};

export function InvestmentCalculator() {
    const { language } = useLanguage();
    const t = translations[language];

    const [formData, setFormData] = useState({
        initialAmount: 10000000,
        monthlyContribution: 1000000,
        interestRate: 7,
        years: 10,
    });

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const calculationData = useMemo(() => {
        const data = [];
        let currentBalance = formData.initialAmount;
        let totalInvested = formData.initialAmount;

        for (let year = 0; year <= formData.years; year++) {
            if (year === 0) {
                data.push({ year, invested: totalInvested, balance: currentBalance, interest: 0 });
                continue;
            }
            for (let month = 1; month <= 12; month++) {
                currentBalance += formData.monthlyContribution;
                currentBalance *= 1 + formData.interestRate / 100 / 12;
                totalInvested += formData.monthlyContribution;
            }
            data.push({
                year,
                invested: Math.round(totalInvested),
                balance: Math.round(currentBalance),
                interest: Math.round(currentBalance - totalInvested),
            });
        }
        return data;
    }, [formData]);

    const formatCurrency = (value: number) =>
        new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

    const formatNumberInput = (value: number) =>
        new Intl.NumberFormat("id-ID").format(value);

    const handleNumberChange = (field: string, value: string) => {
        const numericValue = Number(value.replace(/[^0-9]/g, ""));
        setFormData(prev => ({ ...prev, [field]: numericValue }));
    };

    const lastItem = calculationData[calculationData.length - 1];
    const totals = { total: lastItem.balance, invested: lastItem.invested, interest: lastItem.interest };

    return (
        <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-[#FF5900]/10 dark:border-[#FF5900]/20">
            <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-[#FF5900]/10 rounded-xl">
                        <Calculator className="w-6 h-6 text-[#FF5900]" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.subtitle}</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {t.initialInvestment}
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">Rp</span>
                                <input
                                    type="text"
                                    value={formatNumberInput(formData.initialAmount)}
                                    onChange={(e) => handleNumberChange("initialAmount", e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-[border-color,box-shadow] text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {t.monthlyContribution}
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">Rp</span>
                                <input
                                    type="text"
                                    value={formatNumberInput(formData.monthlyContribution)}
                                    onChange={(e) => handleNumberChange("monthlyContribution", e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-[border-color,box-shadow] text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t.interestRate}
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        value={formData.interestRate}
                                        onChange={(e) => setFormData({ ...formData, interestRate: Number(e.target.value) })}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-[border-color,box-shadow] text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <TrendingUp className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t.period}
                                </label>
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    value={formData.years}
                                    max={50}
                                    onChange={(e) => setFormData({ ...formData, years: Number(e.target.value) })}
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-[border-color,box-shadow] text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-[#FF5900]/10 dark:border-[#FF5900]/20">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">{t.totalInvestment}</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{formatCurrency(totals.invested)}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">{t.totalInterest}</span>
                                <span className="font-semibold text-[#FF5900]">+{formatCurrency(totals.interest)}</span>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 my-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-base font-medium text-gray-900 dark:text-white">{t.futureValue}</span>
                                <span className="text-lg font-bold text-[#FF5900]">{formatCurrency(totals.total)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 min-h-[300px] flex flex-col justify-center">
                        <div className="h-[300px] sm:h-[400px] w-full">
                            {mounted && (
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={calculationData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#FF5900" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#FF5900" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:opacity-10" />
                                        <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis
                                            stroke="#9ca3af"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) =>
                                                new Intl.NumberFormat("id-ID", { notation: "compact", compactDisplay: "short", maximumFractionDigits: 1 }).format(value)
                                            }
                                        />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "0.75rem", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
                                            itemStyle={{ color: "#374151" }}
                                            labelStyle={{ color: "#6b7280", marginBottom: "0.25rem" }}
                                            formatter={(value: unknown, name: unknown) => [
                                                formatCurrency(Number(value) || 0),
                                                name === "balance" ? t.totalBalance : t.investedCapital,
                                            ]}
                                        />
                                        <Area type="monotone" dataKey="balance" name="balance" stroke="#FF5900" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                                        <Area type="monotone" dataKey="invested" name="invested" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorInvested)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
