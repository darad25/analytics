"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    BarChart3,
    Users,
    Settings,
    CreditCard,
    Activity,
    Zap,
    X
} from "lucide-react";
import styles from "./Sidebar.module.css";

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/" },
    { icon: BarChart3, label: "Analytics", href: "/analytics" },
    { icon: Users, label: "Customers", href: "/customers" },
    { icon: CreditCard, label: "Transactions", href: "/transactions" },
    { icon: Activity, label: "Realtime", href: "/realtime" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <div className={styles.logo}>
                <div className={styles.logoInfo}>
                    <div className={styles.logoIcon}>
                        <Zap size={24} fill="currentColor" />
                    </div>
                    <span className="gradient-text">Aura</span>
                </div>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>
            </div>

            <nav className={styles.nav}>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                            {isActive && <div className={styles.activeIndicator} />}
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.footer}>
                <div className={styles.proCard}>
                    <p>Upgrade to Pro</p>
                    <button className={styles.proButton}>Get Access</button>
                </div>
            </div>
        </aside>
    );
}
