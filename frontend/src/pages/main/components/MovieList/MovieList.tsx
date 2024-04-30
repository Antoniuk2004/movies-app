import MovieListLayout from "./MovieListLayout";
import {Movie} from "@/types/Movie";
import PersonCard
    from "@/pages/movies/[id]/components/OverviewContent/components/People/components/PersonCard/PersonCard";
import Slider from "@/common-components/Slider/Slider";
import SmallTitleLayout from "@/common-components/SmallTitleLayout";
import MovieCard from "@/pages/main/components/MovieCard/MovieCard";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type MoviesListProps = {
    movies: Movie[]
    title: string
    router: AppRouterInstance;
}

const MovieList = (props: MoviesListProps) => {
    const {movies, title, router} = props;

    return (
        <MovieListLayout>
            <SmallTitleLayout>
                <span>{title}</span>
            </SmallTitleLayout>
            <Slider>
                {movies.map((movie, index) =>
                    <MovieCard router={router} movie={movie} key={index}/>
                )}
            </Slider>
        </MovieListLayout>
    )
}

export default MovieList;