import {signal} from "@preact/signals-react";
import {movieSignal} from "@/signals/movie-signal";

type VideoPlayerData = {
    volume: number | null;
    isStopped: boolean;
    isMuted: boolean | null;
    videoElement: HTMLVideoElement | null;
    isPictureInPictureOpened: boolean;
    isFullScreen: boolean;
}

export const videoPlayerSignal = signal<VideoPlayerData>({
    volume: null,
    isStopped: true,
    isMuted: null,
    videoElement: null,
    isPictureInPictureOpened: false,
    isFullScreen: false
})