"use client";

import { useTheme } from "../../ThemeProvider";
import styles from "../page.module.css";

export default function AppearanceSettings() {
    const { theme, setTheme } = useTheme();

    const themes = [
        { id: "cyber-dark", name: "Cyber Dark", bg: "#050505", color: "#8b5cf6" },
        { id: "night-owl", name: "Night Owl", bg: "#011627", color: "#82aaff" },
        { id: "light", name: "Light Theme", bg: "#f8fafc", color: "#6366f1" },
    ];

    return (
        <div className="card">
            <h3 className={styles.cardTitle}>Interface Customization</h3>
            <p className={styles.cardDesc}>Customize the look and feel of your dashboard.</p>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Color Theme</label>
                <div className={styles.themeGrid}>
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTheme(t.id as "cyber-dark" | "night-owl" | "light")}
                            style={{
                                background: t.bg,
                                border: theme === t.id ? `2px solid ${t.color}` : '1px solid var(--border)',
                                padding: '20px',
                                borderRadius: '12px',
                                color: t.id === 'light' ? '#111' : 'white',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: theme === t.id ? `0 0 15px ${t.color}44` : 'none'
                            }}
                        >
                            {t.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.formGroup} style={{ marginTop: '24px' }}>
                <label className={styles.formLabel}>Primary Accent</label>
                <div className={styles.accentGrid}>
                    {['#8b5cf6', '#06b6d4', '#f43f5e', '#10b981'].map((color) => (
                        <div key={color} style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: color,
                            cursor: 'pointer',
                            border: '2px solid white',
                            boxShadow: '0 0 5px rgba(0,0,0,0.1)'
                        }} />
                    ))}
                </div>
            </div>

            <div className={styles.actions} style={{ marginTop: '32px' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Changes are saved automatically.</p>
            </div>
        </div>
    );
}
