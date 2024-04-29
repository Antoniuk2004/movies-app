import {ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction} from "react";
import {createFilterQuery} from "@/pages/movies/[id]/helpers";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {addCatalogParamsValue, getKeyByValue, removeCatalogParamsValue} from "@/pages/catalog/helpers";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";
import {Sort} from "@/types/Sort";

export const handleButtonClick = (setCheckBoxState: Dispatch<SetStateAction<number>>, value: number,
                                  firstId: string, secondId?: string) => {
    setCheckBoxState((prev) => {
        switch (prev) {
            case 0:
                addCatalogParamsValue(firstId, value);
                return ++prev;
            case 1:
                if (secondId === undefined) {
                    removeCatalogParamsValue(firstId, value);
                    return 0;
                } else {
                    removeCatalogParamsValue(firstId, value);
                    addCatalogParamsValue(secondId, value);
                    return ++prev;
                }
            case 2:
                removeCatalogParamsValue(secondId, value);
                return 0;
        }
    })
};

export const handleListSelect = (setIsHidden: Dispatch<SetStateAction<boolean>>,
                                 setIsSelected: Dispatch<SetStateAction<boolean>>) => {
    setIsHidden(prevState => !prevState);
    setIsSelected(prevState => !prevState);
}

export const handleListClose = (setIsHidden: Dispatch<SetStateAction<boolean>>,
                                setIsSelected: Dispatch<SetStateAction<boolean>>) => {
    setIsHidden(prevState => !prevState);
    setTimeout(() => setIsSelected(prevState => !prevState), 300);
}

export const onSubmit = async (data: any, navRouter: AppRouterInstance) => {
    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        durationFrom: data.durationFrom,
        durationTo: data.durationTo,
        yearFrom: data.yearFrom,
        yearTo: data.yearTo,
        ratingFrom: data.ratingFrom,
        ratingTo: data.ratingTo,
    }

    const query = createFilterQuery(catalogParamsSignal.value);

    navRouter.push("/catalog" + query);
}

export const handleOrderSelect = (value: string, data: any, navRouter: AppRouterInstance) => {
    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        order: getKeyByValue(Sort, value),
    }

    onSubmit(data, navRouter);
}

export const handleOrderTypeSelect = (value: string, data: any, navRouter: AppRouterInstance) => {
    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        orderType: getKeyByValue(Sort, value),
    }

    onSubmit(data, navRouter);
}

export const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        search: e.currentTarget.value,
    }
}