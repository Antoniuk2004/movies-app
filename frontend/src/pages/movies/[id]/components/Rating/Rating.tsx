import RatingLayout from "@/pages/movies/[id]/components/Rating/components/RatingLayout";
import {FaRegStar, FaStar} from "react-icons/fa6";
import TopLine from "@/pages/movies/[id]/components/Rating/components/TopLine";
import RateButton from "@/pages/movies/[id]/components/Rating/components/RateButton";
import {useRatingData} from "@/pages/movies/[id]/components/Rating/use-rating-data";
import {roundNumber} from "@/pages/movies/[id]/helpers";

const Rating = () => {
    const ratingData = useRatingData();
    if(!ratingData) return null;

    const {rating, totalRates} = ratingData;

    return (
        <RatingLayout>
            <TopLine>
                <FaStar className="text-yellow-400"/>
                <span>{roundNumber(rating, 2)}</span>
                <span className={"text-lg responsive:text-xs leading-[18px] opacity-70 font-light"}>{totalRates}</span>
            </TopLine>
            <RateButton>
                <FaRegStar/>
                <span>Rate</span>
            </RateButton>
        </RatingLayout>
    )
}

export default Rating;