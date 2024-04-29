import MoviesGridLayout from "./MoviesGridLayout";
import MovieItem from "@/pages/catalog/components/MovieItem/MovieItem";
import {useMovies} from "@/pages/catalog/use-effects/use-movies";
import {useRouter} from "next/navigation";
import NothingFound from "@/pages/catalog/components/NothingFound/NothingFound";

const MoviesGrid = () => {
    const movies = useMovies();
    const router = useRouter();

    if (!movies) return null;
    if(movies.length === 0) return <NothingFound/>;
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