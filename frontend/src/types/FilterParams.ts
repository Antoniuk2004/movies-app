import {Genre} from "@/types/Genre";
import {Person} from "@/types/Person";
import {Studio} from "@/types/Studio";
import {CountryType} from "@/types/CountryType";
import {WatchingStatusType} from "@/types/WatchingStatusType";
import {MpaaRatingType} from "@/types/MpaaRatingType";

export type FilterParams = {
    genres: Genre[] | null;
    actors: Person[] | null;
    directors: Person[] | null;
    studios: Studio[] | null;
    countries: CountryType[] | null;
    includedWatchingStatuses: string[] | null;
    excludedWatchingStatuses: string[] | null;
    watchingStatuses: WatchingStatusType[] | null;
    mpaaRatings: MpaaRatingType[] | null;
    yearFrom: number | null;
    yearTo: number | null;
    ratingFrom: number | null;
    ratingTo: number | null;
    durationFrom: number | null;
    durationTo: number | null;
    limit: number | null;
    offset: number | null;
    search: string | null;
    order: string;
    orderType: string;
}

export const lists = ['genres', 'actors', 'directors', 'studios', 'countries', 'mpaaRatings', 'includedWatchingStatuses', 'excludedWatchingStatuses'];