import {useEffect, useState} from "react";
import {moviesRequest} from "@/api/movies-request";
import {Movie} from "@/types/Movie";
import {FilterParams} from "@/types/FilterParams";
import {Sort} from "@/types/Sort";
import {getKeyByValue} from "@/pages/catalog/helpers";
import {getImage} from "@/api/image-request";
import {catalogSignal} from "@/pages/catalog/catalog-signal";

export const useInitialMovies = () => {
    const [movies, setMovies] = useState<Movie[] | null>(null);

    useEffect(() => {
        const getMovies = async () => {
            const filterParams = {
                order: getKeyByValue(Sort, Sort.ASC),
                orderType: getKeyByValue(Sort, Sort.RATING)
            }

            let movies: Movie[] = await moviesRequest(filterParams as FilterParams);

            for (let movie of movies) {
                const src = await getImage('covers', String(movie.movieId));
                movie.cover = src as string;
            }

            catalogSignal.value = movies;
            setMovies(movies)
        }

        getMovies();
    }, []);

    return movies;
}