import {TabSelection} from "@/types/TabSelection";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export type MovieQuery = {
    movieId: number | null;
    selectedValue: TabSelection | null;
    router: AppRouterInstance;
}
