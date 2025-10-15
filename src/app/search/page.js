import styles from "./page.module.css";
import {FlatsList} from "@/components/flatsList/flatsList";
import SearchPageHeader from "@/components/header/searchPage/searchPageHeader";

export default async function Search({searchParams}) {
    const sParams = await searchParams;

    const start = sParams.start;
    const end = sParams.end;
    const humans = sParams.humans;

    return (
        <>
            <SearchPageHeader startDate={start} endDate={end} humans={humans}/>
            <main id={styles.main}>
                <div id={styles.params_panel_container}>
                    <div id={styles.params_panel}>
                        <button>
                            <span>235&nbsp;715&nbsp;₽ - 1&nbsp;866&nbsp;305&nbsp;₽</span>
                            <span className={styles.params_panel_strelka_icon_container}>
                            <svg
                                focusable="false"
                                aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path
                                    fill="currentColor"
                                    d="m26.708 12.708-10 10a1.001 1.001 0 0 1-1.415 0l-10-10a1 1 0 0 1 1.415-1.415L16 20.586l9.293-9.293a1 1 0 0 1 1.415 1.415Z">
                        </path>
                        </svg>
                        </span>
                        </button>
                    </div>
                </div>
                <FlatsList start={start} end={end} humans={humans} />
            </main>
        </>
    );
}
