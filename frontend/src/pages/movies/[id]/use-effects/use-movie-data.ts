import {useEffect, useState} from "react";
import {TabSelection} from "@/types/TabSelection";
import {getMovieById} from "@/api/movie-by-id-request";
import {Movie} from "@/types/Movie";
import {movieSignal} from "@/signals/movie-signal";
import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";
import {getImage} from "@/api/image-request";
import {ImageType} from "@/types/ImageType";
import {
    addValuesToRatingDistribution,
    addValuesToWatchingStatusDistribution,
    calcTotalRates,
    getImages,
    roundNumber
} from "@/pages/movies/[id]/helpers";

export const useMovieData = (id: number | null, selectedValue: TabSelection | null) => {
    const [movieData, setMovieData] = useState<Movie | null>(null);

    useEffect(() => {
        if (!id || !selectedValue) return;

        if (movieSignal.value.movieId === id) {
            setMovieData(movieSignal.value);
            return;
        }

        const getMovie = async () => {
            const {data, status} = await getMovieById(id);

            if (status === 200) {
                data.cover = await getImage(ImageType.Cover, id.toString());
                data.banner = await getImage(ImageType.Banner, id.toString());
                data.rating = roundNumber(data.rating, 2);
                data.actors = await getImages(data.actors, "actors");
                data.directors = await getImages(data.directors, "directors");
                data.totalRates = calcTotalRates(data.ratingDistribution);
                data.totalWatchingStatuses =
                    calcTotalRates(data.watchingStatusDistribution);
                data.watchingStatusDistribution = addValuesToWatchingStatusDistribution(data.watchingStatusDistribution,
                    data.totalWatchingStatuses)
                data.ratingDistribution = addValuesToRatingDistribution(data.ratingDistribution,
                    data.totalRates);

                movieSignal.value = data;
                setMovieData(data);

            } else if (status == 401) {
                movieQuerySignal.value.router.push('/');
            }
        }

        getMovie();
    }, [id, selectedValue]);

    return {movieData}
}