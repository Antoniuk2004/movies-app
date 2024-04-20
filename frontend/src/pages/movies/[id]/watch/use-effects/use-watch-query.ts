import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "next/navigation";

export const useWatchQuery = () => {
    const [movieId, setMovieId] = useState<null | number>(null);

    const params = useParams();

    useEffect(() => {
        if (params && params.id) {
            if (Array.isArray(params.id)) {
                setMovieId(parseInt(params.id[0]))
            } else if (typeof params.id === "string") {
                setMovieId(parseInt(params.id))
            }
        }
    }, [params]);

    return movieId;
}