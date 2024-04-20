import {Dispatch, SetStateAction, useEffect, useState} from "react";
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
import {FetchStatus} from "@/types/FetchStatus";

export const useMovieData = (id: number | null, selectedValue: TabSelection | null) => {
    const [movieData, setMovieData] = useState<Movie | null>(null);

    useEffect(() => {
        if (!id || !selectedValue) return;

        const getData = async () => {
            const fetchStatus = findFetchStatus(id);

            console.log(fetchStatus);

            switch (fetchStatus) {
                case FetchStatus.NotFetched:
                    await getMovie(id, setMovieData);
                    break;
                case FetchStatus.PartiallyFetched:
                    await getAdditionalData(id, setMovieData);
                    break;
                case FetchStatus.FullyFetched:
                    setMovieData(movieSignal.value);
                    break;
            }
        }

        getData();
    }, [id, selectedValue]);

    return movieData;
}

const getMovie = async (id: number, setMovieData: Dispatch<SetStateAction<Movie | null>>) => {
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

export const findFetchStatus = (id: number) => {
    if (movieSignal.value.movieId === id) {
        if (movieSignal.value.banner.length < 20) {
            return FetchStatus.PartiallyFetched
        } else return FetchStatus.FullyFetched;
    } else return FetchStatus.NotFetched;
}


export const getAdditionalData = async (id: number, setMovieData: Dispatch<SetStateAction<Movie | null>>) => {
    const {
        actors, directors, totalWatchingStatuses, totalRates,
        watchingStatusDistribution, ratingDistribution
    } = movieSignal.value;

    movieSignal.value = {
        ...movieSignal.value,
        banner: await getImage(ImageType.Banner, id.toString()) as string,
        actors: await getImages(actors, "actors"),
        directors: await getImages(directors, "directors"),
        totalWatchingStatuses:
            calcTotalRates(watchingStatusDistribution),
        watchingStatusDistribution:
            addValuesToWatchingStatusDistribution(watchingStatusDistribution,
                totalWatchingStatuses),
        ratingDistribution: addValuesToRatingDistribution(ratingDistribution,
            totalRates)
    }

    setMovieData(movieSignal.value);
}