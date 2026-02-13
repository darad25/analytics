"use client";

import DashboardShell from "@/components/layout/DashboardShell";
import styles from "./page.module.css";
import {
    Activity,
    MapPin,
    Globe,
    Eye,
    Zap
} from "lucide-react";
import { useEffect, useState } from "react";

const locations = [
    { city: "San Francisco", count: 124, coords: { x: 20, y: 40 } },
    { city: "London", count: 85, coords: { x: 45, y: 30 } },
    { city: "Tokyo", count: 210, coords: { x: 80, y: 35 } },
    { city: "New York", count: 156, coords: { x: 25, y: 35 } },
];

export default function RealtimePage() {
    const [pulse, setPulse] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPulse(p => (p + 1) % 100);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <DashboardShell>
            <div className={styles.header}>
                <h1 className="gradient-text">Realtime Monitoring</h1>
                <p className={styles.subtitle}>Live view of active users and system health.</p>
            </div>

            <div className={styles.grid}>
                <div className={`${styles.mainPanel} card`}>
                    <div className={styles.mapContainer}>
                        <div className={styles.mapTitle}>
                            <Globe size={20} />
                            <h3>Global Traffic Pulse</h3>
                        </div>
                        <div className={styles.map}>
                            {locations.map((loc, i) => (
                                <div
                                    key={i}
                                    className={styles.marker}
                                    style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                                >
                                    <div className={styles.ring} />
                                    <div className={styles.dot} />
                                    <div className={styles.tooltip}>{loc.city}: {loc.count}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.statsPanel}>
                    <div className="card">
                        <div className={styles.statHeader}>
                            <Eye size={20} className={styles.icon} />
                            <span>Current Visitors</span>
                        </div>
                        <h2 className={styles.statValue}>1,429</h2>
                        <div className={styles.pulseBar}>
                            <div className={styles.barFill} style={{ width: `${pulse}%` }} />
                        </div>
                    </div>

                    <div className="card">
                        <div className={styles.statHeader}>
                            <Zap size={20} className={styles.icon} />
                            <span>System Status</span>
                        </div>
                        <h2 className={styles.statValue}>Operational</h2>
                        <p className={styles.statSub}>99.99% Uptime</p>
                    </div>

                    <div className={`${styles.logCard} card`}>
                        <h3>Live Activity Feed</h3>
                        <div className={styles.logs}>
                            {[
                                "New user joined from NYC",
                                "Purchase: $49.00 by Alex",
                                "API Request: /v1/auth - 200 OK",
                                "New signal from Tokyo",
                                "System Check: All green",
                            ].map((log, i) => (
                                <div key={i} className={styles.logItem}>
                                    <div className={styles.logDot} />
                                    <span>{log}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}
