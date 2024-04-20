import DistributionLayout from "./DistributionLayout";
import DistributionTitle
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/DistributionTitle/DistributionTitle";
import RatingRowList
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/RatingRowList/RatingRowList";
import PercentageColumnLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/PercentageColumnLayout";
import Column
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/Column";
import CountColumnLayout
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Column/CountColumnLayout";
import FlexContainer from "@/pages/movies/[id]/components/OverviewContent/components/FlexContainer";
import {useRating} from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/use-rating";

const RatingDistribution = () => {
    const {distribution} = useRating();

    const percents = distribution.map((rating) => rating.percentage);
    const counts = distribution.map((rating) => rating.count);

    return (
        <DistributionLayout>
            <DistributionTitle/>
            <FlexContainer>
                <RatingRowList ratingDistribution={distribution}/>
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