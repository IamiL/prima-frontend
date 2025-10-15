"use client";

import styles from "./submitBlock.module.css";

export function SubmitBlock() {
    return (
        <div id={styles.submitContainer}>
            <div id={styles.submitBlock}>
                <div id={styles.dates}>
                    <div>
                        <label htmlFor="startdate">Дата заезда</label>
                        <div className={styles.dates_input}>
                            <input type="text" id="startdate" value="02 мар. 2025"
                                   onChange={(payload) => console.log("")}/>
                            <svg focusable="false"
                                 aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor"
                                      d="M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM9 6v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3v4H6V6h3Zm17 20H6V12h20v14Z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="enddate">Дата отъезда</label>
                        <div className={styles.dates_input}>
                            <input type="text" id="enddate" value="03 мар. 2025"
                                   onChange={(payload) => console.log("")}/>
                            <svg focusable="false"
                                 aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor"
                                      d="M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM9 6v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3v4H6V6h3Zm17 20H6V12h20v14Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <button id={styles.submitButton}>Забронировать</button>
                <div id={styles.price_info}>
                    <p>Цена за сутки</p><p>2800 РУБ</p>
                </div>
                <hr id={styles.separator}/>
                <div>
                    <div id={styles.cost_info}><p>Стоимость</p><p>5600 РУБ</p></div>
                    <div id={styles.prepayment}><p>Предоплата</p><p>3200 РУБ</p></div>
                </div>
            </div>
            <div>
                <svg focusable="false"
                     aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5Zm13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13Zm-2 0a11 11 0 1 0-11 11 11.012 11.012 0 0 0 11-11Z">
                    </path>
                </svg>
                Частые вопросы
            </div>
        </div>
    )
}