import MediaContentLayout from "@/pages/movies/[id]/components/MediaContent/MediaContentLayout";
import MediaTabs from "@/pages/movies/[id]/components/MediaContent/components/MediaTabs/MediaTabs";
import MediaBody from "@/pages/movies/[id]/components/MediaContent/components/MediaBody/MediaBody";

const MediaContent = () => {
    return (
        <MediaContentLayout>
            <MediaTabs/>
            <MediaBody/>
        </MediaContentLayout>
    )
}

export default MediaContent;