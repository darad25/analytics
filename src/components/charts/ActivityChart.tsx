"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";

const data = [
    { day: "Mon", users: 4000 },
    { day: "Tue", users: 3000 },
    { day: "Wed", users: 2000 },
    { day: "Thu", users: 2780 },
    { day: "Fri", users: 1890 },
    { day: "Sat", users: 2390 },
    { day: "Sun", users: 3490 },
];

const COLORS = ["#8b5cf6", "#06b6d4", "#f43f5e", "#8b5cf6", "#06b6d4", "#f43f5e", "#8b5cf6"];

export default function ActivityChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                />
                <YAxis hide />
                <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} contentStyle={{ backgroundColor: "#111", border: "1px solid #222", borderRadius: "8px", color: "#fff" }} />
                <Bar dataKey="users" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.8} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
