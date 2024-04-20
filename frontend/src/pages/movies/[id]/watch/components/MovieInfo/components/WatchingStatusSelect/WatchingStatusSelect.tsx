import {updateWatchingStatus} from "@/api/watching-status-request";
import {WatchingStatus} from "@/types/WatchingStatus";
import Select from "@/pages/movies/[id]/components/WatchBlock/Components/Select/Select";
import Dropdown from "@/common-components/Dropdown/Dropdown";
import WatchingStatusSelectLayout from "./WatchingStatusSelectLayout";
import {useState} from "react";
import {movieSignal} from "@/signals/movie-signal";

const WatchingStatusSelect = () => {
    const {watchingStatus} = movieSignal.value;
    const [selected, SetSelected] = useState<WatchingStatus>(watchingStatus);

    return (
        <WatchingStatusSelectLayout>
            <Dropdown
                onElementClick={updateWatchingStatus}
                setSelected={SetSelected}
                options={Object.values(WatchingStatus)}>
                <Select selected={selected}/>
            </Dropdown>
        </WatchingStatusSelectLayout>
    )
}

export default WatchingStatusSelect;