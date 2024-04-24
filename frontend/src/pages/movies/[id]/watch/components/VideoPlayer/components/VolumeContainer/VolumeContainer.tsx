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
import Indicator from "@/pages/movies/[id]/watch/components/VideoPlayer/components/Indicator/Indicator";
import {useState} from "react";
import {roundNumber} from "@/pages/movies/[id]/watch/helpers";

const VolumeContainer = () => {
    const {isMuted, volume} = useVolume();
    const [isHovered, setIsHovered] = useState(false);
    const [leftOffset, setLeftOffset] = useState<number>(0);

    return (
        <VolumeContainerLayout>
            <VolumeIconLayoutLayout>
                {isMuted ? <MdVolumeOff/> : <MdVolumeUp/>}
            </VolumeIconLayoutLayout>
            <VolumeProgressbarLayoutLayout
                setIsHovered={setIsHovered}
                setLeftOffset={setLeftOffset}
                isMuted={isMuted}
                volume={volume}
            >
                <Indicator
                    value={Math.round(leftOffset) + "%"}
                    isShown={isHovered}
                    leftOffset={leftOffset}
                    mb={'mb-12'}
                />
                <Progressbar
                    mx={'mx-0'}
                    animate={false}
                    percentage={isMuted ? 0 : volume * 100}
                    bgColor={'bg-white-with-opacity'}
                />
            </VolumeProgressbarLayoutLayout>
        </VolumeContainerLayout>
    )
}

export default VolumeContainer;