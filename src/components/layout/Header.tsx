"use client";

import { Search, Bell, User, Menu } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
    onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <button className={styles.menuBtn} onClick={onMenuClick}>
                    <Menu size={24} />
                </button>
                <div className={styles.searchContainer}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search analytics..."
                        className={styles.searchInput}
                    />
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.actionBtn}>
                    <Bell size={20} />
                    <span className={styles.badge} />
                </button>

                <div className={styles.divider} />

                <div className={styles.userProfile}>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Alex Rivers</span>
                        <span className={styles.userRole}>Pro Plan</span>
                    </div>
                    <div className={styles.avatar}>
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
}
