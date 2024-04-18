import DistributionLayout from "./DistributionLayout";
import DistributionTitle
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/DistributionTitle/DistributionTitle";
import RatingRowList
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/RatingRowList/RatingRowList";
import {movieSignal} from "@/signals/movie-signal";
import {addValuesToRatingDistribution} from "@/pages/movies/[id]/helpers";
import PercentageColumnLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/PercentageColumnLayout";
import Column
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/Column";
import CountColumnLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/CountColumnLayout";
import FlexContainer from "@/pages/movies/[id]/components/OverviewContent/components/FlexContainer";

const RatingDistribution = () => {
    let {ratingDistribution, totalRates} = movieSignal.value;
    ratingDistribution = addValuesToRatingDistribution(ratingDistribution, totalRates);

    const percents = ratingDistribution.map((rating) => rating.percentage);
    const counts = ratingDistribution.map((rating) => rating.count);

    return (
        <DistributionLayout>
            <DistributionTitle/>
            <FlexContainer>
                <RatingRowList ratingDistribution={ratingDistribution}/>
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

export default RatingDistribution;