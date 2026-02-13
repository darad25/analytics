"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "Week 1", users: 400, active: 240 },
    { name: "Week 2", users: 600, active: 450 },
    { name: "Week 3", users: 900, active: 600 },
    { name: "Week 4", users: 1100, active: 850 },
    { name: "Week 5", users: 1500, active: 1100 },
    { name: "Week 6", users: 2100, active: 1400 },
    { name: "Week 7", users: 2500, active: 1800 },
];

export default function GrowthChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "#111",
                        border: "1px solid #222",
                        borderRadius: "8px",
                        color: "#fff"
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#8b5cf6" }}
                    activeDot={{ r: 6, fill: "#8b5cf6" }}
                />
                <Line
                    type="monotone"
                    dataKey="active"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#06b6d4" }}
                    activeDot={{ r: 6, fill: "#06b6d4" }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
