import {useEffect, useRef} from "react";
import {handleVolumeMouseMove, handleMouseUp} from "@/pages/movies/[id]/watch/handlers";

export const useVolumeCursor = () => {
    const isDraggingRef = useRef(false);
    const sliderRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("mousemove", (e) =>
            handleVolumeMouseMove(e, isDraggingRef, sliderRef));
        document.addEventListener("mouseup", () => handleMouseUp(isDraggingRef));

        return () => {
            document.removeEventListener("mousemove", (e) =>
                handleVolumeMouseMove(e, isDraggingRef, sliderRef));
            document.removeEventListener("mouseup", () => handleMouseUp(isDraggingRef));
        };
    }, [isDraggingRef.current]);

    return {isDraggingRef, sliderRef};
}