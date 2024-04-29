import {useEffect, useState} from "react";
import {moviesRequest} from "@/api/movies-request";
import {Movie} from "@/types/Movie";
import {FilterParams} from "@/types/FilterParams";
import {Sort} from "@/types/Sort";
import {getKeyByValue} from "@/pages/catalog/helpers";
import {getImage} from "@/api/image-request";
import {catalogSignal} from "@/pages/catalog/signals/catalog-signal";
import {useRouter} from "next/router";
import {parseFilterQuery} from "@/pages/movies/[id]/helpers";

export const useInitialMovies = () => {
    const [movies, setMovies] = useState<Movie[] | null>(null);

    const router = useRouter();

    useEffect(() => {
        const getMovies = async () => {
            if(Object.keys(router.query).length === 0) return;
            const filterParams = parseFilterQuery(router.query)

            let movies: Movie[] = await moviesRequest(filterParams as FilterParams);

            for (let movie of movies) {
                const src = await getImage('covers', String(movie.movieId));
                movie.cover = src as string;
            }

            catalogSignal.value = movies;
            setMovies(movies)
        }

        getMovies();
    }, [router]);

    return movies;
}