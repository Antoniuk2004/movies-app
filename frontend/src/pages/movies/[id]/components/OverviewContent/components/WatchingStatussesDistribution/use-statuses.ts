import {useEffect, useState} from "react";
import {movieSignal} from "@/signals/movie-signal";
import {WatchingStatusDistribution} from "@/types/WatchingStatusDistribution";
import {effect} from "@preact/signals-react";

export const useStatuses = () => {
    const [distribution, setDistribution] = useState<WatchingStatusDistribution>(movieSignal.value.watchingStatusDistribution);

    useEffect(() => {
        effect(() => {
            setDistribution(movieSignal.value.watchingStatusDistribution);
        })
    }, []);

    return {distribution}
}