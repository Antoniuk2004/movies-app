import VideoTimeLayout from "./VideoTimeLayout";
import {formatTime} from "@/pages/movies/[id]/watch/helpers";
import {useVideoTime} from "@/pages/movies/[id]/watch/use-effects/use-vieo-time";

const VideoTime = () => {
    const {currentTime, duration} = useVideoTime();

    return (
        <VideoTimeLayout>
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span className={"opacity-70"}>{formatTime(duration)}</span>
        </VideoTimeLayout>
    )
}

export default VideoTime;