import RatingRowListLayout from "./RatingRowListLayout";
import RatingRow
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/RatingRow/RatingRow";
import {RatingDistribution} from "@/types/RatingDistribution";
type RatingRowListProps = {
    ratingDistribution: RatingDistribution;
}

const RatingRowList = (props: RatingRowListProps) => {
    const {ratingDistribution} = props;

    return (
        <RatingRowListLayout>
            {ratingDistribution.map((element, index) => (
                <RatingRow
                    key={index}
                    rating={element.rating}
                    percentage={element.percentage}
                />
            ))}
        </RatingRowListLayout>
    )
}

export default RatingRowList;