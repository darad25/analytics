import { Lock } from "lucide-react";
import styles from "../page.module.css";

export default function SecuritySettings() {
    return (
        <div className={styles.main}>
            <div className="card">
                <h3 className={styles.cardTitle}>Account Password</h3>
                <p className={styles.cardDesc}>Update your password to keep your account secure.</p>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Current Password</label>
                    <div className={styles.inputWithIcon}>
                        <Lock size={16} />
                        <input type="password" className={styles.input} placeholder="••••••••" />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>New Password</label>
                    <div className={styles.inputWithIcon}>
                        <Lock size={16} />
                        <input type="password" className={styles.input} placeholder="New password" />
                    </div>
                </div>

                <div className={styles.actions}>
                    <button className={styles.saveBtn}>Update Password</button>
                </div>
            </div>

            <div className={`${styles.deleteZone} card`}>
                <h3 className={styles.deleteZoneTitle}>Danger Zone</h3>
                <p>Once you delete your account, there is no going back. Please be certain.</p>
                <button className={styles.deleteBtn}>Delete Account</button>
            </div>
        </div>
    );
}
