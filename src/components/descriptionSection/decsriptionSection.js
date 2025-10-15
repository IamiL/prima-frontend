import styles from './descriptionSection.module.css'

export default function DescriptionSection() {
    return <div id={styles.descriptionSec}>
        <h3 id={styles.heading}>
            уют
        </h3>
        <div id={styles.descriptionBlock}>
            <div id={styles.descriptionParagraphs} className={styles.descriptionChildBlock}>
                <p>
                    - это приоритет нашей команды. Мы предоставляем обширный выбор квартир в большинстве районов города. В нашем ассортименте - от уютных студий до просторных квартир для большой семьи или дружной компании.
                </p>
                <p>
                    Мы создаём такое пространство для наших гостей, чтобы их не заботили бытовые вопросы, а внимание было нацелено исключительно на положительные эмоции от города. Кстати, если вы путешествуете с маленькими детьми - мы предоставим стульчик для кормления и кроватку.
                </p>
            </div>
            <div className={styles.descriptionChildBlock}>
                <p>
                    Для деловых гостей, тех, кто приехал к нам в командировку, помимо комфорта мы предоставляем полный пакет документов для отчетности <br/>(чек, договор и акт).
                </p>
            </div>
        </div>
    </div>
}