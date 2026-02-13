import DashboardShell from "@/components/layout/DashboardShell";
import GrowthChart from "@/components/charts/GrowthChart";
import RevenueChart from "@/components/charts/RevenueChart";
import styles from "./page.module.css";
import {
    BarChart3,
    TrendingUp,
    Target,
    Zap
} from "lucide-react";

export default function AnalyticsPage() {
    return (
        <DashboardShell>
            <div className={styles.header}>
                <h1 className="gradient-text">Detailed Analytics</h1>
                <p className={styles.subtitle}>Deep dive into your performance metrics and growth.</p>
            </div>

            <div className={styles.metricsGrid}>
                <div className="card">
                    <div className={styles.metricHeader}>
                        <p>Engagement Rate</p>
                        <BarChart3 size={20} className={styles.icon} />
                    </div>
                    <h3>64.8%</h3>
                    <span className={styles.trend}>+5.2% from last month</span>
                </div>
                <div className="card">
                    <div className={styles.metricHeader}>
                        <p>Average Session</p>
                        <Zap size={20} className={styles.icon} />
                    </div>
                    <h3>4m 32s</h3>
                    <span className={styles.trend}>+12s from last month</span>
                </div>
                <div className="card">
                    <div className={styles.metricHeader}>
                        <p>Retention Rate</p>
                        <Target size={20} className={styles.icon} />
                    </div>
                    <h3>82.1%</h3>
                    <span className={styles.trend}>+2.4% from last month</span>
                </div>
            </div>

            <div className={styles.chartsGrid}>
                <div className="card">
                    <h3>User Growth</h3>
                    <div className={styles.chartWrapper}>
                        <GrowthChart />
                    </div>
                </div>
                <div className="card">
                    <h3>Revenue Stream</h3>
                    <div className={styles.chartWrapper}>
                        <RevenueChart />
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}
