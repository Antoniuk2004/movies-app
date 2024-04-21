import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/video-player-signal";
import {MutableRefObject} from "react";

export const setVideoElement = (ref: HTMLVideoElement | null) => {
    if (!ref) return;

    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        videoElement: ref
    }
}

export const toggleMute = () => {
    const prevValues = videoPlayerSignal.value.isMuted;

    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isMuted: !prevValues
    }

    localStorage.setItem("isMuted", JSON.stringify(!prevValues));
    videoPlayerSignal.value.videoElement.volume = prevValues ?
        videoPlayerSignal.value.volume : 0;
}

export const setVolume = (e: MouseEvent | React.MouseEvent<HTMLDivElement | MouseEvent>,
                          sliderRef: MutableRefObject<HTMLDivElement>) => {
    const element = sliderRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const volume = Math.max(0, Math.min(1, (e.clientX - rect.left)
        / element.clientWidth));
    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isMuted: volume === 0,
        volume
    }

    localStorage.setItem("volume", volume.toString());
    videoPlayerSignal.value.videoElement.volume = volume;

    if (volume !== 0) localStorage.setItem("isMuted", JSON.stringify(false));
    else localStorage.setItem("isMuted", JSON.stringify(true));
}

export const playPause = () => {
    if (videoPlayerSignal.value.isStopped) {
        videoPlayerSignal.value.videoElement.play();

        videoPlayerSignal.value = {
            ...videoPlayerSignal.value,
            isStopped: false
        }
    } else {
        videoPlayerSignal.value.videoElement.pause();

        videoPlayerSignal.value = {
            ...videoPlayerSignal.value,
            isStopped: true
        }
    }
}

export const togglePictureInPicture = () => {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();

        videoPlayerSignal.value = {
            ...videoPlayerSignal.value,
            isPictureInPictureOpened: false,
        }
    } else {
        videoPlayerSignal.value.videoElement.requestPictureInPicture();

        videoPlayerSignal.value = {
            ...videoPlayerSignal.value,
            isFullScreen: false,
            isPictureInPictureOpened: true
        }
    }
}

export const toggleFullScreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();

        videoPlayerSignal.value = {
            ...videoPlayerSignal.value,
            isFullScreen: false
        }
    } else {
        document.documentElement.requestFullscreen();

        videoPlayerSignal.value = {
            ...videoPlayerSignal.value,
            isFullScreen: true
        }
    }
}