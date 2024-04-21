import {useVideo} from "@/pages/movies/[id]/watch/use-effects/use-video";
import MovieInfo from "@/pages/movies/[id]/watch/components/MovieInfo/MovieInfo";
import {useWatchMovieData} from "@/pages/movies/[id]/watch/use-effects/use-watch-movie-data";
import {useWatchQuery} from "@/pages/movies/[id]/watch/use-effects/use-watch-query";
import WatchingHeader from "@/pages/movies/[id]/watch/components/WatchingHeader/WatchingHeader";
import CommentsSection from "@/pages/movies/[id]/watch/components/CommentsSection/CommentsSection";
import WatchingPageLayout from "@/pages/movies/[id]/watch/WatchingPageLayout";
import VideoPlayer from "@/pages/movies/[id]/watch/components/VideoPlayer/VideoPlayer";

const WatchingPage = () => {
    const movieId = useWatchQuery();
    const movieData = useWatchMovieData(movieId);
    const {video} = useVideo(movieData?.moviePath);

    if (!video) return null;
    return (
        <WatchingPageLayout>
            <WatchingHeader/>
            <MovieInfo/>
            <VideoPlayer video={video}/>
            <CommentsSection/>
        </WatchingPageLayout>
    )
}

export default WatchingPage;