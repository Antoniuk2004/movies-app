import {IoIosPause, IoIosPlay} from "react-icons/io";
import IconLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/IconLayout";
import SideLayout from "@/pages/movies/[id]/watch/components/SideLayout";
import {playPause} from "@/pages/movies/[id]/watch/helpers";
import {usePlayButton} from "@/pages/movies/[id]/watch/use-effects/use-play-button";
import VideoTime from "@/pages/movies/[id]/watch/components/VideoPlayer/components/VideoTime/VideoTime";
import MinorPlayButtonLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/MinorPlayButtonLayout";
import LeftSideLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/LeftSide/LeftSideLayout";

const LeftSide = () => {
    const {isStopped} = usePlayButton();

    return (
        <LeftSideLayout>
            <SideLayout>
                <MinorPlayButtonLayout>
                    <IconLayout clickAction={playPause}>
                        {isStopped ? <IoIosPlay/> : <IoIosPause/>}
                    </IconLayout>
                </MinorPlayButtonLayout>
                <VideoTime/>
            </SideLayout>
        </LeftSideLayout>
    )
}

export default LeftSide;