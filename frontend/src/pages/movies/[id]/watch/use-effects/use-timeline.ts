import {useEffect, useState} from "react";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";
import {effect} from "@preact/signals-react";
import {timelineSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/timeline-signal";
import {blackScreenSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/black-screen-signal";
import {playPause} from "@/pages/movies/[id]/watch/helpers";

export const useTimeline = () => {
    const [percentage, setPercentage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const video = videoPlayerSignal.value.videoElement;

        const handleTimeUpdate = () => {
            const percentage = video.currentTime / video.duration * 100;
            setPercentage(percentage);

            blackScreenSignal.value = Math.floor(percentage) === 100;
            if (Math.floor(percentage) === 100) playPause();
        }

        video.addEventListener("timeupdate", handleTimeUpdate);

        effect(() => {
            setPercentage(timelineSignal.value);
            const newTimeValue = timelineSignal.value / 100 * video.duration;

            video.currentTime = Number.isFinite(newTimeValue)
                ? newTimeValue : 0;
        })

        return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }, []);

    return {percentage, isHovered, setIsHovered};
}