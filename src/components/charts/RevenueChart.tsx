"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 48000 },
    { month: "Apr", revenue: 61000 },
    { month: "May", revenue: 55000 },
    { month: "Jun", revenue: 67000 },
    { month: "Jul", revenue: 72000 },
    { month: "Aug", revenue: 65000 },
    { month: "Sep", revenue: 78000 },
    { month: "Oct", revenue: 85000 },
    { month: "Nov", revenue: 92000 },
    { month: "Dec", revenue: 105000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: "#111",
                border: "1px solid #222",
                padding: "12px",
                borderRadius: "8px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
            }}>
                <p style={{ color: "#a1a1aa", fontSize: "12px", marginBottom: "4px" }}>{label}</p>
                <p style={{ color: "#fff", fontWeight: "bold" }}>
                    ${payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

export default function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                    dy={10}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    animationDuration={2000}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
