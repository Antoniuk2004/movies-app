import {signal} from "@preact/signals-react";
import {MovieQuery} from "@/types/MovieQuery";

export const movieQuerySignal = signal<MovieQuery>({
    movieId: null,
    selectedValue: null,
    router: null
});