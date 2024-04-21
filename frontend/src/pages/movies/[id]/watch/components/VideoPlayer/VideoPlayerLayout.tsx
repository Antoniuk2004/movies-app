import {LayoutProps} from "@/types/LayoutProps";
import BottomBar from "@/pages/movies/[id]/watch/components/VideoPlayer/components/BottomBar/BottomBar";
import {useFullscreenMode} from "@/pages/movies/[id]/watch/use-effects/use-fullscreen-mode";

const VideoPlayerLayout = ({children}: LayoutProps) => {
    const {isFullscreen} = useFullscreenMode();

    return (
        <div className={isFullscreen ? "absolute z-20 w-svw h-svh bg-black top-0 left-0 flex justify-center" : ''}>
            <div className={`${isFullscreen ? '' : 'rounded-xl'} wrapper:rounded-none relative overflow-hidden`}>
                <BottomBar/>
                {children}
            </div>
        </div>
    )
}

export default VideoPlayerLayout;