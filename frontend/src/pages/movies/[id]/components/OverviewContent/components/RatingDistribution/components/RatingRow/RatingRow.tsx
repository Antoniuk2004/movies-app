import RatingRowLayout from "./RatingRowLayout";
import {FaStar} from "react-icons/fa6";
import RatingValue
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/RatingValue";
import ValueContainer
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/ValueContainer";
import Progressbar
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/Progressbar/Progressbar";

type RatingRowProps = {
    rating: number;
    percentage: number;
}

const RatingRow = (props: RatingRowProps) => {
    const {rating, percentage} = props;

    return (
        <RatingRowLayout>
            <ValueContainer right={true}>
                <RatingValue>
                    <span>{rating}</span>
                    <FaStar className={"text-neutral-400 -mt-0.5"}/>
                </RatingValue>
            </ValueContainer>
            <Progressbar percentage={percentage}/>
        </RatingRowLayout>
    )
}

export default RatingRow;