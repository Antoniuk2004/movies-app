import Description from "@/pages/movies/[id]/components/OverviewContent/components/Description/Description";
import GenreList from "@/pages/movies/[id]/components/OverviewContent/components/GenreList/GenreList";
import MediaBodyLayout from "@/pages/movies/[id]/components/MediaContent/components/MediaBody/MediaBodyLayout";
import RatingDistribution
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/RatingDistribution";
import DistributionContainer from "@/pages/movies/[id]/components/OverviewContent/components/DistributionContainer";
import WatchingStatusesDistribution
    from "@/pages/movies/[id]/components/OverviewContent/components/WatchingStatussesDistribution/WatchingStatusesDistribution";

const OverviewContent = () => {
    return (
        <MediaBodyLayout>
            <Description/>
            <GenreList/>
            <DistributionContainer>
                <RatingDistribution/>
                <WatchingStatusesDistribution/>
            </DistributionContainer>
        </MediaBodyLayout>
    )
}

export default OverviewContent;