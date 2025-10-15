import styles from "./flatDetailSkeleton.module.css";

export function FlatDetailSkeleton() {
    return (
        <div className={styles.skeleton}>
            <div className={styles.imagesContainer}>
                <div className={styles.mainImage}></div>
                <div className={styles.secondaryImages}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={styles.secondaryImage}></div>
                    ))}
                </div>
            </div>

            <div className={styles.locationContainer}></div>

            <div className={styles.priceContainer}>
                <div className={styles.priceLine}></div>
            </div>

            <div className={styles.descriptionItems}>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className={styles.descriptionItem}></div>
                ))}
            </div>

            <div className={styles.descriptionBlock}>
                <div className={styles.title}></div>
                <div className={styles.textLine}></div>
                <div className={styles.textLine}></div>
                <div className={styles.textLine}></div>
            </div>

            <div className={styles.servicesBlock}>
                <div className={styles.title}></div>
                <div className={styles.servicesList}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={styles.serviceItem}></div>
                    ))}
                </div>
            </div>

            <div className={styles.rulesBlock}>
                <div className={styles.title}></div>
                <div className={styles.textLine}></div>
                <div className={styles.textLine}></div>
            </div>
        </div>
    );
}