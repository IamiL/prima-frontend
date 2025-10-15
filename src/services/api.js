export async function fetchFlats(start, end, humans) {
    console.log("start Fetching Flats");

    // const result = await fetch(`http://localhost:8080/`, {
    //     cache: "no-store",
    // });

    const result = await fetch(`https://realtycalendar.ru/widgets/bookings/search/2ac7386912591429037bb17336d968fa.json?humans=${humans}&begin_date=${start}&end_date=${end}`, {
        cache: "no-store",
    });
    console.log(`https://realtycalendar.ru/widgets/bookings/search/2ac7386912591429037bb17336d968fa.json?humans=${humans}&begin_date=${start}&end_date=${end}`);

    const resJson = await result.json();

    console.log("рес" + resJson);
    // console.log(resJson);

    return resJson;
}

export async function getFlatsBriefInfos() {
    // const result = await fetch(`http://localhost:8080/flats`, {
    //     cache: "force-cache",
    // });
    const result = await fetch(`http://localhost:8080/flatsBriefInfos`, {
        cache: "no-store",
    });
    const ResJson = await result.json();

    return ResJson;
}

export async function getFlatsFullInfos() {
    // const result = await fetch(`http://localhost:8080/flatsInfos`, {
    //     cache: "force-cache",
    // });
    const result = await fetch(`http://localhost:8080/flatsFullInfos`, {
        cache: "no-store",
    });
    const ResJson = await result.json();

    return ResJson;
}

export async function fetchBookingPrice(apartmentId, humans, startDate, endDate) {
    const result = await fetch(
        `https://realtycalendar.ru/widgets/bookings/apartments/${apartmentId}/price.json?token=2ac7386912591429037bb17336d968fa&humans=${humans}&begin_date=${startDate}&end_date=${endDate}`,
        {
            cache: "no-store",
        }
    );

    const resJson = await result.json();
    return resJson;
}
