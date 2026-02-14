import { Mail } from "lucide-react";
import styles from "../page.module.css";

export default function ProfileSettings() {
    return (
        <div className="card">
            <h3 className={styles.cardTitle}>Public Profile</h3>
            <p className={styles.cardDesc}>This information will be displayed publicly.</p>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name</label>
                <input type="text" className={styles.input} defaultValue="Alex Rivers" />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <div className={styles.inputWithIcon}>
                    <Mail size={16} />
                    <input type="email" className={styles.input} defaultValue="alex.rivers@example.com" />
                </div>
            </div>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Job Title</label>
                    <input type="text" className={styles.input} defaultValue="Senior Analytics Manager" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Department</label>
                    <input type="text" className={styles.input} defaultValue="Strategy & Growth" />
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.saveBtn}>Save Changes</button>
                <button className={styles.cancelBtn}>Cancel</button>
            </div>
        </div>
    );
}
