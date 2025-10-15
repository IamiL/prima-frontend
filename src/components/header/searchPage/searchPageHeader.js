import React from 'react';
import '../header.css'
import styles from './searchPageHeader.module.css'
import {Logo} from "@/components/logo/logo";
import Link from "next/link";

function SearchPageHeader({startDate, endDate, humans}) {
    return <header id={styles.header}>
        <div id={styles.logoSec}>
            <Link href="/">
                <Logo/>
            </Link>
        </div>
        <button id={styles.inputParamsInfo}>
            <svg
                focusable="false"
                aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path fill="currentColor"
                      d="m28.572 26.53-5.71-5.713a11.075 11.075 0 1 0-2.044 2.044l5.715 5.716a1.444 1.444 0 1 0 2.044-2.044l-.005-.004ZM5.91 14.084a8.175 8.175 0 1 1 8.175 8.175 8.184 8.184 0 0 1-8.175-8.175Z"></path>
            </svg>

            <span>{`${startDate} - ${endDate}, ${humans} гостя`}</span>
        </button>
        <div>
            <button className="hamburger--squeeze hamburger">
                <span className="hamburgerBox">
                    <span className="hamburgerInner"></span>
                </span>
            </button>
        </div>
    </header>
}

export default SearchPageHeader;