import RatingLayout from "@/pages/movies/[id]/components/Rating/components/RatingLayout";
import {FaRegStar, FaStar} from "react-icons/fa6";
import TopLine from "@/pages/movies/[id]/components/Rating/components/TopLine";
import RateButton from "@/pages/movies/[id]/components/Rating/components/RateButton";
import {movieSignal} from "@/signals/movie-signal";

const Rating = () => {
    const {rating, totalRates} = movieSignal.value;

    return (
        <RatingLayout>
            <TopLine>
                <FaStar className="text-yellow-400"/>
                <span>{rating}</span>
                <span className={"text-lg leading-[18px] opacity-70 font-light"}>{totalRates}</span>
            </TopLine>
            <RateButton>
                <FaRegStar/>
                <span>Rate</span>
            </RateButton>
        </RatingLayout>
    )
}

export default Rating;