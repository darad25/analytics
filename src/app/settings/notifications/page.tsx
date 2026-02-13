import styles from "../page.module.css";

export default function NotificationsSettings() {
    return (
        <div className="card">
            <h3 className={styles.cardTitle}>Notification Preferences</h3>
            <p className={styles.cardDesc}>Control how and when you receive alerts.</p>

            <div className={styles.formGroup}>
                <div className={styles.formGroup}>
                    <div className={styles.settingRow}>
                        <div>
                            <p style={{ fontWeight: 600 }}>Email Notifications</p>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Receive weekly digest and activity reports.</p>
                        </div>
                        <input type="checkbox" defaultChecked />
                    </div>

                    <div className={styles.settingRow}>
                        <div>
                            <p style={{ fontWeight: 600 }}>Security Alerts</p>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Get notified about new login attempts.</p>
                        </div>
                        <input type="checkbox" defaultChecked />
                    </div>

                    <div className={styles.settingRow} style={{ marginBottom: 0 }}>
                        <div>
                            <p style={{ fontWeight: 600 }}>Marketing Emails</p>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Special offers and product updates.</p>
                        </div>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.saveBtn}>Save Preferences</button>
            </div>
        </div>
    );
}
