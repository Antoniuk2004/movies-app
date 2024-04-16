import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {FilterParams} from "@/pages/movies/filters/FilterParams";

export const handleCleanButtonClick = (router: AppRouterInstance, filterProps: FilterParams) => {
    Object.values(filterProps).map((element) => {
        if (element !== undefined) router.push("/movies");
    });
}
