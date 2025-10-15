"use client";

import { useState, useEffect } from "react";
import styles from "./bookingBottomSheet.module.css";

export function BookingBottomSheet({ priceData, apartmentId, startDate, endDate, humans }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger slide-up animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleBookClick = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
    };

    return (
        <>
            {/* Backdrop for expanded state */}
            {isExpanded && (
                <div
                    className={styles.backdrop}
                    onClick={handleClose}
                />
            )}

            {/* Bottom Sheet */}
            <div
                className={`${styles.bottomSheet} ${isVisible ? styles.visible : ''} ${isExpanded ? styles.expanded : ''}`}
            >
                {/* Collapsed state - quick booking */}
                {!isExpanded && (
                    <div className={styles.collapsedContent}>
                        <div className={styles.priceInfo}>
                            <div className={styles.priceBlock}>
                                <span className={styles.priceLabel}>Итого</span>
                                <span className={styles.priceValue}>
                                    {priceData.amount_for_dates_period?.toLocaleString('ru-RU')} ₽
                                </span>
                            </div>
                            <div className={styles.prepaymentBlock}>
                                <span className={styles.prepaymentLabel}>Предоплата</span>
                                <span className={styles.prepaymentValue}>
                                    {priceData.amount_for_pay?.toLocaleString('ru-RU')} ₽
                                </span>
                            </div>
                        </div>
                        <button
                            className={styles.bookButton}
                            onClick={handleBookClick}
                        >
                            Забронировать эту квартиру
                        </button>
                    </div>
                )}

                {/* Expanded state - full booking form */}
                {isExpanded && (
                    <div className={styles.expandedContent}>
                        <div className={styles.header}>
                            <button
                                className={styles.closeButton}
                                onClick={handleClose}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                                </svg>
                            </button>
                            <h2>Бронирование</h2>
                        </div>

                        <div className={styles.formContent}>
                            <div className={styles.bookingDetails}>
                                <h3>Детали бронирования</h3>
                                <div className={styles.detailRow}>
                                    <span>Даты:</span>
                                    <span>{startDate} - {endDate}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <span>Гостей:</span>
                                    <span>{humans}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <span>Количество дней:</span>
                                    <span>{priceData.days}</span>
                                </div>
                            </div>

                            <div className={styles.priceBreakdown}>
                                <h3>Стоимость</h3>
                                <div className={styles.priceRow}>
                                    <span>Общая стоимость:</span>
                                    <span className={styles.bold}>
                                        {priceData.amount_for_dates_period?.toLocaleString('ru-RU')} ₽
                                    </span>
                                </div>
                                <div className={styles.priceRow}>
                                    <span>Предоплата:</span>
                                    <span className={styles.bold}>
                                        {priceData.amount_for_pay?.toLocaleString('ru-RU')} ₽
                                    </span>
                                </div>
                                <div className={styles.priceRow}>
                                    <span>Комиссия:</span>
                                    <span>{priceData.prepayment_comission?.toLocaleString('ru-RU')} ₽</span>
                                </div>
                            </div>

                            <div className={styles.terms}>
                                <h3>Условия бронирования</h3>
                                <ul>
                                    <li>Время заезда: с 15:00</li>
                                    <li>Время выезда: до 12:00</li>
                                    <li>Заселение по паспорту и договору</li>
                                    <li>Бесконтактное заселение через Telegram-бот</li>
                                </ul>
                            </div>

                            <div className={styles.rules}>
                                <h3>Правила проживания</h3>
                                <ul>
                                    <li>❌ Курение запрещено</li>
                                    <li>❌ Проведение шумных вечеринок запрещено</li>
                                    <li>✅ Можно с детьми</li>
                                    <li>✅ Можно с животными (доп. плата 1500₽)</li>
                                </ul>
                            </div>

                            <div className={styles.agreement}>
                                <label>
                                    <input type="checkbox" required />
                                    Я соглашаюсь с правилами проживания и условиями бронирования
                                </label>
                            </div>

                            <button className={styles.confirmButton}>
                                Подтвердить бронирование
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}