import {getRatingStyle} from "@/pages/catalog/helpers";
import {roundNumber} from "@/pages/movies/[id]/helpers";

type MovieRatingProps = {
    rating: number;
}

const MovieRating = (props: MovieRatingProps) => {
    const {rating} = props;
    const style = getRatingStyle(rating);

    return (
        <div
            className={`absolute ${style} rounded z-10 w-7 text-center text-xs font-['Roboto'] h-fit top-3.5 left-3.5`}
        >{roundNumber(rating, 2)}</div>
    )
}

export default MovieRating;