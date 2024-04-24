import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";

export const useFullscreenMode = () => {
    const [isFullscreen, setIsFullscreen] =
        useState<boolean>(videoPlayerSignal.value.isFullScreen);

    useEffect(() => {
        effect(() => {
            setIsFullscreen(videoPlayerSignal.value.isFullScreen);
        })
    }, []);

    return {isFullscreen};
}