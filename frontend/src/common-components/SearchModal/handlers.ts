import {openSearchModalSignal} from "@/common-components/SearchModal/signals/open-search-modal-signal";
import {searchValueSignal} from "@/common-components/SearchModal/signals/search-value-signal";
import {FilterParams} from "@/types/FilterParams";
import {buildFilterParams} from "./helpers";
import {movieSearchRequest} from "@/api/movie-search-request";
import {CancelTokenSource} from "axios";
import {Dispatch, SetStateAction} from "react";
import {Movie} from "@/types/Movie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleSearchModalClose = () => {
    openSearchModalSignal.value = false;
}

export const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>,
                                        cancelToken: CancelTokenSource,
                                        setCancelToken: Dispatch<SetStateAction<CancelTokenSource>>,
                                        setMovies: Dispatch<SetStateAction<Movie[]>>) => {
    searchValueSignal.value = e.currentTarget.value;

    const filterParams = buildFilterParams(e.currentTarget.value) as FilterParams;
    movieSearchRequest(filterParams, cancelToken, setCancelToken, setMovies);
}

export const handleMovieCardClick = (router: AppRouterInstance, id: number) => {
    router.push(`/movies/${id}?selection=overview`);
    handleSearchModalClose();
}

export const handleSearchbarClear = (setMovies: Dispatch<SetStateAction<Movie[]>>) => {
    searchValueSignal.value = "";
    setMovies([]);
}