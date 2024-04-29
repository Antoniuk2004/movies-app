import {WatchingStatus} from "@/types/WatchingStatus";
import {getWatchingStatusStyle} from "@/pages/catalog/helpers";

type WatchingStatusDisplayProps = {
    status: WatchingStatus;
}

const WatchingStatusDisplay = (props: WatchingStatusDisplayProps) => {
    const {status} = props;
    const style = getWatchingStatusStyle(status);

    return (
        <div className={`${style} max-w-20 truncate absolute rounded px-1 right-3.5 top-3.5 z-10 text-xs`}>
            {status}
        </div>
    )
}

export default WatchingStatusDisplay;