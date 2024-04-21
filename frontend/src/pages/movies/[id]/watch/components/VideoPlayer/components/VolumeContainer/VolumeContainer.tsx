import {MdVolumeOff, MdVolumeUp} from "react-icons/md";
import Progressbar
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Progressbar/Progressbar";
import VolumeContainerLayout
    from "@/pages/movies/[id]/watch/components/VideoPlayer/components/VolumeContainer/VolumeContainerLayout";
import {useVolume} from "@/pages/movies/[id]/watch/use-effects/use-volume-change";
import VolumeIconLayoutLayout
    from "@/pages/movies/[id]/watch/components/VideoPlayer/components/VolumeContainer/VolumeIconLayout";
import VolumeProgressbarLayoutLayout
    from "@/pages/movies/[id]/watch/components/VideoPlayer/components/ProgressbarLayout";

const VolumeContainer = () => {
    const {isMuted, volume} = useVolume();

    return (
        <VolumeContainerLayout>
            <VolumeIconLayoutLayout>
                {isMuted ? <MdVolumeOff/> : <MdVolumeUp/>}
            </VolumeIconLayoutLayout>
            <VolumeProgressbarLayoutLayout isMuted={isMuted} volume={volume}>
                <Progressbar
                    mx={'mx-0'}
                    animate={false}
                    percentage={isMuted ? 0 : volume * 100}
                    bgColor={'bg-black-with-opacity'}
                />
            </VolumeProgressbarLayoutLayout>
        </VolumeContainerLayout>
    )
}

export default VolumeContainer;