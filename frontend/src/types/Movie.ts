import {Genre} from "@/types/Genre";
import {WatchingStatus} from "@/types/WatchingStatus";
import {Country} from "@/types/Country";
import {RatingDistribution} from "@/types/RatingDistribution";
import {WatchingStatusDistribution} from "@/types/WatchingStatusDistribution";

export type Movie = {
    watchingStatus: WatchingStatus | null,
    addedAt: string | null,
    description: string | null,
    duration: number | null,
    movieId: number | null,
    moviePath: string | null,
    cover: string | null,
    banner: string | null,
    rating: number | null,
    genres: Genre[] | null,
    releaseYear: number | null,
    title: string | null,
    originCountry: Country | null,
    mpaaRating: string | null,
    studio: string | null,
    ratingDistribution: RatingDistribution | null,
    watchingStatusDistribution: WatchingStatusDistribution | null,
    totalRates: number | null,
    totalWatchingStatuses: number | null,
}