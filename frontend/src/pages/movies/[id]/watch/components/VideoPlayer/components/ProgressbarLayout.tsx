import {LayoutProps} from "@/types/LayoutProps";
import {handleVolumeClick, handleMouseDown, handleLineMouseOver} from "@/pages/movies/[id]/watch/handlers";
import {
    useVolumeCursor
} from "@/pages/movies/[id]/watch/use-effects/use-volume-cursor";
import VolumeCursor from "@/pages/movies/[id]/watch/components/VideoPlayer/components/VolumeCursor";
import {Dispatch, SetStateAction, useState} from "react";

type VolumeProgressbarLayoutProps = LayoutProps & {
    volume: number;
    isMuted: boolean;
    setIsHovered: Dispatch<SetStateAction<boolean>>;
    setLeftOffset: Dispatch<SetStateAction<number>>
}

const VolumeProgressbarLayoutLayout = (props: VolumeProgressbarLayoutProps) => {
    const {volume, children, isMuted, setIsHovered, setLeftOffset} = props;
    const {isDraggingRef, sliderRef} = useVolumeCursor();
    const [isCursorShown, setIsCursorShown] = useState(false);

    return (
        <div
            onMouseOver={() => setIsCursorShown(true)}
            onMouseOut={() => setIsCursorShown(false)}
            ref={sliderRef}
            onClick={(e) => handleVolumeClick(e, sliderRef)}
            onMouseDown={(e) => handleMouseDown(e, isDraggingRef)}
            className={"w-full relative h-9 flex items-center cursor-pointer"}>
            <div
                onMouseMove={(e) => handleLineMouseOver(e, setLeftOffset, 0)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={"w-full h-full flex items-center"}>
                <VolumeCursor isCursorShown={isCursorShown} volume={volume} isMuted={isMuted}/>
                {children}
            </div>
        </div>
    )
}

export default VolumeProgressbarLayoutLayout;