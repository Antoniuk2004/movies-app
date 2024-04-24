import {useEffect, useState} from "react";
import {moviesRequest} from "@/api/movies-request";
import {Movie} from "@/types/Movie";

export const useMovies = () => {
    const [movies, setMovies] = useState<null | Movie[]>(null);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await moviesRequest();
            setMovies(movies);
        }

        getMovies();
    }, []);

    return movies;
}