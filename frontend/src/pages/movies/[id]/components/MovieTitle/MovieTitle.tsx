import MovieTitleLayout from "@/pages/movies/[id]/components/MovieTitle/MovieTitleLayout";
import {movieSignal} from "@/signals/movie-signal";

const MovieTitle = () => {
    const {title} = movieSignal.value;

    return (
        <MovieTitleLayout>
            <span className="line-clamp-2">{title}</span>
        </MovieTitleLayout>
    )
}

export default MovieTitle;