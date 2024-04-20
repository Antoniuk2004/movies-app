import {movieSignal} from "@/signals/movie-signal";
import SmallTitleLayout from "@/common-components/SmallTitleLayout";

const DistributionTitle = () => {
    const {totalWatchingStatuses} = movieSignal.value;

    return (
        <SmallTitleLayout>
            <span>{`In the lists of ${totalWatchingStatuses} 
            ${totalWatchingStatuses === 1 ? 'person' : 'people'}`}</span>
        </SmallTitleLayout>
    )
}

export default DistributionTitle;