import {Suspense} from "react";
import {FlatPageHeader} from "@/components/header/flatPageHeader/flatPageHeader";
import {FlatDetailContent} from "@/components/flatDetailContent/flatDetailContent";
import {FlatDetailSkeleton} from "@/components/flatDetailSkeleton/flatDetailSkeleton";
import {BookingWrapper} from "@/components/bookingWrapper/bookingWrapper";
import {BookingBottomSheetSkeleton} from "@/components/bookingBottomSheetSkeleton/bookingBottomSheetSkeleton";
import styles from "./page.module.css"

export default async function Flat({params, searchParams}) {
    const flatId = (await params).flatId;
    const sParams = await searchParams;

    const start = sParams.start;
    const end = sParams.end;
    const humans = sParams.humans || 1;

    return (
        <>
            <FlatPageHeader/>
            <main id={styles.main}>
                <Suspense fallback={<FlatDetailSkeleton />}>
                    <FlatDetailContent
                        flatId={flatId}
                        start={start}
                        end={end}
                        humans={humans}
                    />
                </Suspense>

                {/* Booking Bottom Sheet with Suspense */}
                <Suspense fallback={<BookingBottomSheetSkeleton />}>
                    <BookingWrapper
                        apartmentId={flatId}
                        startDate={start}
                        endDate={end}
                        humans={humans}
                    />
                </Suspense>
            </main>
        </>
    );
}