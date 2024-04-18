import MediaTabLayout from "@/pages/movies/[id]/components/MediaContent/components/MediaTabs/MediaTabLayout";
import Tab from "@/pages/movies/[id]/components/MediaContent/components/Tab/Tab";
import {TabSelection} from "@/types/TabSelection";

const MediaTabs = () => {
    return (
        <MediaTabLayout>
            <Tab value={TabSelection.Overview}/>
            <Tab value={TabSelection.Comments}/>
            <Tab value={TabSelection.Actors}/>
            <Tab value={TabSelection.Directors}/>
        </MediaTabLayout>
    )
}

export default MediaTabs;