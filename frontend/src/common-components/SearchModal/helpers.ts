import {getKeyByValue} from "@/pages/catalog/helpers";
import {Sort} from "@/types/Sort";

export const buildFilterParams = (searchValue: string) => {
    return {
        search: searchValue,
        order: getKeyByValue(Sort, Sort.DESC),
        orderType: getKeyByValue(Sort, Sort.RATING),
    };
};