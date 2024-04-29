import MovieItemLayout from "./MovieItemLayout";
import {Movie} from "@/types/Movie";
import Image from "next/image";
import MovieTitle from "@/pages/catalog/components/MovieTitle/MovieTitle";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import MovieRating from "@/pages/catalog/components/MovieItem/components/MovieRating";
import WatchingStatusDisplay from "@/pages/catalog/components/MovieItem/components/WatchingStatusDisplay";

type MovieItemProps = {
    movie: Movie;
    router: AppRouterInstance;
}

const MovieItem = (props: MovieItemProps) => {
    const {movie, router} = props;

    return (
        <MovieItemLayout router={router} id={movie.movieId}>
            <MovieRating rating={movie.rating}/>
            <WatchingStatusDisplay status={movie.watchingStatus}/>
            <div className="aspect-w-2 aspect-h-3">
                <Image
                    className={"rounded-md object-center object-cover drop-shadow-md"}
                    width={160}
                    height={230}
                    src={movie.cover}
                    alt={movie.title}
                    loading={"lazy"}
                />
            </div>
            <MovieTitle title={movie.title}/>
        </MovieItemLayout>
    )
}

export default MovieItem;
