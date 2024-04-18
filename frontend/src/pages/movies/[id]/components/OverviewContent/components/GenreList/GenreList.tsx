import GenreListLayout from "./GenreListLayout";
import {movieSignal} from "@/signals/movie-signal";
import {Fragment} from "react";
import GenreElement from "@/pages/movies/[id]/components/OverviewContent/components/GenreElement/GenreElement";

const GenreList = () => {
    const {genres} = movieSignal.value;

    return (
        <GenreListLayout>
            <Fragment>
                {genres.map((genre, index) => (
                    <GenreElement genre={genre} key={index}/>
                ))}
            </Fragment>
        </GenreListLayout>
    )
}

export default GenreList;