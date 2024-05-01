import {useEffect, useState} from "react";
import {searchValueSignal} from "@/common-components/SearchModal/signals/search-value-signal";
import {effect} from "@preact/signals-react";

export const useSearchValue = () => {
    const [searchValue, setSearchValue] = useState<string>(searchValueSignal.value);
    const [cancelToken, setCancelToken] = useState(null)

    useEffect(() => {
        effect(() => {
            setSearchValue(searchValueSignal.value);
        })
    }, []);

    return {searchValue, cancelToken, setCancelToken};
}
