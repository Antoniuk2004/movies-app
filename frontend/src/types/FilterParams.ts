import {Sort} from "@/types/Sort";

export type FilterParams = {
    genres: string[];
    actors: string[];
    directors: string[];
    includedWatchingStatuses: string[];
    excludedWatchingStatuses: string[];
    mpaaRatings: string[];
    countries: string[];
    studios: string[];
    yearFrom: number;
    yearTo: number;
    ratingFrom: number;
    ratingTo: number;
    durationFrom: number;
    durationTo: number;
    limit: number;
    offset: number;
    search: string;
    order: Sort.ASC | Sort.DESC;
    orderType: Sort;
}