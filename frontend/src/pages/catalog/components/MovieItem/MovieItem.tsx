import MovieItemLayout from "./MovieItemLayout";
import { Movie } from "@/types/Movie";
import Image from "next/image";
import MovieTitle from "@/pages/catalog/components/MovieTitle/MovieTitle";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type MovieItemProps = {
    movie: Movie;
    router: AppRouterInstance;
}

const MovieItem = (props: MovieItemProps) => {
    const { movie, router} = props;

    return (
        <MovieItemLayout router={router} id={movie.movieId}>
            <div className="aspect-w-2 aspect-h-3">
                <Image
                    className={"rounded-md object-center object-cover"}
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
