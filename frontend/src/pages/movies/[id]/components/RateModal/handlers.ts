import {changeRateModalVisibility} from "@/pages/movies/[id]/components/RateModal/helpers";
import {rateModalSignal} from "@/pages/movies/[id]/components/RateModal/use-rate-modal";
import {updateRating} from "@/api/rating-update-request";

export const handleCancelButtonClick = () => {
    changeRateModalVisibility(false);
}

export const handleRateButtonClick = () => {
    updateRating(rateModalSignal.value.tempRating);
    changeRateModalVisibility(false);
}

