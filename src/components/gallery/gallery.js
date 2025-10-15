import styles from './gallery.module.css'

export default function Gallery() {
    return <div id={styles.descriptionSec}>
        <h3 id={styles.heading}>галерея</h3>
        <ul id={styles.gallery}>
            <li className={styles.galleryImgContainer}>
                <img src="aparts/apart1.jpg" alt="apart1" className={styles.galleryImg}/>
            </li>

            <li className={styles.galleryImgContainer}>
                <img src="aparts/apart1.jpg" alt="apart1" className={styles.galleryImg}/>
            </li>
            <li className={styles.galleryImgContainer}>
                <img src="aparts/apart1.jpg" alt="apart1" className={styles.galleryImg}/>
            </li>
            <li className={styles.galleryImgContainer}>
                <img src="aparts/apart1.jpg" alt="apart1" className={styles.galleryImg}/>
            </li>
            <li className={styles.galleryImgContainer}>
                <img src="aparts/apart1.jpg" alt="apart1" className={styles.galleryImg}/>
            </li>
            <li className={styles.galleryImgContainer}>
                <img src="aparts/apart1.jpg" alt="apart1" className={styles.galleryImg}/>
            </li>
        </ul>
    </div>
}