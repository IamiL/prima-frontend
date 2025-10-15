import { fetchBookingPrice } from "@/services/api";
import { BookingBottomSheet } from "@/components/bookingBottomSheet/bookingBottomSheet";

export async function BookingWrapper({ apartmentId, startDate, endDate, humans = 1 }) {
    // Fetch booking price from API
    const priceData = await fetchBookingPrice(apartmentId, humans, startDate, endDate);

    return (
        <BookingBottomSheet
            priceData={priceData}
            apartmentId={apartmentId}
            startDate={startDate}
            endDate={endDate}
            humans={humans}
        />
    );
}