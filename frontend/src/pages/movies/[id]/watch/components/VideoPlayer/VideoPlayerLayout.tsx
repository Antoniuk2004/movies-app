import {LayoutProps} from "@/types/LayoutProps";
import BottomBar from "@/pages/movies/[id]/watch/components/VideoPlayer/components/BottomBar/BottomBar";

const VideoPlayerLayout = ({children}: LayoutProps) => {
    return (
        <div className={"rounded-xl wrapper:rounded-none relative overflow-hidden"}>
            <BottomBar/>
            {children}
        </div>
    )
}

export default VideoPlayerLayout;