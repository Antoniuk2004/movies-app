import FilterButtonLayout from "./FilterButtonLayout";
import {VscSettings} from "react-icons/vsc";

const FilterButton = () => {
    return (
        <FilterButtonLayout>
            <VscSettings className={"text-base"}/>
            <span>Filter</span>
        </FilterButtonLayout>
    )
}

export default FilterButton;