import WatchingPageLayout from "@/pages/movies/[id]/watch/WatchingPageLayout";
import {useVideo} from "@/pages/movies/[id]/watch/use-effects/use-video";
import {useRef} from "react";
import PlayerLayout from "@/pages/movies/[id]/watch/components/Player/PlayerLayout";
import Wrapper from "@/common-components/Wrapper";
import Header from "@/common-components/Header/Header";
import MovieInfo from "@/pages/movies/[id]/watch/components/MovieInfo/MovieInfo";

const WatchingPage = () => {
    const {video} = useVideo();
    const videoRef = useRef<HTMLVideoElement>(null);

    if (!video) return null;
    return (
        <WatchingPageLayout>
            <Header/>
            <Wrapper>
                <MovieInfo/>
                <PlayerLayout>
                    <video ref={videoRef}>
                        <source src={video} type={"video/mp4"}/>
                    </video>
                </PlayerLayout>
                <button onClick={() => videoRef && videoRef.current.play()}>Play</button>
            </Wrapper>
        </WatchingPageLayout>
    )
}

export default WatchingPage;