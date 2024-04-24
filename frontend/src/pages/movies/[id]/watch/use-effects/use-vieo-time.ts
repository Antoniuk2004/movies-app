import {useEffect, useRef, useState} from "react";
import {effect} from "@preact/signals-react";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";
import {changeVideoTime} from "@/pages/movies/[id]/watch/helpers";

export type VideoTime = {
    currentTime: number;
    duration: number;
}

export const useVideoTime = () => {
    const [time, setTime] = useState<null | VideoTime>({
        currentTime: 0,
        duration: 0
    });

    const video = useRef<null | HTMLVideoElement>(null);


    useEffect(() => {
        effect(() => {
            if (!videoPlayerSignal.value.videoElement) return;
            video.current = videoPlayerSignal.value.videoElement;
        })

        if (!video.current) return;
        video.current.addEventListener('timeupdate',
            () => changeVideoTime(setTime, video.current));
        video.current.removeEventListener('timeupdate',
            () => changeVideoTime(setTime, video.current));
    }, []);

    return time;
}