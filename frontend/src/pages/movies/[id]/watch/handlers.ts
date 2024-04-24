import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";
import {
    changeVolume,
    closeFullScreen,
    moveTime,
    playPause,
    setTime,
    setVolume,
    showControl
} from "@/pages/movies/[id]/watch/helpers";
import {inactiveSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/inactive-signal";

export const handleMouseUp = (isDraggingRef: MutableRefObject<boolean>) => {
    isDraggingRef.current = false;
};

export const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                isDraggingRef: MutableRefObject<boolean>) => {
    isDraggingRef.current = true;
    e.preventDefault();
};

export const handleVolumeMouseMove = (e: MouseEvent,
                                      isDraggingRef: MutableRefObject<boolean>,
                                      sliderRef: MutableRefObject<null | HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    setVolume(e, sliderRef);
};

export const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                  sliderRef: MutableRefObject<null | HTMLDivElement>) => {
    setVolume(e, sliderRef);
}

export const handlePauseInPIPMode = () => {
    if (!videoPlayerSignal.value.isPictureInPictureOpened) return;

    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isStopped: true
    }
}

export const handlePlayInPIPMode = () => {
    if (!videoPlayerSignal.value.isPictureInPictureOpened) return;

    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isStopped: false
    }
}

export const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                    sliderRef: MutableRefObject<null | HTMLDivElement>) => {
    setTime(e, sliderRef);
}

export const handleTimelineMouseMove = (e: MouseEvent,
                                        isDraggingRef: MutableRefObject<boolean>,
                                        sliderRef: MutableRefObject<null | HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    setTime(e, sliderRef);
};

export const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
        case 'Space':
            e.preventDefault();
            showControl();
            playPause();
            break;
        case 'ArrowRight':
            e.preventDefault();
            showControl();
            moveTime(10);
            break;
        case 'ArrowLeft':
            e.preventDefault();
            showControl();
            moveTime(-10);
            break;
        case 'ArrowUp':
            e.preventDefault();
            showControl();
            changeVolume(0.1);
            break;
        case 'ArrowDown':
            e.preventDefault();
            showControl();
            changeVolume(-0.1);
            break;
    }
}

export const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
        closeFullScreen();
    }
}

export const handleMainPlayButtonClick = () => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        showControl();
    } else {
        playPause();
    }
}

export const handleTouchStart = () => {
    if (inactiveSignal.value.value) return;

    playPause();
}

export const handleTimeChangeButtonTouch = (reversed: boolean) => {
    if (inactiveSignal.value.value) return;

    moveTime(reversed ? 10 : -10);
}

export const handleLineMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                    setLeftOffset: Dispatch<SetStateAction<number>>,
                                    margin: number) => {
    const parentElemOffset = e.currentTarget.parentElement.getBoundingClientRect().left;
    const clientX = e.clientX - margin - parentElemOffset;
    const width = e.currentTarget.clientWidth;
    setLeftOffset(clientX / width * 100);
}