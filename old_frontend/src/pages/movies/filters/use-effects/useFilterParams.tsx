import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import {FilterParams} from "@/pages/movies/filters/FilterParams";

export const useFilterParams = () => {
    const [filterParams, setFilterParams] = useState<FilterParams | null>(null);
    const router = useRouter();
    const query = router.query;

    useEffect(() => {
        const params: FilterParams = {
            genres: query.genres,
            actors: query.actors,
            directors: query.directors,
            ageLimit: query.ageLimit,
            releaseYearFrom: query.releaseYearFrom as string,
            releaseYearTo: query.releaseYearTo as string,
            ratingFrom: query.ratingFrom as string,
            ratingTo: query.ratingTo as string,
            excludeGenres: query.excludeGenres,
            excludeActors: query.excludeActors,
            excludeDirectors: query.excludeDirectors
        }
        setFilterParams(params);
    }, [query]);

    return filterParams
}