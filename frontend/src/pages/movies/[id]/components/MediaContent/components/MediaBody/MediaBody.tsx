import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";
import {TabSelection} from "@/types/TabSelection";
import OverviewContent from "@/pages/movies/[id]/components/OverviewContent/OverviewContent";

const MediaBody = () => {
    const {selectedValue} = movieQuerySignal.value;

    switch (selectedValue) {
        case TabSelection.Overview:
            return <OverviewContent/>
        default:
            return null;
    }
}

export default MediaBody;