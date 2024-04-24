import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";

export const usePlayButton = () => {
    const [isStopped, setIsStopped] = useState(videoPlayerSignal.value.isStopped);

    useEffect(() => {
        effect(() => {
            setIsStopped(videoPlayerSignal.value.isStopped);
        })
    }, []);

    return {isStopped};
}