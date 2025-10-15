"use client";
import styles from "./flatCart.module.css";
import Link from "next/link";

import React, {useState} from "react";

const AccessibilityToTheCityCenterTimeFormatConsts = {1: "минут", 2: "часов"};
const AccessibilityToTheCityCenterTypeOfTransportConsts = {
    1: "пешком",
    2: "на машине",
    3: "на автобусе",
    4: "на трамвае",
    5: "на троллейбусе",
};

export function FlatCart({price, flatInfo, start, end}) {
    const [iPhoto, setIPhoto] = useState(0);
    const [like, setLike] = useState(false);

    // Get photos from flatInfo, limit to 5 for display
    const photos = flatInfo?.photos?.slice(0, 5) || [];
    const totalPhotos = photos.length;

    console.log("В КОМПОНЕНТЕЕ");
    console.log("full flatInfo:", flatInfo);

    return (
        <li className={styles.FlatCart}>
            {/*<Link href={`/flats/${flatInfo.id}?start=${start}&end=${end}`} className={styles.flat_cart_preview}>*/}
            {/*    <img src={`http://localhost:9000/flats/${flatInfo.id}/1.webp`}*/}
            {/*         className={styles.flat_cart_preview_img}/>*/}
            {/*    <img src={`http://localhost:9000/flats/${flatInfo.id}/2.webp`}*/}
            {/*         className={styles.flat_cart_preview_img}/>*/}
            {/*</Link>*/}

            <div className={styles.flat_cart_preview}>
                <div style={{transform: `translateX(-${iPhoto * 100}%)`}}
                     className={styles.flat_cart_preview_images}>
                    {photos.length > 0 ? (
                        photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo.file}
                                alt={`${flatInfo.address} - фото ${index + 1}`}
                                className={styles.flat_cart_preview_img}
                            />
                        ))
                    ) : (
                        <img
                            src="/placeholder-image.jpg"
                            alt="Изображение недоступно"
                            className={styles.flat_cart_preview_img}
                        />
                    )}
                </div>

                <Link href={`/flats/${flatInfo.id}?start=${start}&end=${end}`}></Link>
                <div className={styles.flat_cart_preview_nadsloyka}>
                    <div className={styles.flat_cart_preview_nadsloyka_like}>
                        <button className={styles.btn_like} onClick={() => setLike(!like)}>
                            <svg
                                className={styles.btn_like_svg_1}
                                style={like ? {color: 'rgb(255, 75, 39)'} : undefined}
                                focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor"
                                      d="M30 11.75c0 8.75-12.974 15.832-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.759 7.759 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.759 7.759 0 0 1 30 11.75Z"></path>
                            </svg>
                            <svg
                                className={styles.btn_like_svg_2}
                                focusable="false" aria-hidden="true" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor"
                                      d="M22.25 4C19.669 4 17.409 5.11 16 6.986 14.591 5.11 12.331 4 9.75 4A7.759 7.759 0 0 0 2 11.75c0 8.75 12.974 15.832 13.526 16.125a1 1 0 0 0 .948 0C17.026 27.582 30 20.5 30 11.75A7.759 7.759 0 0 0 22.25 4ZM16 25.85c-2.283-1.33-12-7.389-12-14.1A5.757 5.757 0 0 1 9.75 6c2.431 0 4.473 1.295 5.325 3.375a1 1 0 0 0 1.85 0C17.777 7.291 19.819 6 22.25 6A5.757 5.757 0 0 1 28 11.75c0 6.701-9.72 12.769-12 14.1Z"></path>
                            </svg>
                        </button>
                    </div>

                    {totalPhotos > 1 && (
                        <div className={styles.flat_cart_preview_nadsloyka_btns}>
                            <button className={styles.btn_change_preview}
                                    style={iPhoto == 0 ? {opacity: 0} : null}
                                    onClick={iPhoto > 0 ? () => setIPhoto(iPhoto - 1) : null}>
                                <svg focusable="false"
                                     aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                     fill="none">
                                    <path fill="currentColor"
                                          d="M21.604 23.874a1.387 1.387 0 1 1-1.963 1.963l-9.234-9.234a1.386 1.386 0 0 1 0-1.963l9.234-9.234a1.387 1.387 0 1 1 1.963 1.963l-8.252 8.251 8.252 8.254Z"></path>
                                </svg>
                            </button>


                            <button className={styles.btn_change_preview}
                                    style={iPhoto == totalPhotos - 1 ? {opacity: 0} : null}
                                    onClick={iPhoto < totalPhotos - 1 ? () => setIPhoto(iPhoto + 1) : null}>
                                <svg focusable="false"
                                     aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                     fill="none">
                                    <path fill="currentColor"
                                          d="m21.602 16.602-9.234 9.233a1.387 1.387 0 1 1-1.962-1.962l8.254-8.251-8.251-8.254a1.386 1.386 0 0 1 1.512-2.262c.168.07.32.172.45.3l9.233 9.233a1.384 1.384 0 0 1-.002 1.963Z"></path>
                                </svg>
                            </button>
                        </div>
                    )}
                    {totalPhotos > 1 && (
                        <div className={styles.flat_cart_preview_nadsloyka_indicators}>
                            {photos.map((_, index) => (
                                <button
                                    key={index}
                                    style={{opacity: (iPhoto === index) ? 1 : 0.4}}
                                    className={styles.flat_cart_preview_nadsloyka_indicators_btn}
                                    onClick={() => setIPhoto(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Link href={`/flats/${flatInfo.id}?start=${start}&end=${end}`} className={styles.flat_cart_info}>
                <p className={styles.flat_cart_info_text}>
                    <span className={styles.flat_cart_info_price_value}>
                        {price} РУБ
                    </span>
                    {" "}
                    <span className={styles.flat_cart_info_price_text}>/ сутки</span></p>
                <p className={styles.flat_cart_info_address}>{flatInfo.address}</p>
                <p className={styles.flat_cart_info_specs_list}>
                    <span className={styles.flat_cart_info_specs_item}>{flatInfo.area} м²</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.flat_cart_info_specs_item}>{flatInfo.number_of_rooms} комнаты</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.flat_cart_info_specs_item}>Максимум {flatInfo.capacity} человек</span>
                </p>
                {flatInfo.accessibility_to_the_city_center && <p
                    className={styles.flat_cart_info_time_to_center}>
                    🚶‍➡️
                    {
                        flatInfo.accessibility_to_the_city_center
                            .time
                    }{" "}
                    {
                        AccessibilityToTheCityCenterTimeFormatConsts[
                            flatInfo.accessibility_to_the_city_center.time_format
                            ]
                    }{" "}
                    {
                        AccessibilityToTheCityCenterTypeOfTransportConsts[
                            flatInfo.accessibility_to_the_city_center.type_of_transport
                            ]
                    }{" "}
                    до центра
                </p>}
                {/*<p>id:{flatInfo.id}</p>*/}
            </Link>
        </li>
    );
}
