import {LayoutProps} from "@/types/LayoutProps";
import {handleClick, handleMouseDown} from "@/pages/movies/[id]/watch/handlers";
import {
    useVolumeCursor
} from "@/pages/movies/[id]/watch/use-effects/use-volume-cursor";

type VolumeProgressbarLayoutProps = LayoutProps & {
    volume: number;
    isMuted: boolean;
}

const VolumeProgressbarLayoutLayout = (props: VolumeProgressbarLayoutProps) => {
    const {volume, children, isMuted} = props;
    const {isDraggingRef, sliderRef} = useVolumeCursor();

    return (
        <div
            ref={sliderRef}
            onClick={(e) => handleClick(e, sliderRef)}
            onMouseDown={(e) => handleMouseDown(e, isDraggingRef)}
            className={"w-full relative h-9 flex items-center cursor-pointer"}>
            <div
                style={{left: isMuted ? '-8px' : `calc(${volume * 100}% - 8px)`}}
                className="absolute left-0 bg-white size-4 rounded-full">
            </div>
            {children}
        </div>
    )
}

export default VolumeProgressbarLayoutLayout;