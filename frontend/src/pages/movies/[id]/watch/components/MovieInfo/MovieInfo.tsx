import MovieInfoLayout from "./MovieInfoLayout";
import {movieSignal} from "@/signals/movie-signal";
import MovieCover from "@/pages/movies/[id]/watch/components/MovieInfo/components/MovieCover/MovieCover";
import SideLayout from "@/pages/movies/[id]/watch/components/SideLayout";
import Wrapper from "@/common-components/Wrapper";
import MoveInfoContentLayout from "@/pages/movies/[id]/watch/components/MovieInfo/MoveInfoContentLayout";
import Title from "@/pages/movies/[id]/watch/components/MovieInfo/components/Title/Title";
import ColumnSeparator from "@/common-components/ColumnSeparator";
import WatchingStatusSelect
    from "@/pages/movies/[id]/watch/components/MovieInfo/components/WatchingStatusSelect/WatchingStatusSelect";
import RateButton from "@/pages/movies/[id]/watch/components/RateButton/RateButton";

const MovieInfo = () => {
    const movieData = movieSignal.value;

    if (!movieData) return null;
    return (
        <MovieInfoLayout>
            <Wrapper>
                <MoveInfoContentLayout>
                    <SideLayout>
                        <MovieCover/>
                        <ColumnSeparator gap={'gap-y-1'}>
                            <Title/>
                            <RateButton/>
                        </ColumnSeparator>
                    </SideLayout>
                    <div className="responsive:hidden z-20">
                        <WatchingStatusSelect/>
                    </div>
                </MoveInfoContentLayout>
            </Wrapper>
        </MovieInfoLayout>
    )
}

export default MovieInfo;