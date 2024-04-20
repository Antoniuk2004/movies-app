import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";
import {TabSelection} from "@/types/TabSelection";
import OverviewContent from "@/pages/movies/[id]/components/OverviewContent/OverviewContent";
import CommentsContent from "@/pages/movies/[id]/components/CommentContent/CommentsContent";

const MediaBody = () => {
    const {selectedValue} = movieQuerySignal.value;

    switch (selectedValue) {
        case TabSelection.Overview:
            return <OverviewContent/>
        case TabSelection.Comments:
            return <CommentsContent/>
        default:
            return null;
    }
}

export default MediaBody;