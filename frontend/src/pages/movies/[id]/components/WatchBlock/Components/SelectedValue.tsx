import {WatchingStatus} from "@/types/WatchingStatus";

type SelectedValueProps = {
    selected: WatchingStatus | null
}

const SelectedValue = (props: SelectedValueProps) => {
    const {selected} = props;

    if (selected) return <span>{selected}</span>
    else return <span className="text-neutral-800">Select Watching Status</span>
}

export default SelectedValue;