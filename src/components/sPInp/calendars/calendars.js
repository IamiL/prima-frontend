import styles from '../sPlnp.module.css';
import React, {useState} from "react";
import "../sPinp.css"

const Calendars = ({
                       months,
                       tempMonthIterator,
                       state,
                       setState,
                       startDate,
                       setStartDate,
                       endDate,
                       setEndDate,
                       calenChecked,
                       setCalenChecked
                   }) => {
    const [hover, setHover] = useState({iMonth: 0, iDay: 0});
    console.log("state: iMonth - ", hover.iMonth, ", iDay - ", hover.iDay)
    if (state === 0) {
        return <>
            <Calendar0 key={tempMonthIterator} month={months[tempMonthIterator]}
                       click={(date, index) => {
                           console.log("записываем в startDate.dateVal.day: ", date.day)
                           setStartDate({dateVal: date, i: tempMonthIterator, iDay: index});
                           setState(1);
                           setCalenChecked(2);
                       }}/>

            <Calendar0 key={tempMonthIterator + 1} month={months[tempMonthIterator + 1]} check={1}
                       click={(date, index) => {
                           setStartDate({dateVal: date, i: tempMonthIterator + 1, iDay: index});
                           setState(1);
                           setCalenChecked(2);
                       }}/>
        </>
    }

    if (state === 1) {
        return <>
            <Calendar1 key={tempMonthIterator} month={months[tempMonthIterator]} state={state}
                       tempMonthIterator={tempMonthIterator}
                       click={(date, index) => {
                           setEndDate({dateVal: date, i: tempMonthIterator, iDay: index});
                           setState(2);
                       }}
                       click2={(date, index) => {
                           setStartDate({dateVal: date, i: tempMonthIterator, iDay: index})
                           setHover({iMonth: 0, iDay: 0})
                       }}
                       startDate={startDate}
                       hover={hover}
                       setHover={setHover}/>

            <Calendar1 key={tempMonthIterator + 1} month={months[tempMonthIterator + 1]} state={state}
                       tempMonthIterator={tempMonthIterator + 1}
                       click={(date, index) => {
                           setEndDate({dateVal: date, i: tempMonthIterator + 1, iDay: index});
                           setState(2);
                           setCalenChecked(0);
                       }}
                       click2={(date, index) => {
                           setStartDate({dateVal: date, i: tempMonthIterator + 1, iDay: index})
                           setHover({iMonth: 0, iDay: 0})
                       }}
                       startDate={startDate}
                       hover={hover}
                       setHover={setHover}/>
        </>
    }

    if (state === 2) {
        return <>
            <Calendar2 key={tempMonthIterator} month={months[tempMonthIterator]}
                       tempMonthIterator={tempMonthIterator}
                       state={state}
                       click={(date, index) => {
                           if (calenChecked === 1) {
                               setStartDate({
                                   dateVal: date,
                                   i: tempMonthIterator,
                                   iDay: index
                               });
                               setCalenChecked(2);
                           }
                       }}
                       click2={(date) => {
                           setStartDate({dateVal: date, i: tempMonthIterator});
                           setState(1);
                       }}
                       startDate={startDate}
                       endDate={endDate}
            />

            <Calendar2 key={tempMonthIterator + 1} month={months[tempMonthIterator + 1]}
                       tempMonthIterator={tempMonthIterator + 1}
                       state={state}
                       click={(date, index) => {
                           if (calenChecked === 1) {
                               setStartDate({
                                   dateVal: date,
                                   i: tempMonthIterator + 1,
                                   iDay: index
                               });
                               setCalenChecked(2);
                           }
                       }}
                       startDate={startDate}
                       endDate={endDate}
            />
        </>
    }

}

const Calendar0 = ({month, click}) => {
    return (
        <>
            <h3>
                {month.name}
            </h3>
            <div className={styles.calendar}>
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                    <div key={index} className={styles.weekday}>
                        {day}
                    </div>
                ))}
                {month.month.map((day, index) => (
                    day ? <button
                        style={{}}
                        key={index}
                        className={`calendar_day_default calendar_day`}
                        onClick={() => {
                            console.log("клик по дате: ", day.day);
                            click(day.date, index)
                        }}
                        disabled={day.dsb}
                    >
                        <div
                            className={`cd_div`}>
                            {day.date.day}
                        </div>
                    </button> : <div key={index}/>
                ))}
            </div>
        </>
    );
}

const Calendar1 = ({month, click, click2, tempMonthIterator, startDate, hover, setHover}) => {
    if (startDate.i === tempMonthIterator) {
        return (
            <>
                <h3>
                    {month.name}
                </h3>
                <div className={styles.calendar}>
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                        <div key={index} className={styles.weekday}>
                            {day}
                        </div>
                    ))}
                    {
                        month.month.map((day, index) => {
                            return (
                                day ? (index > startDate.iDay) ? <button
                                    key={index}
                                    className={`calendar_day_default hoverDate ${hover.iMonth > tempMonthIterator ? 'hovPer' : hover.iDay > index ? 'hovPer' : hover.iDay === index ? 'hovEndDate' : ''}`}
                                    onClick={() => click(day.date, index)}
                                    onMouseEnter={() => setHover({iMonth: tempMonthIterator, iDay: index})}
                                >
                                    <div
                                        className={`cd_div`}>
                                        {day.date.day}
                                    </div>
                                </button> : <button
                                    key={index}
                                    className={`calendar_day_default ${(index === startDate.iDay) ? 'startDay' : 'calendar_day'}`}
                                    onClick={() => click2(day.date, index)}
                                    onMouseEnter={() => setHover({iMonth: tempMonthIterator, iDay: startDate.iDay})}
                                    disabled={day.dsb}
                                >
                                    <div
                                        className={`cd_div`}>
                                        {day.date.day}
                                    </div>
                                </button> : <div key={index}/>
                            )
                        })}
                </div>
            </>
        );
    } else if (startDate.i < tempMonthIterator) {
        return (
            <>
                <h3>
                    {month.name}
                </h3>
                <div className={styles.calendar}>
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                        <div key={index} className={styles.weekday}>
                            {day}
                        </div>
                    ))}
                    {month.month.map((day, index) => (
                        day ? <button
                            style={{}}
                            key={index}
                            className={`calendar_day_default  hoverDate ${hover.iMonth < tempMonthIterator ? '' : hover.iMonth > tempMonthIterator ? 'hovPer' : hover.iDay > index ? 'hovPer' : hover.iDay == index ? 'hovEndDate' : ''}`}
                            onClick={() => click(day.date, index)}
                            onMouseEnter={() => setHover({iMonth: tempMonthIterator, iDay: index})}
                            disabled={day.dsb}
                        >
                            <div
                                className={`cd_div`}>
                                {day.date.day}
                            </div>
                        </button> : <div key={index}/>
                    ))}
                </div>
            </>
        );
    } else {
        return (
            <>
                <h3>
                    {month.name}
                </h3>
                <div className={styles.calendar}>
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                        <div key={index} className={styles.weekday}>
                            {day}
                        </div>
                    ))}
                    {month.month.map((day, index) => (
                        day ? <button
                            style={{}}
                            key={index}
                            className={`calendar_day_default calendar_day`}
                            onClick={() => click2(day.date, index)}
                            onMouseEnter={() => setHover({iMonth: startDate.iMonth, iDay: startDate.iDay})}
                            disabled={day.dsb}
                        >
                            <div
                                className={`cd_div`}>
                                {day.date.day}
                            </div>
                        </button> : <div key={index}/>
                    ))}
                </div>
            </>
        );
    }
}

const Calendar2 = ({month, click, click2, tempMonthIterator, startDate, endDate}) => {
    if (tempMonthIterator === startDate.i) {
        if (tempMonthIterator === endDate.i) {
            return (
                <>
                    <h3>
                        {month.name}
                    </h3>
                    <div className={styles.calendar}>
                        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                            <div key={index} className={styles.weekday}>
                                {day}
                            </div>
                        ))}
                        {month.month.map((day, index) => (
                            day ? <button
                                style={{}}
                                key={index}
                                className={`calendar_day_default ${index < startDate.iDay ? 'calendar_day' : index > endDate.iDay ? 'calendar_day' : index === startDate.iDay ? 'startDay' : index === endDate.iDay ? 'endDay' : 'hovPer'}`}
                                onClick={() => click(day.date, index)}
                                disabled={day.dsb}
                            >
                                <div
                                    className={`cd_div`}>
                                    {day.date.day}
                                </div>
                            </button> : <div key={index}/>
                        ))}
                    </div>
                </>
            );
        } else {
            return <>
                <h3>
                    {month.name}
                </h3>
                <div className={styles.calendar}>
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                        <div key={index} className={styles.weekday}>
                            {day}
                        </div>
                    ))}
                    {month.month.map((day, index) => (
                        day ? <button
                            style={{}}
                            key={index}
                            className={`calendar_day_default ${index < startDate.iDay ? 'calendar_day' : index > startDate.iDay ? 'hovPer' : 'startDay'}`}
                            onClick={() => click(day.date, index)}
                            disabled={day.dsb}
                        >
                            <div
                                className={`cd_div`}>
                                {day.date.day}
                            </div>
                        </button> : <div key={index}/>
                    ))}
                </div>
            </>
        }
    } else if (tempMonthIterator === endDate.i) {
        return <>
            <h3>
                {month.name}
            </h3>
            <div className={styles.calendar}>
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                    <div key={index} className={styles.weekday}>
                        {day}
                    </div>
                ))}
                {month.month.map((day, index) => (
                    day ? <button
                        style={{}}
                        key={index}
                        className={`calendar_day_default ${index > endDate.iDay ? 'calendar_day' : index < endDate.iDay ? 'hovPer' : 'endDay'}`}
                        onClick={() => click(day.date, index)}
                        disabled={day.dsb}
                    >
                        <div
                            className={`cd_div`}>
                            {day.date.day}
                        </div>
                    </button> : <div key={index}/>
                ))}
            </div>
        </>
    } else if (tempMonthIterator < endDate.i && tempMonthIterator > startDate.i) {
        return (
            <>
                <h3>
                    {month.name}
                </h3>
                <div className={styles.calendar}>
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                        <div key={index} className={styles.weekday}>
                            {day}
                        </div>
                    ))}
                    {month.month.map((day, index) => (
                        day ? <button
                            style={{}}
                            key={index}
                            className={`calendar_day_default hovPer`}
                            onClick={() => click(day.date, index)}
                            disabled={day.dsb}
                        >
                            <div
                                className={`cd_div`}>
                                {day.date.day}
                            </div>
                        </button> : <div key={index}/>
                    ))}
                </div>
            </>
        )
    }
    return (
        <>
            <h3>
                {month.name}
            </h3>
            <div className={styles.calendar}>
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
                    <div key={index} className={styles.weekday}>
                        {day}
                    </div>
                ))}
                {month.month.map((day, index) => (
                    day ? <button
                        style={{}}
                        key={index}
                        className={`calendar_day_default calendar_day`}
                        onClick={() => click(day.date, index)}
                        disabled={day.dsb}
                    >
                        <div
                            className={`cd_div`}>
                            {day.date.day}
                        </div>
                    </button> : <div key={index}/>
                ))}
            </div>
        </>
    );
}

export default Calendars;
