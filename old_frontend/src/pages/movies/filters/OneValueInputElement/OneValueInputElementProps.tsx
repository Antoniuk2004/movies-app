import {FilterParams} from "@/pages/movies/filters/FilterParams";

export type OneValueInputElementProps = {
    title: string,
    data:
        Array<{ id: number; title: string }>
        | Array<{ id: number; firstName: string; surname: string }>,
    filterParams: FilterParams
}