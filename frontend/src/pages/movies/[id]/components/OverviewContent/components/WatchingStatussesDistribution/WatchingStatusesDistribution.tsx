import DistributionLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/DistributionLayout";
import {movieSignal} from "@/signals/movie-signal";
import {addValuesToWatchingStatusDistribution} from "@/pages/movies/[id]/helpers";
import DistributionTitle
    from "@/pages/movies/[id]/components/OverviewContent/components/WatchingStatussesDistribution/DistributionTitle";
import FlexContainer from "@/pages/movies/[id]/components/OverviewContent/components/FlexContainer";
import PercentageColumnLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/PercentageColumnLayout";
import Column
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/Column";
import CountColumnLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/CountColumnLayout";
import RatingRowListLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/RatingRowList/RatingRowListLayout";
import RatingRowLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/RatingRow/RatingRowLayout";
import Progressbar
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Progressbar/Progressbar";

const WatchingStatusesDistribution = () => {
    let {watchingStatusDistribution, totalWatchingStatuses} = movieSignal.value;
    watchingStatusDistribution = addValuesToWatchingStatusDistribution(watchingStatusDistribution,
        totalWatchingStatuses);

    const statuses = watchingStatusDistribution.map((value) => value.watchingStatus);
    const percents = watchingStatusDistribution.map((value) => value.percentage);
    const counts = watchingStatusDistribution.map((rating) => rating.count);

    return (
        <DistributionLayout>
            <DistributionTitle/>
            <FlexContainer>
                <CountColumnLayout>
                    <Column right={false} left={true} values={statuses}/>
                </CountColumnLayout>
                <RatingRowListLayout>
                    {watchingStatusDistribution.map((element, index) =>
                        <RatingRowLayout key={index}>
                            <Progressbar percentage={element.percentage}/>
                        </RatingRowLayout>
                    )}
                </RatingRowListLayout>
                <PercentageColumnLayout>
                    <Column additionalValue={"%"} right={true} left={true} values={percents}/>
                </PercentageColumnLayout>
                <CountColumnLayout>
                    <Column right={false} left={true} values={counts}/>
                </CountColumnLayout>
            </FlexContainer>
        </DistributionLayout>
    )
}

export default WatchingStatusesDistribution;