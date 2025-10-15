import styles from "./bookingBottomSheetSkeleton.module.css";

export function BookingBottomSheetSkeleton() {
    return (
        <div className={styles.skeleton}>
            <div className={styles.priceBlock}></div>
            <div className={styles.buttonBlock}></div>
        </div>
    );
}