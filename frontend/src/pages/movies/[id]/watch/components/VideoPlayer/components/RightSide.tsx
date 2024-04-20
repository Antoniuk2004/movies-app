import IconLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/IconLayout";
import {MdFullscreen, MdPictureInPictureAlt, MdVolumeOff, MdVolumeUp} from "react-icons/md";
import SideLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/LeftSide/SideLayout";
import VolumeContainer from "@/pages/movies/[id]/watch/components/VideoPlayer/components/VolumeContainer/VolumeContainer";

const RightSide = () => {
    return (
        <SideLayout>
            <VolumeContainer/>
            <IconLayout>
                <MdPictureInPictureAlt/>
            </IconLayout>
            <IconLayout>
                <MdFullscreen/>
            </IconLayout>
        </SideLayout>
    )
}

export default RightSide;