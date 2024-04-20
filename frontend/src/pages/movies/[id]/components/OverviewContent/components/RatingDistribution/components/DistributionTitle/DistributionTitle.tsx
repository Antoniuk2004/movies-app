import SmallTitleLayout from "../../../../../../../../../common-components/SmallTitleLayout";
import Separator from "@/pages/movies/[id]/components/MediaInfo/components/Separator";
import {FaStar} from "react-icons/fa6";
import {useRatingData} from "@/pages/movies/[id]/components/Rating/use-rating-data";

const DistributionTitle = () => {
    const ratingData = useRatingData();
    if(!ratingData) return null;

    const {rating, totalRates} = ratingData;

    return (
        <SmallTitleLayout>
            <span>User ratings</span>
            <Separator>
                <FaStar className="text-yellow-400 -mt-0.5"/>
                <span>{rating}</span>
                <span className={"text-sm leading-[14px] opacity-70 font-light"}>{totalRates}</span>
            </Separator>
        </SmallTitleLayout>
    )
}

export default DistributionTitle;