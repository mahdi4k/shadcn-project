// app/page.tsx
"use client";

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";

// Define types for our data
interface ChartData {
  day: string;
  debit: number;
  credit: number;
}

// Custom Tooltip component with TypeScript
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="p-3 bg-card rounded-lg border min-w-[160px]">
      <p className="font-medium text-popover">{label}</p>
      {payload.map((entry, index) => (
        <p key={`item-${index}`} className="text-sm mt-1" style={{ color: entry.color }}>
          <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
          {entry.name}: <span className="font-medium">${entry.value?.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
};

// Main component
export default function WeeklyTransactionChart() {
  // Sample data for the chart
  const data: ChartData[] = [
    { day: "Sat", debit: 4000, credit: 2400 },
    { day: "Sun", debit: 3000, credit: 1398 },
    { day: "Mon", debit: 2000, credit: 3800 },
    { day: "Tue", debit: 2780, credit: 3908 },
    { day: "Wed", debit: 1890, credit: 4800 },
    { day: "Thu", debit: 2390, credit: 3800 },
    { day: "Fri", debit: 3490, credit: 4300 },
  ];
  const [visibleKeys, setVisibleKeys] = useState<("debit" | "credit")[]>(["debit", "credit"]);

  const toggleKey = (key: "debit" | "credit") => {
    setVisibleKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  // Calculate totals
  const totalDebit = data.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = data.reduce((sum, item) => sum + item.credit, 0);

  return (
    <div className="bg-card rounded-2xl shadow-sm p-4">
      <div className="max-w-6xl mx-auto">
        {/* Chart Section */}
        <div className="bg-card rounded-2x shadow-xs p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-400">
                <span className="text-gray-800 dark:text-gray-200">$7,560</span> Debited &{" "}
                <span className="text-gray-800 dark:text-gray-200">$5,420</span> Credited this Week
              </h2>
            </div>

            {/* Totals */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="flex items-center cursor-pointer" onClick={() => toggleKey("debit")}>
                <div className="w-3 h-3 bg-blue-500 rounded-full me-2"></div>
                <span
                  className={`text-sm font-medium ${
                    visibleKeys.includes("debit") ? "text-gray-700" : "text-gray-400 line-through"
                  }`}
                >
                  Debit
                </span>
              </div>
              <div className="flex items-center cursor-pointer" onClick={() => toggleKey("credit")}>
                <div className="w-3 h-3 bg-green-500 rounded-full me-2"></div>
                <span
                  className={`text-sm font-medium ${
                    visibleKeys.includes("credit") ? "text-gray-700" : "text-gray-400 line-through"
                  }`}
                >
                  Credit
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div style={{ direction: "ltr" }} className="h-64 mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barGap={4}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                {visibleKeys.includes("debit") && (
                  <Bar dataKey="debit" fill="#3b82f6" radius={[8, 8, 8, 8]} barSize={26} name="Debit" />
                )}

                {visibleKeys.includes("credit") && (
                  <Bar dataKey="credit" fill="#e1c918" radius={[8, 8, 8, 8]} barSize={26} name="Credit" />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
