import styles from "./numberOfGuests.module.css";
import React, {useEffect, useState} from "react";

export function NumberOfGuests({numberOfGuests, setNumberOfGuests}) {
    const [numberOfGuestsVisible, setNumberOfGuestsVisible] = useState(false);
    
    const handleNumberOfGuestsInputClick = (event) => {
        setNumberOfGuestsVisible(true)
    }

    const handleClickOutsideNumberOfGuestsVisible = (event) => {
        if (!event.target.closest(`.${styles.number_of_guests_wrapper}`)) {
            setNumberOfGuestsVisible(false);
        }
    };

    useEffect(() => {
        if (numberOfGuestsVisible) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('click', handleClickOutsideNumberOfGuestsVisible);
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClickOutsideNumberOfGuestsVisible);
        }
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClickOutsideNumberOfGuestsVisible);
        };
    }, [numberOfGuestsVisible]);

    return <div id={styles.a123}>
        <div>
            <input
                id={styles.input_number_of_guests}
                type="text"
                readOnly
                value={`${numberOfGuests} гостя`}
                onClick={() => handleNumberOfGuestsInputClick()}
            />
        </div>
        {numberOfGuestsVisible && (<div id={styles.number_of_guests_wrapper}>
            <button onClick={() => {
                setNumberOfGuests(numberOfGuests - 1)
            }}>убавить
            </button>
            {numberOfGuests}
            <button onClick={() => {
                setNumberOfGuests(numberOfGuests + 1)
            }}>прибавить
            </button>
        </div>)}
    </div>
}