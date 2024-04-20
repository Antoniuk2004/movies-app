import {WatchingStatus} from "@/types/WatchingStatus";

type SelectedValueProps = {
    selected: WatchingStatus | null
}

const SelectedValue = (props: SelectedValueProps) => {
    const {selected} = props;

    if (selected) return <span>{selected}</span>
    else return <span className="text-neutral-800 line-clamp-1">Select Watching Status</span>
}

export default SelectedValue;