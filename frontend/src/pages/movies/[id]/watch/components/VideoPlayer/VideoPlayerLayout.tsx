import {LayoutProps} from "@/types/LayoutProps";
import {useFullscreenMode} from "@/pages/movies/[id]/watch/use-effects/use-fullscreen-mode";
import Control from "@/pages/movies/[id]/watch/components/VideoPlayer/components/Control/Control";
import {useBlackScreen} from "@/pages/movies/[id]/watch/use-effects/use-black-screen";
import BlackScreen from "@/pages/movies/[id]/watch/components/VideoPlayer/components/BlackScreen";

const VideoPlayerLayout = ({children}: LayoutProps) => {
    const {isFullscreen} = useFullscreenMode();
    const isShown = useBlackScreen();

    return (
        <div
            className={isFullscreen ? "absolute z-20 w-svw h-svh bg-black top-0 left-0 flex justify-center" : 'responsive:flex responsive:bg-black responsive:min-h-110'}>
            <div
                className={`${isFullscreen ? '' : 'rounded-xl'} wrapper:rounded-none relative overflow-hidden`}>
                <BlackScreen isShown={isShown}/>
                <Control/>
                {children}
            </div>
        </div>
    )
}

export default VideoPlayerLayout;