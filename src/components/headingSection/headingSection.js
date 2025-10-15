import styles from './headingSection.module.css'
import {SearchParamsInput} from "@/components/searchParamsInput/searchParamsInput";

export default function HeadingSection() {
    return <div id={styles.headingSec}>
        <h1 id={styles.heading}>
            <div id={styles.one}>
                Найдите свой идеальный дом
            </div>
            <div id={styles.two}>
                в Нижнем Новгороде
            </div>
        </h1>
        <SearchParamsInput />
    </div>
}