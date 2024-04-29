import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

export const useSearchbarValue = () => {
    const [searchbarValue, setSearchbarValue] = useState<string>('');

    useEffect(() => {
        effect(() => {
            if (catalogParamsSignal.value === null) return;
            if (catalogParamsSignal.value.search === null) return;

            if (catalogParamsSignal.value.search === undefined) {
                setSearchbarValue('');
                return;
            }

            setSearchbarValue(catalogParamsSignal.value.search);
        })
    }, []);

    return {searchbarValue, setSearchbarValue};
}