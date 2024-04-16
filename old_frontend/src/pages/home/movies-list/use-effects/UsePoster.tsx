import {Dispatch, SetStateAction, useEffect} from "react";
import {Movie} from "@/components/movie";
import {getPoster} from "@/pages/home/movies-list/helpers";
import {PostersMap} from "@/pages/home/movies-list/PostersMap";

export const UsePoster = (movies: Array<Movie>, jwt: string, setPosters: Dispatch<SetStateAction<PostersMap>>) => {
    useEffect(() => {
        if(!movies) return;

        const getPosterAsync = async () => {
            for (let movie of movies) {
                if (movie.poster) {
                    getPoster(movie, jwt, setPosters);
                }
            }
        }

        if (movies.length != 0) {
            getPosterAsync();
        }
    }, [movies]);
}