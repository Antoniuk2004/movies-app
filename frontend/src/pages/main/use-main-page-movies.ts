import {useEffect, useState} from "react";
import {mainPageMoviesRequest} from "@/api/main-page-movies-request";
import {Movie} from "@/types/Movie";
import {setMovieCovers} from "@/utils/utils";

type MainPageMovies = {
    recentMovies: Movie[];
    popularMovies: Movie[];
    recommendedMovies: Movie[];
}

export const useMainPageMovies = () => {
    const [mainPageMovies, setMainPageMovies] = useState<null | MainPageMovies>(null);

    const getMovies = async () => {
        let data = await mainPageMoviesRequest();

        setMainPageMovies({
            recentMovies: await setMovieCovers(data.recentMovies),
            popularMovies: await setMovieCovers(data.popularMovies),
            recommendedMovies: await setMovieCovers(data.recommendedMovies)
        });
    }

    useEffect(() => {
        getMovies();
    }, []);

    return mainPageMovies;
}