import {LayoutProps} from "@/types/LayoutProps";
import {playPause, toggleFullScreen} from "@/pages/movies/[id]/watch/helpers";
import {handleMainPlayButtonClick, handleTouchStart} from "@/pages/movies/[id]/watch/handlers";

type MainPauseButtonLayout = LayoutProps & {
    inactive: boolean;
}

const MainPauseButtonLayout = (props: MainPauseButtonLayout) => {
    const {inactive, children} = props;

    return (
        <div
            onDoubleClick={toggleFullScreen}
            onClick={handleMainPlayButtonClick}
            className={`${inactive ? 'cursor-none' : 'cursor-auto'} 
            absolute z-10 flex items-center justify-center h-full w-full top-0 left-0`}>
            <div className={"flex w-full items-center"}>
                {children}
            </div>
        </div>
    )
}

export default MainPauseButtonLayout;