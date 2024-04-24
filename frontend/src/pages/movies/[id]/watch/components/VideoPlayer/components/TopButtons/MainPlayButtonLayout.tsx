import {LayoutProps} from "@/types/LayoutProps";
import {playPause, toggleFullScreen} from "@/pages/movies/[id]/watch/helpers";
import {handleMainPlayButtonClick, handleTouchStart} from "@/pages/movies/[id]/watch/handlers";

type MainPlayButtonLayoutProps = LayoutProps & {
    inactive: boolean;
}

const MainPlayButtonLayout = (props: MainPlayButtonLayoutProps) => {
    const {inactive, children} = props;

    return (
        <div
            onDoubleClick={toggleFullScreen}
            onClick={handleMainPlayButtonClick}
            className={`cursor-auto absolute z-10 flex items-center justify-center h-full w-full top-0 left-0`}>
            <div className={"flex items-center w-full"}>
                {children}
            </div>
        </div>
    )
}

export default MainPlayButtonLayout;