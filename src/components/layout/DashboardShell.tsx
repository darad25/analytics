"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from "./Shell.module.css";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className={styles.mainContent}>
                <Header onMenuClick={() => setIsSidebarOpen(true)} />
                <main className={styles.pageContent}>
                    {children}
                </main>
            </div>
            {isSidebarOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
}
