import WatchBlockLayout from "@/pages/movies/[id]/components/WatchBlock/WatchBlockLayout";
import WatchButton from "@/pages/movies/[id]/components/WatchBlock/Components/WatchButton/WatchButton";
import Dropdown from "@/common-components/Dropdown/Dropdown";
import Select from "@/pages/movies/[id]/components/WatchBlock/Components/Select/Select";
import {WatchingStatus} from "@/types/WatchingStatus";
import Block from "@/common-components/Block";
import {useState} from "react";
import {movieSignal} from "@/signals/movie-signal";
import {updateWatchingStatus} from "@/api/watching-status-request";

const WatchBlock = () => {
    const {watchingStatus} = movieSignal.value;
    const [selected, SetSelected] = useState<WatchingStatus>(watchingStatus);

    return (
        <WatchBlockLayout>
            <WatchButton/>
            <Block height={'h-1/2 responsive:h-full'}>
                <Dropdown
                    onElementClick={updateWatchingStatus}
                    setSelected={SetSelected}
                    options={Object.values(WatchingStatus)}>
                    <Select selected={selected}/>
                </Dropdown>
            </Block>
        </WatchBlockLayout>
    )
}

export default WatchBlock;