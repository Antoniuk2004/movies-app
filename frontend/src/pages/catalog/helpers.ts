import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {NextRouter} from "next/router";
import {WatchingStatus} from "@/types/WatchingStatus";
import {Genre} from "@/types/Genre";
import {Person} from "@/types/Person";
import {Studio} from "@/types/Studio";
import {CountryType} from "@/types/CountryType";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";
import {Sort} from "@/types/Sort";
import {onSubmit} from "@/pages/catalog/handlers";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {number} from "prop-types";

export const getKeyByValue = (object: any, value: any) => {
    return Object.keys(object).find(key => object[key] === value);
}

export const resetFilters = (navRouter: AppRouterInstance,
                             infoRouter: NextRouter, setValue: any,) => {
    if (infoRouter.pathname === '/catalog?order=DESC&orderType=RATING') return;

    setValue('yearFrom', null);
    setValue('yearTo', null);
    setValue('durationFrom', null);
    setValue('durationTo', null);
    setValue('ratingFrom', null);
    setValue('ratingTo', null);
    catalogParamsSignal.value = null;

    navRouter.push("/catalog?order=DESC&orderType=RATING");
}

export const getWatchingStatusStyle = (status: string) => {
    switch (status) {
        case WatchingStatus.Completed:
            return 'bg-green-500 text-white';
        case WatchingStatus.Watching:
            return 'bg-orange-500 text-black';
        case WatchingStatus.PlanToWatch:
            return 'bg-blue-500 text-white';
        case WatchingStatus.Dropped:
            return 'bg-red-500 text-white';
        case WatchingStatus.OnHold:
            return 'bg-purple-500 text-white';
    }
}

export const getRatingStyle = (rating: number) => {
    if (rating === 0) return 'bg-neutral-500 text-white';
    if (rating < 4) return 'bg-red-500 text-white';
    if (rating < 7) return 'bg-orange-500 text-black';
    return 'bg-green-500 text-white';
}

export const getListTitle = (option: Genre | Person | Studio | CountryType) => {
    if ('name' in option) return option.name;
    if ('title' in option) return option.title;
    if ('firstName' in option) return option.firstName + ' ' + option.surname;
}

export const check = (list: number[], index: number) => {
    if (!list) return undefined;

    if (Array.isArray(list)) return list.includes(index);
    else return Number(list) === Number(index);
}

export const addCatalogParamsValue = (id: string, value: number) => {
    const prevValue = catalogParamsSignal.value[id];

    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        [id]: prevValue ? [...prevValue, value] : [value]
    }
}

export const removeCatalogParamsValue = (id: string, value: number) => {
    const prevValue = catalogParamsSignal.value[id];

    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        [id]: prevValue.length > 1 ? prevValue.filter((val: string) => parseInt(val) !== value) : []
    }
}

export const getInitialOrder = () => {
    const order = catalogParamsSignal.value.order;

    if (order) return Sort[order];
    else return Sort.DESC;
}

export const getInitialOrderType = () => {
    const orderType = catalogParamsSignal.value.orderType;

    if (orderType) return Sort[orderType];
    else return Sort.RATING;
}

export const clearSearchbar = (data: any, router: AppRouterInstance) => {
    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        search: ""
    };

    onSubmit(data, router);
}

export const convertToListOfIntegers = (list: string[] | string) => {
    if (list === null || list === undefined) return;
    if (Array.isArray(list)) {
        if (list.length === 0) return;

        return list.map((str: string) => parseInt(str));
    } else return [parseInt(list)];

}