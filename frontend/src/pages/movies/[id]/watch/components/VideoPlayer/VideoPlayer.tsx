import VideoPlayerLayout from "./VideoPlayerLayout";
import {useRef} from "react";
import Wrapper from "@/common-components/Wrapper";
import {setVideoElement} from "@/pages/movies/[id]/watch/helpers";

type PlayerProps = {
    video: string;
}

const VideoPlayer = (props: PlayerProps) => {
    const {video} = props;

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