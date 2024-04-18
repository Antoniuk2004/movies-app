import DistributionTitleLayout from "../../../DistributionTitleLayout";
import {movieSignal} from "@/signals/movie-signal";
import Separator from "@/pages/movies/[id]/components/MediaInfo/components/Separator";
import {FaStar} from "react-icons/fa6";

const DistributionTitle = () => {
    const {rating} = movieSignal.value;
    const {totalRates} = movieSignal.value;

    return (
        <DistributionTitleLayout>
            <span>User ratings</span>
            <Separator>
                <FaStar className="text-yellow-400 -mt-0.5"/>
                <span>{rating}</span>
                <span className={"text-sm leading-[14px] opacity-70 font-light"}>{totalRates}</span>
            </Separator>
        </DistributionTitleLayout>
    )
}

export default DistributionTitle;