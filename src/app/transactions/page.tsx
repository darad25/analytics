import DashboardShell from "@/components/layout/DashboardShell";
import styles from "./page.module.css";
import {
    ArrowDownCircle,
    ArrowUpCircle,
    Search,
    Download,
    Calendar
} from "lucide-react";

const transactions = [
    { id: "TX-9021", date: "Feb 13, 2026", type: "Incoming", amount: "+$249.00", source: "Stripe", status: "Completed" },
    { id: "TX-9022", date: "Feb 12, 2026", type: "Refund", amount: "-$89.00", source: "PayPal", status: "Processing" },
    { id: "TX-9023", date: "Feb 12, 2026", type: "Incoming", amount: "+$599.00", source: "Stripe", status: "Completed" },
    { id: "TX-9024", date: "Feb 11, 2026", type: "Subscription", amount: "+$49.00", source: "Direct", status: "Completed" },
    { id: "TX-9025", date: "Feb 11, 2026", type: "Outgoing", amount: "-$12.50", source: "Bank Transfer", status: "Failed" },
];

export default function TransactionsPage() {
    return (
        <DashboardShell>
            <div className={styles.header}>
                <div>
                    <h1 className="gradient-text">Financial Ledger</h1>
                    <p className={styles.subtitle}>Track every transaction and payment event in real-time.</p>
                </div>
                <div className={styles.headerActions}>
                    <button className={styles.secondaryBtn}>
                        <Calendar size={18} />
                        <span>Last 30 Days</span>
                    </button>
                    <button className={styles.primaryBtn}>
                        <Download size={18} />
                        <span>Export CSV</span>
                    </button>
                </div>
            </div>

            <div className={styles.statsRow}>
                <div className="card">
                    <p className={styles.cardLabel}>Net Earnings</p>
                    <h2 className={styles.cardValue}>$52,480.00</h2>
                </div>
                <div className="card">
                    <p className={styles.cardLabel}>Pending Payouts</p>
                    <h2 className={styles.cardValue}>$1,240.20</h2>
                </div>
                <div className="card">
                    <p className={styles.cardLabel}>Processing Fees</p>
                    <h2 className={styles.cardValue}>$420.15</h2>
                </div>
            </div>

            <div className={`${styles.ledgerCard} card`}>
                <div className={styles.searchBar}>
                    <Search size={18} />
                    <input type="text" placeholder="Search transactions by ID or source..." />
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.hideOnMobile}>Transaction ID</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th className={styles.hideOnSmallMobile}>Source</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx) => (
                                <tr key={tx.id}>
                                    <td className={`${styles.txId} ${styles.hideOnMobile}`}>{tx.id}</td>
                                    <td>{tx.date}</td>
                                    <td>
                                        <div className={styles.type}>
                                            {tx.type === "Incoming" || tx.type === "Subscription" ? (
                                                <ArrowUpCircle size={16} className={styles.incoming} />
                                            ) : (
                                                <ArrowDownCircle size={16} className={styles.outgoing} />
                                            )}
                                            <span>{tx.type}</span>
                                        </div>
                                    </td>
                                    <td className={styles.hideOnSmallMobile}>{tx.source}</td>
                                    <td className={tx.amount.startsWith("+") ? styles.incomingText : styles.outgoingText}>
                                        {tx.amount}
                                    </td>
                                    <td>
                                        <span className={`${styles.status} ${styles[tx.status.toLowerCase()]}`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardShell>
    );
}
