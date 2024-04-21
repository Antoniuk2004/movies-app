import IconLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/IconLayout";
import {MdFullscreen, MdPictureInPictureAlt, MdVolumeOff, MdVolumeUp} from "react-icons/md";
import SideLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/LeftSide/SideLayout";
import VolumeContainer
    from "@/pages/movies/[id]/watch/components/VideoPlayer/components/VolumeContainer/VolumeContainer";
import {toggleFullScreen, togglePictureInPicture} from "@/pages/movies/[id]/watch/helpers";
import {usePIPMode} from "@/pages/movies/[id]/watch/use-effects/use-pictire-in-picture-mode";
import ResponsivePIPLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/ResponsivePIPLayout";

const RightSide = () => {
    usePIPMode();

    return (
        <SideLayout>
            <VolumeContainer/>
            <ResponsivePIPLayout>
                <IconLayout clickAction={togglePictureInPicture}>
                    <MdPictureInPictureAlt/>
                </IconLayout>
            </ResponsivePIPLayout>
            <IconLayout clickAction={toggleFullScreen}>
                <MdFullscreen/>
            </IconLayout>
        </SideLayout>
    )
}

export default RightSide;