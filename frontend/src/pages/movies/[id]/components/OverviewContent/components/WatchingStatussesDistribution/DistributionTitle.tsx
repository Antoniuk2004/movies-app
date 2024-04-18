import {movieSignal} from "@/signals/movie-signal";
import DistributionTitleLayout from "@/pages/movies/[id]/components/OverviewContent/components/DistributionTitleLayout";

const DistributionTitle = () => {
    const {totalWatchingStatuses} = movieSignal.value;

    return (
        <DistributionTitleLayout>
            <span>{`In the lists of ${totalWatchingStatuses} 
            ${totalWatchingStatuses === 1 ? 'person' : 'people'}`}</span>
        </DistributionTitleLayout>
    )
}

export default DistributionTitle;