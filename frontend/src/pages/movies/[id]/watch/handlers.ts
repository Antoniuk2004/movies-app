import {MouseEventHandler, MutableRefObject} from "react";
import {Dispatch, SetStateAction} from "react";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/video-player-signal";
import {setVolume} from "@/pages/movies/[id]/watch/helpers";

export const handleMouseUp = (isDraggingRef: MutableRefObject<boolean>) => {
    isDraggingRef.current = false;
};

export const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                isDraggingRef: MutableRefObject<boolean>) => {
    isDraggingRef.current = true;
    e.preventDefault();
};

export const handleMouseMove = (e: MouseEvent,
                                isDraggingRef: MutableRefObject<boolean>,
                                sliderRef: MutableRefObject<null | HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    setVolume(e, sliderRef);
};

export const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                            sliderRef: MutableRefObject<null | HTMLDivElement>) => {
    setVolume(e, sliderRef);
}

const handlePiPPlayButtonClick = async () => {
    try {
        if (!document.pictureInPictureEnabled) {
            console.error('Picture-in-Picture is not supported by this browser.');
            return;
        }

        await videoPlayerSignal.value.videoElement.requestPictureInPicture();
    } catch (error) {
        console.error('Error while requesting Picture-in-Picture mode:', error);
    }
};

export const handlePauseInPIPMode = () => {
    if(!videoPlayerSignal.value.isPictureInPictureOpened) return;

    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isStopped: true
    }
}

export const handlePlayInPIPMode = () => {
    if(!videoPlayerSignal.value.isPictureInPictureOpened) return;

    videoPlayerSignal.value = {
        ...videoPlayerSignal.value,
        isStopped: false
    }
}
