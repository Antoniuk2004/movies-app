import {TabSelection} from "@/types/TabSelection";
import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";

export const handleTabSelection = (value: TabSelection) => {
    const {selectedValue, movieId, router} = movieQuerySignal.value;

    if (selectedValue === value) return;
    router.push(`/movies/${movieId}?selection=${value}`);
}