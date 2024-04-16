import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {FilterParams} from "@/pages/movies/filters/FilterParams";

export type FilterProps = {
    router: AppRouterInstance,
    filterParams: FilterParams
}