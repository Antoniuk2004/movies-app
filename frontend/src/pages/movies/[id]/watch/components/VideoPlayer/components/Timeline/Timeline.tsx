import TimelineLayout from "./TimelineLayout";
import Progressbar
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Progressbar/Progressbar";
import {useTimeline} from "@/pages/movies/[id]/watch/use-effects/use-timeline";
import TimelineCursor from "@/pages/movies/[id]/watch/components/VideoPlayer/components/TimelineCursor";
import Indicator from "@/pages/movies/[id]/watch/components/VideoPlayer/components/Indicator/Indicator";
import {useState} from "react";
import {getTimeFromPercents} from "@/pages/movies/[id]/watch/helpers";

const Timeline = () => {
    const {percentage, isHovered, setIsHovered} = useTimeline();
    const [leftOffset, setLeftOffset] = useState<number>(0);

    return (
        <TimelineLayout setLeftOffset={setLeftOffset} setIsHovered={setIsHovered}>
            <Indicator
                mb={'mb-4'}
                leftOffset={leftOffset}
                value={getTimeFromPercents(leftOffset)}
                isShown={isHovered}
            />
            <TimelineCursor isHovered={isHovered} percentage={percentage}/>
            <Progressbar
                mx={'mx-0'}
                animate={false}
                percentage={percentage}
                bgColor={'bg-white-with-opacity'}
            />
        </TimelineLayout>
    )
}

export default Timeline;