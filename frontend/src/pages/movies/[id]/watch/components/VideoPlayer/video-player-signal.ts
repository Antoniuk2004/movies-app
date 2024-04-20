import {signal} from "@preact/signals-react";
import {movieSignal} from "@/signals/movie-signal";

type VideoPlayerData = {
    currentTime: number;
    volume: number;
    duration: number;
}

export const videoPlayerSignal = signal<VideoPlayerData>({
    currentTime: 0,
    volume: localStorage.getItem("volume") ? Number(localStorage.getItem("volume")) : 1,
    duration: movieSignal.value.duration
})