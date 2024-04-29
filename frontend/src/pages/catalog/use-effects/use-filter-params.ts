import {useEffect, useState} from "react";
import {filterParamsRequest} from "@/api/filter-params-request";
import {FilterParams} from "@/types/FilterParams";

export const useFilterParams = () => {
    const [filterParams, setFilterParams] = useState<null | FilterParams>(null);

    useEffect(() => {
        const getFilterParams = async () => {
            setFilterParams(await filterParamsRequest());
        }

        getFilterParams();
    }, []);

    return filterParams;
}