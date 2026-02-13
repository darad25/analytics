"use client";

import DashboardShell from "@/components/layout/DashboardShell";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    User,
    Bell,
    Shield,
    Palette
} from "lucide-react";
import styles from "./page.module.css";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { name: "Profile Information", href: "/settings/profile", icon: User },
        { name: "Notifications", href: "/settings/notifications", icon: Bell },
        { name: "Security & Privacy", href: "/settings/security", icon: Shield },
        { name: "Appearance", href: "/settings/appearance", icon: Palette },
    ];

    return (
        <DashboardShell>
            <div className={styles.header}>
                <h1 className="gradient-text">System Settings</h1>
                <p className={styles.subtitle}>Manage your profile, account security, and notifications.</p>
            </div>

            <div className={styles.container}>
                <aside className={styles.nav}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                            >
                                <Icon size={18} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </aside>

                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </DashboardShell>
    );
}
