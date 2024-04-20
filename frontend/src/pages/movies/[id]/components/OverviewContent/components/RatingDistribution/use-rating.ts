import {useEffect, useState} from "react";
import {movieSignal} from "@/signals/movie-signal";
import {WatchingStatusDistribution} from "@/types/WatchingStatusDistribution";
import {effect} from "@preact/signals-react";
import {RatingDistribution} from "@/types/RatingDistribution";

export const useRating = () => {
    const [distribution, setDistribution] = useState<RatingDistribution>(movieSignal.value.ratingDistribution);

    useEffect(() => {
        effect(() => {
            setDistribution(movieSignal.value.ratingDistribution);
        })
    }, []);

    return {distribution}
}