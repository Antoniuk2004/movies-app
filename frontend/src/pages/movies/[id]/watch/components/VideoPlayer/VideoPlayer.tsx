import VideoPlayerLayout from "./VideoPlayerLayout";
import Wrapper from "@/common-components/Wrapper";
import {setVideoElement} from "@/pages/movies/[id]/watch/helpers";
import {useVideoPlayerKeyboard} from "@/pages/movies/[id]/watch/use-effects/use-video-player-keyboard";

type PlayerProps = {
    video: string;
}

const VideoPlayer = (props: PlayerProps) => {
    const {video} = props;
    useVideoPlayerKeyboard();

    return (
        <Wrapper>
            <VideoPlayerLayout>
                <video className={"w-full h-full"} ref={(ref) => setVideoElement(ref)}>
                    <source src={video} type={"video/mp4"}/>
                </video>
            </VideoPlayerLayout>
        </Wrapper>
    )
}

export default VideoPlayer;