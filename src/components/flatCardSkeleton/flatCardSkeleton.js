import styles from "./flatCardSkeleton.module.css";

export function FlatCardSkeleton() {
    return (
        <li className={styles.skeleton}>
            <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.price}></div>
                <div className={styles.address}></div>
                <div className={styles.specs}>
                    <div className={styles.spec}></div>
                    <div className={styles.spec}></div>
                    <div className={styles.spec}></div>
                </div>
            </div>
        </li>
    );
}