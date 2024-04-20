import MovieAppLayout from "@/pages/movies/[id]/MovieAppLayout";
import Header from "@/common-components/Header/Header";
import {useMediaQuery} from "@/pages/movies/[id]/use-effects/use-media-query";
import Wrapper from "@/common-components/Wrapper";
import Banner from "@/pages/movies/[id]/components/Banner/Banner";
import Rating from "@/pages/movies/[id]/components/Rating/Rating";
import Cover from "@/pages/movies/[id]/components/Cover/Cover";
import MovieTitle from "@/pages/movies/[id]/components/MovieTitle/MovieTitle";
import MediaContent from "@/pages/movies/[id]/components/MediaContent/MediaContent";
import WatchBlock from "@/pages/movies/[id]/components/WatchBlock/WatchBlock";
import MediaInfo from "@/pages/movies/[id]/components/MediaInfo/MediaInfo";
import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";
import {useMovieData} from "@/pages/movies/[id]/use-effects/use-movie-data";
import RateModal from "@/pages/movies/[id]/components/RateModal/RateModal";

const MoviePage = () => {
    movieQuerySignal.value = useMediaQuery();
    const {movieId, selectedValue} = movieQuerySignal.value;
    const {movieData} = useMovieData(movieId, selectedValue);

    if (!movieData) return null;
    return (
        <>
            <RateModal/>
            <Header/>
            <Wrapper>
                <MovieAppLayout>
                    <Banner/>
                    <Cover/>
                    <MovieTitle/>
                    <Rating/>
                    <MediaInfo/>
                    <MediaContent/>
                    <WatchBlock/>
                </MovieAppLayout>
            </Wrapper>
        </>
    )
}

export default MoviePage;