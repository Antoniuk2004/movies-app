import BottomBarLayout from "./BottomBarLayout";
import LeftSide from "@/pages/movies/[id]/watch/components/VideoPlayer/components/LeftSide/LeftSide";
import RightSide from "@/pages/movies/[id]/watch/components/VideoPlayer/components/RightSide";
import Timeline from "@/pages/movies/[id]/watch/components/VideoPlayer/components/Timeline/Timeline";
import {videoPlayerSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/video-player-signal";

const BottomBar = () => {

    return (
        <BottomBarLayout>
            <Timeline/>
            <div className={"flex justify-between items-center"}>
                <LeftSide/>
                <RightSide/>
            </div>
        </BottomBarLayout>
    )
}

export default BottomBar;