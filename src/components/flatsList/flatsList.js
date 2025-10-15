"use client";

import {useState, useEffect} from "react";
import {fetchFlats} from "@/services/api";
import {FlatCart} from "@/components/flatCart/flatCart";
import {FlatCardSkeleton} from "@/components/flatCardSkeleton/flatCardSkeleton";
import styles from "./flatsList.module.css";

export function FlatsList({start, end, humans}) {
    const [apartments, setApartments] = useState([]);
    const [flats, setFlats] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFlats = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchFlats(start, end, humans);

                if (!data.apartments) {
                    throw new Error("Не удалось загрузить квартиры");
                }

                setApartments(data.apartments);

                // Transform apartments data to match FlatCart expected structure
                const transformedFlats = data.apartments.reduce((acc, apart) => {
                    acc[apart.id] = {
                        id: apart.id,
                        address: apart.address,
                        number_of_rooms: apart.rooms,
                        capacity: apart.humans,
                        area: 40, // Default value as realtycalendar API doesn't provide this
                        photos: apart.photos || [], // Photos array from realtycalendar
                    };
                    return acc;
                }, {});

                setFlats(transformedFlats);
            } catch (err) {
                console.error("Error loading flats:", err);
                setError(err.message || "Произошла ошибка при загрузке квартир");
            } finally {
                setLoading(false);
            }
        };

        loadFlats();
    }, [start, end, humans]);

    if (loading) {
        return (
            <ul id={styles.flatsList}>
                {[...Array(6)].map((_, index) => (
                    <FlatCardSkeleton key={index}/>
                ))}
            </ul>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>⚠️ {error}</p>
                <button onClick={() => window.location.reload()}>
                    Попробовать снова
                </button>
            </div>
        );
    }

    if (apartments.length === 0) {
        return (
            <div className={styles.empty}>
                <p>К сожалению, на выбранные даты нет свободных квартир</p>
            </div>
        );
    }

    return (<>
            <div id={styles.results_description}>
                <div id={styles.results_description_text}>
                    {apartments.length} объектов сдаётся в аренду
                </div>
                <div id={styles.results_description_btns}>
                    <button id={styles.results_description_btn_dropdown}>
                                                    <span id={styles.results_description_btn_dropdown_icon}>
                            <svg
                                focusable="false"
                                aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path
                                    fill="currentColor"
                                    d="M16 16a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1ZM6 9h17a1 1 0 1 0 0-2H6a1 1 0 0 0 0 2Zm7 14H6a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm15.707-2.707a1.001 1.001 0 0 0-1.415 0L24 23.585V14a1 1 0 0 0-2 0v9.586l-3.293-3.293a1 1 0 1 0-1.415 1.415l5 5a1.001 1.001 0 0 0 1.415 0l5-5a1.001 1.001 0 0 0 0-1.415Z">
                                </path>
                            </svg>
                        </span>
                        Рекомендуемые
                    </button>
                    <button id={styles.results_description_btn_map}>
                            <span>
                                <svg
                                    focusable="false"
                                    aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                    fill="none">
                                    <path
                                        fill="currentColor"
                                        d="M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.012 11.012 0 0 0 16 2Zm0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z">

                            </path>
                            </svg>
                            </span>
                        Карта
                    </button>
                </div>
            </div>
            <ul id={styles.flatsList}>
                {apartments.map((apart) => (
                    <FlatCart
                        key={apart.id}
                        price={apart.price}
                        flatInfo={flats[apart.id]}
                        start={start}
                        end={end}
                    />
                ))}
            </ul>
        </>
    );
}