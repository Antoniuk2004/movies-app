import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";
import {useEffect, useRef} from "react";
import {effect} from "@preact/signals-react";
import {handlePauseInPIPMode, handlePlayInPIPMode} from "@/pages/movies/[id]/watch/handlers";

export const usePIPMode = () => {
    const areEventsSet = useRef(false);

    useEffect(() => {

        effect(() => {
            const {videoElement} = videoPlayerSignal.value;
            if (!videoElement || areEventsSet.current) return;

            areEventsSet.current = true;
            videoElement.addEventListener("pause", () => handlePauseInPIPMode());
            videoElement.addEventListener("play", () => handlePlayInPIPMode());

            return () => {
                videoElement.removeEventListener("pause", () => handlePauseInPIPMode());
                videoElement.removeEventListener("play", () => handlePlayInPIPMode());
            }
        })
    }, []);





}