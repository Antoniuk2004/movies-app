import {openSearchModalSignal} from "@/common-components/SearchModal/signals/open-search-modal-signal";
import {searchValueSignal} from "@/common-components/SearchModal/signals/search-value-signal";
import {moviesRequest} from "@/api/movies-request";
import {Sort} from "@/types/Sort";
import {getKeyByValue} from "@/pages/catalog/helpers";
import {FilterParams} from "@/types/FilterParams";

export const handleSearchModalClose = (close: () => void,) => {
    close();
    openSearchModalSignal.value = false;
}

export const handleSearchValueChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    searchValueSignal.value = e.currentTarget.value;

    const filterParams = {
        search: e.currentTarget.value,
        order: getKeyByValue(Sort, Sort.DESC),
        orderType: getKeyByValue(Sort, Sort.RATING),
    }

    const movies = await moviesRequest(filterParams as FilterParams);
    console.log(movies);
}