import {useEffect, useState} from "react";
import {Movie} from "@/types/Movie";
import {movieSignal} from "@/signals/movie-signal";
import {getMovieById} from "@/api/movie-by-id-request";
import {getImage} from "@/api/image-request";
import {ImageType} from "@/types/ImageType";
import {
    calcTotalRates,
    getImages,
    roundNumber
} from "@/pages/movies/[id]/helpers";
import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";

export const useWatchMovieData = (id: number) => {
    const [movieData, setMovieData] = useState<Movie | null>(null);

    useEffect(() => {
        if (!id) return;

        if (movieSignal.value.movieId === id) {
            setMovieData(movieSignal.value);
            return;
        }

        const getMovie = async () => {
            const {data, status} = await getMovieById(id);

            if (status === 200) {
                data.cover = await getImage(ImageType.Cover, id.toString());
                data.rating = roundNumber(data.rating, 2);
                data.totalRates = calcTotalRates(data.ratingDistribution);

                movieSignal.value = data;
                setMovieData(data);

            } else if (status == 401) {
                movieQuerySignal.value.router.push('/');
            }
        }

        getMovie();
    }, [id]);

    return movieData;
}