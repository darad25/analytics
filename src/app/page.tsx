import Link from "next/link";
import DashboardShell from "@/components/layout/DashboardShell";
import RevenueChart from "@/components/charts/RevenueChart";
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import styles from "./page.module.css";

const stats = [
  { label: "Total Revenue", value: "$425,500", change: "+12.5%", trendingUp: true, icon: DollarSign, href: "/transactions" },
  { label: "Active Users", value: "24,500", change: "+18.2%", trendingUp: true, icon: Users, href: "/customers" },
  { label: "Total Orders", value: "1,200", change: "-2.4%", trendingUp: false, icon: ShoppingBag, href: "/transactions" },
  { label: "Conversion Rate", value: "3.2%", change: "+4.1%", trendingUp: true, icon: TrendingUp, href: "/analytics" },
];

export default function Home() {
  return (
    <DashboardShell>
      <div className={styles.dashboardHeader}>
        <div>
          <h1 className="gradient-text">Dashboard Overview</h1>
          <p className={styles.subtitle}>Welcome back, Alex! Here&apos;s what&apos;s happening today.</p>
        </div>
        <button className={styles.exportBtn}>Export Report</button>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Link key={idx} href={stat.href} className="card" style={{ display: 'block' }}>
              <div className={styles.cardHeader}>
                <div className={styles.statIcon}>
                  <Icon size={20} />
                </div>
                <span className={`${styles.change} ${stat.trendingUp ? styles.positive : styles.negative}`}>
                  {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.change}
                </span>
              </div>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>{stat.label}</p>
                <h3 className={styles.statValue}>{stat.value}</h3>
              </div>
              <div className={styles.miniChart}>
                <div className={styles.sparkline} />
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.contentGrid}>
        <div className={`${styles.mainChart} card`}>
          <div className={styles.chartHeader}>
            <h3>Monthly Revenue</h3>
            <div className={styles.chartActions}>
              <button className={styles.activeChartBtn}>12 Months</button>
              <button className={styles.chartBtn}>6 Months</button>
              <button className={styles.chartBtn}>30 Days</button>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <RevenueChart />
          </div>
        </div>

        <div className={`${styles.sideList} card`}>
          <h3>Recent Transactions</h3>
          <div className={styles.transactionList}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.transactionItem}>
                <div className={styles.tIcon}>
                  <ShoppingBag size={18} />
                </div>
                <div className={styles.tInfo}>
                  <p className={styles.tTitle}>New Purchase</p>
                  <p className={styles.tDate}>{i * 2} mins ago</p>
                </div>
                <span className={styles.tAmount}>+${(Math.random() * 500).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <button className={styles.viewMoreBtn}>View All Transactions</button>
        </div>
      </div>
    </DashboardShell>
  );
}
