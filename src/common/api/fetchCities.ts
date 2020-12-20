import { config } from '../config';
import { CityItem } from '../types/commonTypes';

export const fetchCities = async (search: string) => {
    const res = await (
        await fetch(config.citiesFetchUrl, {
            method: 'POST',
            body: JSON.stringify({
                query: search,
                type: 'city',
                language: 'en',
            }),
        })
    ).json();

    const result: CityItem[] = [];
    res.hits.forEach((i: any) =>
        result.push({ label: `${i.locale_names[0]}, ${i.administrative[0]}, ${i.country}`, geoLocation: i._geoloc })
    );

    return result;
};
