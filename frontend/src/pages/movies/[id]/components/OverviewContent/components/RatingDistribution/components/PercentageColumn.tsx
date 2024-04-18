import {RatingDistribution} from "@/types/RatingDistribution";
import ValueContainer
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/ValueContainer";

type PercentageColumnProps = {
    ratingDistribution: RatingDistribution;
}

const PercentageColumn = (props: PercentageColumnProps) => {
    const {ratingDistribution} = props;

    return (
        <div className="text-sm font-semibold font-['Roboto']">
            {ratingDistribution.map((element, index) => (
                <ValueContainer key={index} right={true} left={true}>
                    {element.percentage}%
                </ValueContainer>
            ))}
        </div>
    )
}

export default PercentageColumn;