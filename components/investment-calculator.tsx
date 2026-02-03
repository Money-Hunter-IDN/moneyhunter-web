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

export function InvestmentCalculator() {
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
                data.push({
                    year: year,
                    invested: totalInvested,
                    balance: currentBalance,
                    interest: 0,
                });
                continue;
            }

            // Simple compound calculation monthly for better accuracy projection
            for (let month = 1; month <= 12; month++) {
                currentBalance += formData.monthlyContribution;
                currentBalance *= 1 + formData.interestRate / 100 / 12;
                totalInvested += formData.monthlyContribution;
            }

            data.push({
                year: year,
                invested: Math.round(totalInvested),
                balance: Math.round(currentBalance),
                interest: Math.round(currentBalance - totalInvested),
            });
        }
        return data;
    }, [formData]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(value);
    };

    // New helper for input display
    const formatNumberInput = (value: number) => {
        return new Intl.NumberFormat("id-ID").format(value);
    };

    const handleNumberChange = (field: string, value: string) => {
        // Remove non-numeric chars
        const numericValue = Number(value.replace(/[^0-9]/g, ""));
        setFormData(prev => ({ ...prev, [field]: numericValue }));
    };

    const calculateTotal = () => {
        const lastItem = calculationData[calculationData.length - 1];
        return {
            total: lastItem.balance,
            invested: lastItem.invested,
            interest: lastItem.interest,
        };
    };

    const totals = calculateTotal();

    return (
        <div className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-[#FF5900]/10 dark:border-[#FF5900]/20">
            <style jsx>{`
                /* Hide number input spinners */
                input[type=number]::-webkit-inner-spin-button, 
                input[type=number]::-webkit-outer-spin-button { 
                    -webkit-appearance: none; 
                    margin: 0; 
                }
                input[type=number] {
                    -moz-appearance: textfield;
                }
            `}</style>

            <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-[#FF5900]/10 rounded-xl">
                        <Calculator className="w-6 h-6 text-[#FF5900]" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Investment Calculator
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Simulate your wealth growth over time
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Inputs Section */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Initial Investment
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    Rp
                                </span>
                                <input
                                    type="text"
                                    value={formatNumberInput(formData.initialAmount)}
                                    onChange={(e) => handleNumberChange("initialAmount", e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Monthly Contribution
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    Rp
                                </span>
                                <input
                                    type="text"
                                    value={formatNumberInput(formData.monthlyContribution)}
                                    onChange={(e) => handleNumberChange("monthlyContribution", e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Interest Rate (%)
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        value={formData.interestRate}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                interestRate: Number(e.target.value),
                                            })
                                        }
                                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-all text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <TrendingUp className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Period (Years)
                                </label>
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    value={formData.years}
                                    max={50}
                                    onChange={(e) =>
                                        setFormData({ ...formData, years: Number(e.target.value) })
                                    }
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5900] focus:border-transparent outline-none transition-all text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                        </div>

                        <div className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-[#FF5900]/10 dark:border-[#FF5900]/20">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Total Investment
                                </span>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    {formatCurrency(totals.invested)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Total Interest
                                </span>
                                <span className="font-semibold text-[#FF5900]">
                                    +{formatCurrency(totals.interest)}
                                </span>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 my-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-base font-medium text-gray-900 dark:text-white">
                                    Future Value
                                </span>
                                <span className="text-lg font-bold text-[#FF5900]">
                                    {formatCurrency(totals.total)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="lg:col-span-2 min-h-[300px] flex flex-col justify-center">
                        <div className="h-[300px] sm:h-[400px] w-full">
                            {mounted && (
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={calculationData}
                                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                                    >
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
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            vertical={false}
                                            stroke="#e5e7eb"
                                            className="dark:opacity-10"
                                        />
                                        <XAxis
                                            dataKey="year"
                                            stroke="#9ca3af"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                        />
                                        <YAxis
                                            stroke="#9ca3af"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) =>
                                                new Intl.NumberFormat("id-ID", {
                                                    notation: "compact",
                                                    compactDisplay: "short",
                                                    maximumFractionDigits: 1,
                                                }).format(value)
                                            }
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                                borderRadius: "0.75rem",
                                                border: "none",
                                                boxShadow:
                                                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                                color: "#1f2937",
                                            }}
                                            itemStyle={{ color: "#374151" }} // Default text color
                                            labelStyle={{ color: "#6b7280", marginBottom: "0.25rem" }}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            formatter={(value: any, name: any) => [
                                                formatCurrency(value || 0),
                                                name === "Total Balance" ? "Total Balance" : "Invested Capital"
                                            ]}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="balance"
                                            name="Total Balance"
                                            stroke="#FF5900"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorBalance)"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="invested"
                                            name="Invested Capital"
                                            stroke="#94a3b8"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#colorInvested)"
                                        />
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
