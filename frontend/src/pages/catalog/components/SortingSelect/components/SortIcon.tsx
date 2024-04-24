import {Sort} from "@/types/Sort";
import {GoSortAsc, GoSortDesc} from "react-icons/go";

type SortIconProps = {
    additionalCase: Sort;
}

const SortIcon = (props: SortIconProps) => {
    const {additionalCase} = props;

    if (additionalCase === Sort.Asc) return <GoSortAsc className={"text-base"}/>;
    else return <GoSortDesc className={"text-base"}/>;
}

export default SortIcon;