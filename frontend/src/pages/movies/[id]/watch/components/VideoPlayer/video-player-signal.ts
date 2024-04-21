import {signal} from "@preact/signals-react";
import {movieSignal} from "@/signals/movie-signal";

type VideoPlayerData = {
    currentTime: number;
    volume: number | null;
    duration: number;
    isStopped: boolean;
    isMuted: boolean | null;
    videoElement: HTMLVideoElement | null;
    isPictureInPictureOpened: boolean;
    isFullScreen: boolean;
}

export const videoPlayerSignal = signal<VideoPlayerData>({
    currentTime: 0,
    volume: null,
    duration: movieSignal.value.duration,
    isStopped: true,
    isMuted: null,
    videoElement: null,
    isPictureInPictureOpened: false,
    isFullScreen: false
})