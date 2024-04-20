import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {movieSignal} from "@/signals/movie-signal";
import {calcAvgRating} from "@/pages/movies/[id]/helpers";

type RatingData = {
    rating: number;
    totalRates: number;
}

export const useRatingData = () => {
    const [ratingData, setRatingData] = useState<RatingData | null>(null);

    useEffect(() => {
        effect(() => {
            setRatingData({
                rating: calcAvgRating() || 0,
                totalRates: movieSignal.value.totalRates
            })
        })
    }, []);

    return ratingData
}