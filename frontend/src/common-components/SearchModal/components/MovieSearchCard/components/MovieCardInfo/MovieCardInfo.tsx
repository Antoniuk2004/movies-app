import MovieCardInfoLayout from "./MovieCardInfoLayout";
import {Movie} from "@/types/Movie";
import {FaStar} from "react-icons/fa6";
import BottomInfoLayout from "@/common-components/SearchModal/components/MovieSearchCard/components/BottomInfoLayout";
import MovieCardTitle from "@/common-components/SearchModal/components/MovieSearchCard/components/MovieCardTitle";

type MovieCardInfoProps = {
    movie: Movie;
}

const MovieCardInfo = (props: MovieCardInfoProps) => {
    const {movie} = props;

    return (
        <MovieCardInfoLayout>
            <MovieCardTitle title={movie.title}/>
            <BottomInfoLayout>
                <FaStar className={"mb-0.5 text-yellow-400 mr-0.5"}/>
                <span className={"mr-2"}>{movie.rating}</span>
                <span className={"font-['Roboto']"}>{movie.releaseYear}</span>
            </BottomInfoLayout>
        </MovieCardInfoLayout>
    )
}

export default MovieCardInfo;