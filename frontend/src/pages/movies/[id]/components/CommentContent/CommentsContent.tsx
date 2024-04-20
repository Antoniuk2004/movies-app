import Description from "@/pages/movies/[id]/components/OverviewContent/components/Description/Description";
import GenreList from "@/pages/movies/[id]/components/OverviewContent/components/GenreList/GenreList";
import MediaBodyLayout from "@/pages/movies/[id]/components/MediaContent/components/MediaBody/MediaBodyLayout";
import RatingDistribution
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/RatingDistribution";
import DistributionContainer from "@/pages/movies/[id]/components/OverviewContent/components/DistributionContainer";
import WatchingStatusesDistribution
    from "@/pages/movies/[id]/components/OverviewContent/components/WatchingStatussesDistribution/WatchingStatusesDistribution";
import SectionBody
    from "@/pages/movies/[id]/components/OverviewContent/components/People/components/SectionBody/SectionBody";
import {movieSignal} from "@/signals/movie-signal";
import MediaInfoSmall from "@/pages/movies/[id]/components/MediaInfoSmall/MediaInfoSmall";
import CommentsContentLayout from "@/pages/movies/[id]/components/CommentContent/CommentsContentLayout";

const CommentsContent = () => {
    return (
        <CommentsContentLayout>
            <span>Coming Soon</span>
        </CommentsContentLayout>
    )
}

export default CommentsContent;