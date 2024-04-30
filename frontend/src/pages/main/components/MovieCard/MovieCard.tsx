import MovieCardLayout from "./MovieCardLayout";
import {Movie} from "@/types/Movie";
import MovieTitleLayout from "@/pages/main/components/MovieTitleLayout";
import Image from "next/image";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type MovieCardProps = {
    movie: Movie;
    router: AppRouterInstance;
}

const MovieCard = (props: MovieCardProps) => {
    const {movie, router} = props;

    return (
        <MovieCardLayout id={movie.movieId} router={router}>
            <Image
                draggable={false}
                priority={true}
                width={135}
                height={190}
                className={"object-center w-[135px] h-[190px] drop-shadow-md object-cover rounded-md"}
                src={movie.cover}
                alt={movie.title}
            />
            <MovieTitleLayout>
                <span>{movie.title}</span>
            </MovieTitleLayout>
        </MovieCardLayout>
    )
}

export default MovieCard;