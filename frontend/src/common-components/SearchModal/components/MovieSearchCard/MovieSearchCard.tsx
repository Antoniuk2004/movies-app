import MovieSearchCardLayout from "./MovieSearchCardLayout";
import {Movie} from "@/types/Movie";
import Image from "next/image";
import MovieCardInfo
    from "@/common-components/SearchModal/components/MovieSearchCard/components/MovieCardInfo/MovieCardInfo";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type MovieSearchCard = {
    movie: Movie;
    router: AppRouterInstance;
}

const MovieSearchCard = (props: MovieSearchCard) => {
    const {movie, router} = props;

    return (
        <MovieSearchCardLayout router={router} id={movie.movieId}>
            <Image
                className={"rounded-md w-[53.3px] h-[80px] object-cover object-center"}
                src={movie.cover}
                width={53.3}
                height={80}
                alt={movie.title}
            />
            <MovieCardInfo movie={movie}/>
        </MovieSearchCardLayout>
    )
}

export default MovieSearchCard;