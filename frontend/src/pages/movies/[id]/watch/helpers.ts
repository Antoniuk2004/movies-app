import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {timelineSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/timeline-signal";
import {VideoTime} from "@/pages/movies/[id]/watch/use-effects/use-vieo-time";
import {inactiveSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/inactive-signal";

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

export const closeFullScreen = () => {
    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isFullScreen: false
    }
}

export const setTime = (e: MouseEvent | React.MouseEvent<HTMLDivElement | MouseEvent>,
                        sliderRef: MutableRefObject<HTMLDivElement>) => {
    const element = sliderRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    timelineSignal.value = Math.max(0, Math.min(1, (e.clientX - rect.left)
        / element.clientWidth) * 100);
}

export const moveTime = (seconds: number) => {
    videoPlayerSignal.value.videoElement.currentTime += seconds;
}

export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

export const changeVideoTime = (setTime: Dispatch<SetStateAction<VideoTime>>,
                                video: HTMLVideoElement) =>
    setTime({
        currentTime: video.currentTime,
        duration: video.duration
    })

export const changeVolume = (volume: number) => {
    let newVolume = videoPlayerSignal.value.volume + volume;
    if (newVolume < 0) newVolume = 0;
    if (newVolume > 1) newVolume = 1;

    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isMuted: newVolume === 0,
        volume: newVolume,
    }

    videoPlayerSignal.value.videoElement.volume = newVolume;
    localStorage.setItem("volume", newVolume.toString());
    localStorage.setItem("isMuted", JSON.stringify(newVolume === 0));
}


export const showControl = () => {
    let mouseTimer = inactiveSignal.value.mouseTimer;

    if (mouseTimer) {
        clearTimeout(mouseTimer);
    }

    inactiveSignal.value = {
        ...inactiveSignal.value,
        value: false,
        mouseTimer: null // Clear mouseTimer
    };

    inactiveSignal.value.mouseTimer = setTimeout(() => {
        if (videoPlayerSignal.value.isStopped) return;

        inactiveSignal.value = {
            ...inactiveSignal.value,
            value: true,
            mouseTimer: null
        };
    }, 2500);
};

export const getTimeFromPercents = (percentage: number) => {
    const {videoElement} = videoPlayerSignal.value;
    if (!videoElement) return "0:00";
    return formatTime(videoElement.duration * percentage / 100);
}

export const roundNumber = (num: number, digits: number) => {
    return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
}