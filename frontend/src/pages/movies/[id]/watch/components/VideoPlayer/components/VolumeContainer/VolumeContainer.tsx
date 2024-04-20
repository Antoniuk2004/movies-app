import {MdVolumeOff, MdVolumeUp} from "react-icons/md";
import IconLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/IconLayout";
import Progressbar
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Progressbar/Progressbar";
import VolumeContainerLayout
    from "@/pages/movies/[id]/watch/components/VideoPlayer/components/VolumeContainer/VolumeContainerLayout";

const VolumeContainer = () => {
    return (
        <VolumeContainerLayout>
            <IconLayout>
                <MdVolumeOff/>
            </IconLayout>
            <Progressbar percentage={0}/>
            <IconLayout>
                <MdVolumeUp/>
            </IconLayout>
        </VolumeContainerLayout>
    )
}

export default VolumeContainer;