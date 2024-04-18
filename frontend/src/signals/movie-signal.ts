import {signal} from "@preact/signals-react";
import {Movie} from "@/types/Movie";

export const movieSignal = signal<Movie>({
    watchingStatus: null,
    addedAt: null,
    description: null,
    duration: null,
    movieId: null,
    moviePath: null,
    cover: null,
    banner: null,
    rating: null,
    releaseYear: null,
    title: null,
    genres: null,
    originCountry: null,
    mpaaRating: null,
    studio: null,
    ratingDistribution: null,
    totalRates: null,
    totalWatchingStatuses: null,
    watchingStatusDistribution: null,
});