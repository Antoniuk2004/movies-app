import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/video-player-signal";

type VolumeData = {
    volume: number;
    isMuted: boolean;
}

export const useVolume = () => {
    const [volumeData, setVolumeData] = useState<VolumeData>({
        volume: videoPlayerSignal.value.volume,
        isMuted: videoPlayerSignal.value.isMuted
    });

    useEffect(() => {
        let volume = 1;
        const volumeFromStorage = localStorage.getItem("volume");
        if (volumeFromStorage) volume = Number(volumeFromStorage);

        let isMuted = false;
        const isMutedFromStorage = localStorage.getItem("isMuted");
        if (isMutedFromStorage) isMuted = JSON.parse(isMutedFromStorage);

        if (isMuted) videoPlayerSignal.value.videoElement.volume = 0;
        else videoPlayerSignal.value.videoElement.volume = volume;

        videoPlayerSignal.value = {
            ...videoPlayerSignal.value,
            volume,
            isMuted
        }

        effect(() => {
            setVolumeData(videoPlayerSignal.value);
        })
    }, []);

    return volumeData;
}