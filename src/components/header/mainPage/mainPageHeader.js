import React from 'react';
import '../header.css'
import styles from './mainPageHeader.module.css'
import {Logo} from "@/components/logo/logo";
import Link from "next/link";

function MainPageHeader() {
    return <header id={styles.header}>
        <div id={styles.logoSec}>
            <Link href="/">
                <Logo/>
            </Link>
        </div>
    </header>
}

export default MainPageHeader;