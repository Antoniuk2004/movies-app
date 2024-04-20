import RateButtonLayout from "./RateButtonLayout";
import {FaStar} from "react-icons/fa6";
import Separator from "@/pages/movies/[id]/components/MediaInfo/components/Separator";
import {movieSignal} from "@/signals/movie-signal";

const RateButton = () => {
    const {rating, totalRates} = movieSignal.value;

    return (
        <RateButtonLayout>
            <Separator>
                <FaStar className="text-sm text-yellow-400 -mt-0.5"/>
                <span className="text-base font-semibold text-neutral-800">{rating}</span>
                <span className={"text-sm leading-[12px] opacity-70 font-light"}>{totalRates}</span>
            </Separator>
        </RateButtonLayout>
    )
}

export default RateButton;