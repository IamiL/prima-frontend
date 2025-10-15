export function Facility({id}) {
    console.log("запрос:", id);

    switch (id) {
        case 1:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Стиральная машина</>
        case 2:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Интернет Wi-Fi</>
        case 3:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Телевизор</>
        case 4:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Кондиционер</>
        case 5:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Можно с детьми</>
        case 6:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Холодильник</>
        case 7:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Телефон</>
        case 8:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Кухонная плита</>
        case 9:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Посудомоечная машина</>
        case 10:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                СВЧ печь</>
        case 11:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Утюг с гладильной доской</>
        case 12:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Парковка</>
        case 13:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Кабельное Телевидение</>
        case 14:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Ванные принадлежности</>
        case 15:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Можно с животными</>
        case 16:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Водонагреватель</>
        case 17:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Лифт</>
        case 18:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Балкон</>
        case 19:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Для мероприятий</>
        case 20:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Для романтических встреч</>
        case 21:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Для романтических встреч</>
        case 22:
            return <>
                <svg
                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                          d="M15 8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm6.54 16.642.44 3.076A2 2 0 0 1 20 30h-8a2 2 0 0 1-1.98-2.282l.44-3.076A12.011 12.011 0 0 1 4 14a1 1 0 0 1 1-1h2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h2a1 1 0 0 1 1 1 12.01 12.01 0 0 1-6.46 10.642ZM9 13h14V5H9v8Zm10.634 12.438c-2.365.75-4.903.75-7.268 0L12 28h8l-.366-2.563ZM25.95 15H6.05a10 10 0 0 0 19.9 0Z">

                    </path>
                </svg>
                Сейф
            </>
    }
}