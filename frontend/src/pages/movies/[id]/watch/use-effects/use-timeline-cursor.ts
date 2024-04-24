import {useEffect, useRef} from "react";
import {handleMouseUp, handleTimelineMouseMove} from "@/pages/movies/[id]/watch/handlers";

export const useTimelineCursor = () => {
    const isDraggingRef = useRef(false);
    const sliderRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("mousemove", (e) =>
            handleTimelineMouseMove(e, isDraggingRef, sliderRef));
        document.addEventListener("mouseup", () => handleMouseUp(isDraggingRef));

        return () => {
            document.removeEventListener("mousemove", (e) =>
                handleTimelineMouseMove(e, isDraggingRef, sliderRef));
            document.removeEventListener("mouseup", () => handleMouseUp(isDraggingRef));
        };
    }, [isDraggingRef.current]);

    return {isDraggingRef, sliderRef};
}