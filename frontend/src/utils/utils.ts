import {Movie} from "@/types/Movie";
import {getImage} from "@/api/image-request";

export const setMovieCovers = async (movies: Movie[]) => {
    for (let movie of movies) {
        const id = String(movie.movieId);
        movie.cover = movie.cover ? await getImage('covers', id) as string
            : '/images/no-image.jpg';
    }

    return movies;
}