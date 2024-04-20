import WatchingHeaderLayout from "./WatchingHeaderLayout";
import BackButton from "@/pages/movies/[id]/watch/components/WatchingHeader/BackButton";
import WatchingStatusSelect
    from "@/pages/movies/[id]/watch/components/MovieInfo/components/WatchingStatusSelect/WatchingStatusSelect";

const WatchingHeader = () => {
    return (
        <WatchingHeaderLayout>
            <BackButton/>
            <WatchingStatusSelect/>
        </WatchingHeaderLayout>
    )
}

export default WatchingHeader;