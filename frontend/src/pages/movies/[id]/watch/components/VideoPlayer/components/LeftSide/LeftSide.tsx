import {IoIosPause, IoIosPlay} from "react-icons/io";
import IconLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/IconLayout";
import SideLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/LeftSide/SideLayout";
import {playPause} from "@/pages/movies/[id]/watch/helpers";
import {usePlayButton} from "@/pages/movies/[id]/watch/components/use-effects/use-play-button";

const LeftSide = () => {
    const {isStopped} = usePlayButton();

    return (
        <SideLayout>
            <IconLayout clickAction={playPause}>
                {isStopped ? <IoIosPlay/> : <IoIosPause />}
            </IconLayout>
        </SideLayout>
    )
}

export default LeftSide;