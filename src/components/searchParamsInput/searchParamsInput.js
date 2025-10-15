"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from "./searchParamsInput.module.css";
import {NumberOfGuests} from "@/components/numberOfGuests/numberOfGuests";
import {SPInp} from "@/components/sPInp/sPInp";

export function SearchParamsInput() {

    const [startDate, setStartDate] = useState(null);

    const [endDate, setEndDate] = useState(null);

    const [numberOfGuests, setNumberOfGuests] = useState(2);

    return (
        <>

            <div id={styles.dateInput}>
                <SPInp startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                <NumberOfGuests numberOfGuests={numberOfGuests} setNumberOfGuests={setNumberOfGuests}/>

                {
                    (startDate == null || endDate == null) ?
                        <a id={styles.search_button} onClick={() => setCalendarVisible(true)}>Найти</a> :
                        <Link
                            href={`/search?humans=${numberOfGuests}&start=${startDate !== null ? `${startDate.dateVal.day}.${startDate.dateVal.month}.${startDate.dateVal.year}` : ``}&end=${endDate !== null ? `${endDate.dateVal.day}.${endDate.dateVal.month}.${endDate.dateVal.year}` : ``}`}
                            id={styles.search_button}>Найти</Link>
                }
            </div>


        </>

    );
}
