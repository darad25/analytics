import DashboardShell from "@/components/layout/DashboardShell";
import styles from "./page.module.css";
import {
    MoreVertical,
    Search,
    Filter,
    UserPlus
} from "lucide-react";

const customers = [
    { id: 1, name: "Jordan Smith", email: "jordan@example.com", status: "Active", spend: "$1,240", lastActive: "2 hours ago" },
    { id: 2, name: "Sarah Connor", email: "sarah@skynet.com", status: "Inactive", spend: "$4,500", lastActive: "3 days ago" },
    { id: 3, name: "Tony Stark", email: "tony@stark.com", status: "Active", spend: "$92,000", lastActive: "15 mins ago" },
    { id: 4, name: "Bruce Wayne", email: "bruce@wayne.co", status: "Active", spend: "$150,000", lastActive: "1 hour ago" },
    { id: 5, name: "Diana Prince", email: "diana@themyscira.io", status: "Pending", spend: "$0", lastActive: "Just now" },
];

export default function CustomersPage() {
    return (
        <DashboardShell>
            <div className={styles.header}>
                <div>
                    <h1 className="gradient-text">Customer Management</h1>
                    <p className={styles.subtitle}>View and manage your user base and their engagement.</p>
                </div>
                <button className={styles.addBtn}>
                    <UserPlus size={18} />
                    <span>Add Customer</span>
                </button>
            </div>

            <div className={`${styles.tableCard} card`}>
                <div className={styles.tableActions}>
                    <div className={styles.searchBar}>
                        <Search size={18} />
                        <input type="text" placeholder="Search customers..." />
                    </div>
                    <div className={styles.filters}>
                        <button className={styles.filterBtn}>
                            <Filter size={18} />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Total Spend</th>
                                <th className={styles.hideOnMobile}>Last Active</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>
                                        <div className={styles.customerInfo}>
                                            <div className={styles.avatar}>
                                                {customer.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className={styles.name}>{customer.name}</p>
                                                <p className={`${styles.email} ${styles.hideOnSmallMobile}`}>{customer.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.status} ${styles[customer.status.toLowerCase()]}`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td>{customer.spend}</td>
                                    <td className={styles.hideOnMobile}>{customer.lastActive}</td>
                                    <td>
                                        <button className={styles.moreBtn}>
                                            <MoreVertical size={18} />
                                        </button>
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
