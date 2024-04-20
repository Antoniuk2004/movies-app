import {useEffect, useRef, useState} from "react";
import {effect, signal} from "@preact/signals-react";
import {movieSignal} from "@/signals/movie-signal";

type RateModalData = {
    isVisible: boolean;
    element: HTMLDivElement | null;
    parentElement: HTMLDivElement | null;
    tempRating: number | null;
}

export const rateModalSignal = signal({
    isVisible: false,
    element: null,
    parentElement: null,
    tempRating: null
});


export const useRateModal = () => {
    const [modalData, setModalData] = useState<RateModalData>(rateModalSignal.value);
    const isUserRatingSet = useRef(false);

    useEffect(() => {
        effect(() => {
            setModalData(rateModalSignal.value);
        })
    }, []);

    useEffect(() => {
        effect(() => {
            if (movieSignal.value && !isUserRatingSet.current) {
                isUserRatingSet.current = true;

                rateModalSignal.value = {
                    ...rateModalSignal.value,
                    tempRating: movieSignal.value.userRating || 0
                }
            }
        })
    })

    return modalData;
}