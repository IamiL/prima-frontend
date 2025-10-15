import styles from "./flatPageHeader.module.css";
import Link from "next/link";
import {Logo} from "@/components/logo/logo";

export function FlatPageHeader() {
    return <header id={styles.header}>
        <div><Link href="/public">
            <Logo/>
        </Link></div>
        <div/>
    </header>
}