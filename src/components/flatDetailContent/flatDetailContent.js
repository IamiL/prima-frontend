import {fetchFlats} from "@/services/api";
import {redirect} from "next/navigation";
import styles from "./flatDetailContent.module.css";
import {Facility} from "@/components/facility/facility";
import {SubmitBlock} from "@/components/submitBlock/submitBlock";
import {DescriptionBlock} from "./DescriptionBlock";

// Helper function to strip HTML tags from description
function stripHtml(html) {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export async function FlatDetailContent({ flatId, start, end, humans }) {
    // Fetch all available flats from realtycalendar
    const {apartments} = await fetchFlats(start, end, humans);

    if (!apartments) {
        redirect('/notfound');
    }

    // Find the specific flat by ID
    const apartment = apartments.find(apt => apt.id == flatId);

    if (!apartment) {
        redirect('/notfound');
    }

    // Transform apartment data to match page expectations with default values
    const flatInfo = {
        id: apartment.id,
        address: apartment.address || "Адрес не указан",
        area: 40, // Default value as not provided by API
        rooms: apartment.rooms || 1,
        sleeps_distribution: apartment.sleeps || "2+1",
        description: stripHtml(apartment.desc) || "Описание отсутствует",
        facilities: apartment.services?.map(service => service.name) || [],
        price: apartment.price || 0,
        photos: apartment.photos || [],
        main_photo: apartment.main_photo?.preview?.url || "",
        humans: apartment.humans || 1,
        floor: apartment.floor || 1,
        title: apartment.title || apartment.address,
    };

    return (
        <div id={styles.container}>
            <div id={styles.block1}>
                <div id={styles.imagesContainer}>
                    <div id={styles.mainImage}>
                        <img
                            src={flatInfo.photos[0]?.file || flatInfo.main_photo || '/placeholder-image.jpg'}
                            alt={`${flatInfo.address} - главное фото`}
                        />
                    </div>
                    <div id={styles.secondaryImages}>
                        {flatInfo.photos.slice(1, 10).map((photo, index) => (
                            <div key={index}>
                                <img
                                    src={photo.file}
                                    alt={`${flatInfo.address} - фото ${index + 2}`}
                                />
                            </div>
                        ))}
                        {/* Fill empty slots if less than 6 photos */}
                        {flatInfo.photos.length < 7 && [...Array(7 - flatInfo.photos.length)].map((_, index) => (
                            <div key={`empty-${index}`}>
                                <img
                                    src={flatInfo.photos[0]?.file || '/placeholder-image.jpg'}
                                    alt="Дополнительное фото"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div id={styles.locationContainer}>
                    <button id={styles.locationContainer_text}>{flatInfo.address}</button>
                    <button id={styles.mapButton}>
                        <span><svg focusable="false"
                                   aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                   fill="none">
                            <path fill="currentColor"
                                  d="M16 7.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-14A11.512 11.512 0 0 0 4.5 13c0 9.67 10.205 16.925 10.64 17.229a1.5 1.5 0 0 0 1.72 0 32.382 32.382 0 0 0 5.273-4.875C25.642 21.32 27.5 17.046 27.5 13A11.513 11.513 0 0 0 16 1.5Zm3.913 21.839A31.164 31.164 0 0 1 16 27.11a31.164 31.164 0 0 1-3.912-3.772C10 20.92 7.5 17.164 7.5 13a8.5 8.5 0 0 1 17 0c0 4.164-2.5 7.921-4.587 10.339Z">
                        </path>
                        </svg>
                        </span>
                        Карта
                    </button>
                </div>
                <div id={styles.priceContainer}>
                    <span id={styles.priceContainer_price}>{flatInfo.price.toLocaleString('ru-RU')} рублей</span>{" "}
                    <span id={styles.priceContainer_text}>в сутки</span>
                </div>
                <ul id={styles.descriptionItemsContainer}>
                    <li>Площадь: {flatInfo.area} m²</li>
                    <li>{flatInfo.rooms}-комнатная квартира</li>
                    <li>Гибкая отмена</li>
                    <li>{flatInfo.humans} спальных мест</li>
                    <li>Распределение мест: {flatInfo.sleeps_distribution}</li>
                </ul>
                <DescriptionBlock description={flatInfo.description} />
                <div id={styles.servicesContainer}>
                    <h2>Дополнительные услуги и удобства</h2>
                    <ul id={styles.services}>
                        {flatInfo.facilities.map(facility => {
                                console.log(facility)
                                return <li key={facility}>
                                    <Facility id={facility}/>
                                </li>
                            }
                        )}
                    </ul>
                    <button>Показать больше</button>
                </div>
                <div id={styles.rulesContainer}>
                    <h2>Правила</h2>
                    <ul>
                        <li>С домашними животными за доп. плату</li>
                        <li>Курение запрещено</li>
                    </ul>
                </div>

                <div id={styles.documentsContainer}>
                    <h2>Документы, необходимые для бронирования</h2>
                    <div id={styles.documentsBlock}>
                        <p>Попросим эти документы для подтверждения бронирования</p>
                        <div>
                            <span>
                                <svg
                                    focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <path fill="currentColor"
                                          d="M9.399 24.8a1 1 0 0 0 1.401-.2 6.5 6.5 0 0 1 10.4 0 1 1 0 1 0 1.6-1.2 8.486 8.486 0 0 0-3.425-2.711 5 5 0 1 0-6.742 0A8.486 8.486 0 0 0 9.2 23.4a1 1 0 0 0 .199 1.4ZM16 14a3 3 0 1 1 0 5.999A3 3 0 0 1 16 14Zm9-11H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 24H7V5h18v22ZM11 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z">
                                    </path>
                                </svg>
                            </span>
                            <div>
                                <h3>Подтверждение личности</h3>
                                <p>Удостоверение личности государственного образца или паспорт.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={styles.contractContainer}>
                    <h2>Договор</h2>
                    <button>Черновик договора</button>
                </div>

                <div id={styles.cancellationContainer}>
                    <h2>Политика отмены</h2>
                </div>

                <div id={styles.questionsContainer}>
                    <h2>Частые вопросы</h2>
                </div>
            </div>
            {/*<div id={styles.block2}>*/}
            {/*    <SubmitBlock/>*/}
            {/*</div>*/}
        </div>
    );
}