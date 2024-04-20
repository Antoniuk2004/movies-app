import {rateModalSignal} from "@/pages/movies/[id]/components/RateModal/use-rate-modal";
import {movieSignal} from "@/signals/movie-signal";


export const changeRateModalVisibility = (value: boolean, changeTempRating?: boolean) => {
    rateModalSignal.value = {
        ...rateModalSignal.value,
        tempRating: movieSignal.value.userRating || 0,
        isVisible: value
    }
}

export const setModalRef = (ref: HTMLDivElement | null) => {
    if (!ref) return;

    rateModalSignal.value = {
        ...rateModalSignal.value,
        element: ref,
        isVisible: true
    }
}

export const setRateButton = (element: HTMLElement | null) => {
    rateModalSignal.value = {
        ...rateModalSignal.value,
        parentElement: element
    }
}

export const setTempRating = (value: number) => {
    if (value == rateModalSignal.value.tempRating) return;

    rateModalSignal.value = {
        ...rateModalSignal.value,
        tempRating: value
    }
}