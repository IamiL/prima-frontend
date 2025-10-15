import React, {useEffect, useState} from "react";
import {Temporal} from "@js-temporal/polyfill";
import styles from "./sPlnp.module.css";
import Calendars from "./calendars/calendars";

const MinthsNms = ["", "янв.", "февр.", "мар.", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек."]

function getMonths() {
    const now = Temporal.Now.plainDateISO();
    const stopTime = Temporal.PlainTime.from('00:00');
    const nowTimeComparison = Temporal.Now.plainTimeISO().since(stopTime);
    const isAfterCutoff = Temporal.Duration.compare(nowTimeComparison, Temporal.Duration.from({hours: 0})) > 0;

    const currentMonth = now.month;
    const currentYear = now.year;

    const monthArray = new Array(18)

    let startOfFirstMonth = Temporal.PlainDate.from({year: currentYear, month: currentMonth, day: 1});
    let monthFirstLength = startOfFirstMonth.daysInMonth;
    let dayOfWeekFirstMonthStartedOn = startOfFirstMonth.dayOfWeek - 1;

    monthArray[0] = {
        month: new Array(42).fill(null).map((_, index) => {
            let date = startOfFirstMonth.add({days: index - dayOfWeekFirstMonthStartedOn})

            if (index < dayOfWeekFirstMonthStartedOn || index >= dayOfWeekFirstMonthStartedOn + monthFirstLength) {
                return null;
            }

            let dsb

            if (date.equals(now) && isAfterCutoff) {
                dsb = false;
            } else {
                dsb = !(Temporal.PlainDate.compare(date, now) >= 0);
            }

            return {date: date, dsb: dsb};
        }), name: startOfFirstMonth.toLocaleString("ru", {month: "long", year: "numeric"})
    };

    for (let i = 1; i < 18; i++) {
        let startOfMonth = Temporal.PlainDate.from({year: currentYear, month: currentMonth, day: 1}).add({months: i});
        let monthLength = startOfMonth.daysInMonth;
        let dayOfWeekMonthStartedOn = startOfMonth.dayOfWeek - 1;

        monthArray[i] = {
            month: new Array(42).fill(null).map((_, index) => {
                if (index < dayOfWeekMonthStartedOn || index >= dayOfWeekMonthStartedOn + monthLength) {
                    return null;
                }
                return {date: startOfMonth.add({days: index - dayOfWeekMonthStartedOn}), dsb: false};
            }), name: startOfMonth.toLocaleString("ru", {month: "long", year: "numeric"})
        };

    }

    return monthArray
}

export function SPInp({startDate, setStartDate, endDate, setEndDate}) {
    const [tempMonthIterator, setTempMonthIterator] = useState(0);
    const [state, setState] = useState(0)

    const [calenChecked, setCalenChecked] = useState(0)

    console.log("раз")
    const [months, setMonths] = useState(getMonths())
    console.log("два")
    // if (startDate != null) {
    //     console.log("startDate.dateVal: ", startDate.dateVal.day)
    // }

    const handleClickOutside = (event) => {
        if (!event.target.closest(`.${styles.calendarWrapper}`)) {
            setCalenChecked(0);
        }
    };

    useEffect(() => {
        if (calenChecked !== 0) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('click', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClickOutside);
        };
    }, [calenChecked]);

    console.log("ssssssTartDate: ", startDate)

    return (
        <>
            <div id={styles.a123}>
                <div id={styles.a234}>
                    <div
                        className={`${styles.input_date_container} ${calenChecked === 1 ? styles.input_date_container_checked : ''}`}
                        onClick={() => setCalenChecked(1)}
                    >
                        <input
                            className={styles.input_date}
                            type="text"
                            placeholder="Дата заезда"
                            readOnly
                            value={startDate !== null ? `${startDate.dateVal.day} ${MinthsNms[startDate.dateVal.month]} ${startDate.dateVal.year}` : ''}
                        />
                    </div>

                    <div
                        className={`${styles.input_date_container} ${calenChecked === 2 ? styles.input_date_container_checked : ''}`}
                        onClick={() => setCalenChecked(2)}
                    >
                        <input
                            className={styles.input_date}
                            type="text"
                            placeholder="Дата отъезда"
                            readOnly
                            value={endDate !== null ? `${endDate.dateVal.day} ${MinthsNms[endDate.dateVal.month]} ${endDate.dateVal.year}` : ''}
                        />
                    </div>
                </div>
                <div id={styles.calendarWrapperBackground}
                     style={calenChecked !== 0 ? {display: "grid"} : {display: 'none'}}/>
                <div className={styles.calendarWrapper}
                     style={calenChecked !== 0 ? {display: "grid"} : {display: 'none'}}>
                    <h3>Когда вы заезжаете?</h3>
                    {
                        tempMonthIterator === 0 ? <div/> :
                            <button onClick={() => setTempMonthIterator(tempMonthIterator - 1)}
                                    className={styles.button_change_month}>
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                     focusable="false"
                                     aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.793.249 4.322 11.233a1.066 1.066 0 0 0 0 1.539l12.471 10.979a.987.987 0 0 0 1.414-.107l1.557-1.85a1.028 1.028 0 0 0-.111-1.438L10.2 12.191a.25.25 0 0 1 0-.379l9.45-8.168a1.021 1.021 0 0 0 .349-.7 1 1 0 0 0-.238-.741L18.207.356A.988.988 0 0 0 17.522 0a.978.978 0 0 0-.729.249Z"></path>
                                </svg>
                            </button>
                    }

                    <div className={styles.calendar_months}>
                        <Calendars months={months} tempMonthIterator={tempMonthIterator}
                                   state={state}
                                   setState={setState}
                                   startDate={startDate} setStartDate={setStartDate}
                                   endDate={endDate} setEndDate={setEndDate}
                                   calenChecked={calenChecked}
                                   setCalenChecked={setCalenChecked}/>
                    </div>
                    <button onClick={() => setTempMonthIterator(tempMonthIterator + 1)}
                            className={styles.button_change_month}>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false"
                             aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m7.207 23.751 12.471-10.984a1.066 1.066 0 0 0 0-1.539L7.207.249a.987.987 0 0 0-1.414.107l-1.557 1.85a1.028 1.028 0 0 0 .111 1.438l9.453 8.165a.25.25 0 0 1 0 .379l-9.45 8.168a1.021 1.021 0 0 0-.349.7 1 1 0 0 0 .238.741l1.558 1.851a.989.989 0 0 0 1.414.107Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/*{(startDate !== null && startDate !== null) ? (<Link*/}
            {/*        href={`/search?start=${startDate !== null ? `${startDate.day}.${startDate.month}.${startDate.year}` : ``}&end=${endDate !== null ? `${endDate.day}.${endDate.month}.${endDate.year}` : ``}`}*/}
            {/*        id={styles.search_button}>Найти</Link>) :*/}
            {/*    <button id={styles.search_button} onClick={() => handleInputClick()}>Найти</button>}*/}
            {/*<button id={styles.search_button} onClick={() => {*/}
            {/*    console.log("startDate: ")*/}
            {/*    console.log(startDate);*/}
            {/*    console.log("endDate: ")*/}
            {/*    console.log(endDate);*/}
            {/*    handleInputClick()*/}
            {/*}}>Найти*/}
            {/*</button>*/}

        </>
    );


}