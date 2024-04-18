import GenreElementLayout from "./GenreElementLayout";
import {Genre} from "@/types/Genre";

type GenreProps = {
    genre: Genre;
}

const GenreElement = (props: GenreProps) => {
    const {genre} = props;

    return (
        <GenreElementLayout>
            <span>{genre.title}</span>
        </GenreElementLayout>
    )
}

export default GenreElement;