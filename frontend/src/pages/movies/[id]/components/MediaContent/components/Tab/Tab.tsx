import TabLayout from "./TabLayout";
import {TabSelection} from "@/types/TabSelection";
import SelectionLine from "@/pages/movies/[id]/components/MediaContent/components/SelectionLine/SelectionLine";
import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";

type TabProps = {
    value: TabSelection
}

const Tab = (props: TabProps) => {
    const {value} = props;
    const {selectedValue} = movieQuerySignal.value;

    return (
        <TabLayout value={value}>
            {selectedValue && (selectedValue === value) && <SelectionLine/>}
            <span>{value}</span>
        </TabLayout>
    )
}

export default Tab;