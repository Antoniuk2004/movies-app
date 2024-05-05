import {useVideo} from "@/pages/movies/[id]/watch/use-effects/use-video";
import MovieInfo from "@/pages/movies/[id]/watch/components/MovieInfo/MovieInfo";
import {useWatchMovieData} from "@/pages/movies/[id]/watch/use-effects/use-watch-movie-data";
import {useWatchQuery} from "@/pages/movies/[id]/watch/use-effects/use-watch-query";
import WatchingHeader from "@/pages/movies/[id]/watch/components/WatchingHeader/WatchingHeader";
import CommentsSection from "@/pages/movies/[id]/watch/components/CommentsSection/CommentsSection";
import WatchingPageLayout from "@/pages/movies/[id]/watch/WatchingPageLayout";
import VideoPlayer from "@/pages/movies/[id]/watch/components/VideoPlayer/VideoPlayer";
import Loader from "@/common-components/Loader/Loader";
import BottomMenu from "@/common-components/BottomMenu/BottomMenu";

const WatchingPage = () => {
    const movieId = useWatchQuery();
    const movieData = useWatchMovieData(movieId);
    const {video} = useVideo(movieData?.moviePath);

    if (!video) return <Loader/>;
    return (
        <>
            <WatchingPageLayout>
                <WatchingHeader/>
                <MovieInfo/>
                <VideoPlayer video={video}/>
                <CommentsSection isMobile={false}/>
            </WatchingPageLayout>
            <CommentsSection isMobile={true}/>
            <BottomMenu/>
        </>
    )
}

export default WatchingPage;