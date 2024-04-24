import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {useTimelineCursor} from "@/pages/movies/[id]/watch/use-effects/use-timeline-cursor";
import {handleLineMouseOver, handleMouseDown, handleTimelineClick} from "@/pages/movies/[id]/watch/handlers";

type TimelineLayoutProps = LayoutProps & {
    setIsHovered: Dispatch<SetStateAction<boolean>>;
    setLeftOffset: Dispatch<SetStateAction<number>>
}

const TimelineLayout = (props: TimelineLayoutProps) => {
    const {children, setIsHovered, setLeftOffset} = props;
    const {isDraggingRef, sliderRef} = useTimelineCursor();

    return (
        <div
            ref={sliderRef}
            onMouseMove={(e) => handleLineMouseOver(e, setLeftOffset, 12)}
            onClick={(e) => handleTimelineClick(e, sliderRef)}
            onMouseDown={(e) => handleMouseDown(e, isDraggingRef)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={"mx-1.5 cursor-pointer pb-1.5 responsive:pb-0"}>
            <div className={"relative h-3.5 flex responsive:h-11 responsive:items-center w-full items-end"}>
                {children}
            </div>
        </div>
    )
}

export default TimelineLayout;