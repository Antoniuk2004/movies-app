import {useEffect, useRef, useState} from "react";
import {effect} from "@preact/signals-react";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

export const useClearSearchbarButton = () => {
    const [isClearButtonHidden, setIsClearButtonHidden] = useState(true);
    const prevValue = useRef();

    useEffect(() => {
        effect(() => {
            if(!catalogParamsSignal.value) return;

            const {search} = catalogParamsSignal.value;
            if (prevValue.current === search) return;

            if (!search || search === "") {
                setIsClearButtonHidden(true);
                return;
            }

            setIsClearButtonHidden(false);
        })
    });

    return {isClearButtonHidden}
}