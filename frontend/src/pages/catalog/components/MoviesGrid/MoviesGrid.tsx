import MoviesGridLayout from "./MoviesGridLayout";
import MovieItem from "@/pages/catalog/components/MovieItem/MovieItem";
import {useMovies} from "@/pages/catalog/use-movies";
import {useRouter} from "next/navigation";

const MoviesGrid = () => {
    const movies = useMovies();
    const router = useRouter();

    if (!movies) return null;
    return (
        <MoviesGridLayout>
            {movies.map((movie, index) => (
                <MovieItem
                    router={router}
                    movie={movie}
                    key={index}
                />
            ))}
        </MoviesGridLayout>
    )
}

export default MoviesGrid;