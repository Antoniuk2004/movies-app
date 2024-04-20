import VideoPlayerLayout from "./VideoPlayerLayout";
import {useRef} from "react";
import Wrapper from "@/common-components/Wrapper";

type PlayerProps = {
    video: string;
}

const VideoPlayer = (props: PlayerProps) => {
    const {video} = props;
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <Wrapper>
            <VideoPlayerLayout>
                <video ref={videoRef}>
                    <source src={video} type={"video/mp4"}/>
                </video>
            </VideoPlayerLayout>
        </Wrapper>
    )
}

export default VideoPlayer;