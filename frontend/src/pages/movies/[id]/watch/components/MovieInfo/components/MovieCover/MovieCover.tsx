import MovieCoverLayout from "./MovieCoverLayout";
import Image from "next/image";
import {movieSignal} from "@/signals/movie-signal";

const MovieCover = () => {
    const coverSrc = movieSignal.value.cover;

    return (
        <MovieCoverLayout>
            <Image
                className={"rounded-md object-cover object-center w-12.5 h-17.5"}
                src={coverSrc}
                alt={"movie-cover"}
                width={50}
                height={70}
            />
        </MovieCoverLayout>
    )
}

export default MovieCover;