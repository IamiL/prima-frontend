'use client';

import { useState } from 'react';
import styles from './flatDetailContent.module.css';

export function DescriptionBlock({ description }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Определяем максимальную длину описания для сокращенной версии
    const MAX_LENGTH = 200;
    const shouldShowButton = description.length > MAX_LENGTH;

    // Получаем текст для отображения
    const displayText = isExpanded || !shouldShowButton
        ? description
        : description.slice(0, MAX_LENGTH) + '...';

    return (
        <div id={styles.descriptionContainer}>
            <h2>Описание</h2>
            <p>{displayText}</p>
            {shouldShowButton && (
                <button onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? 'Показать меньше' : 'Показать больше'}
                </button>
            )}
        </div>
    );
}
