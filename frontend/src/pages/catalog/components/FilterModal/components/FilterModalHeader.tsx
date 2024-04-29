import FilterModalHeaderLayout from "./FilterModalHeaderLayout";
import {FaArrowLeft} from "react-icons/fa6";

const FilterModalHeader = () => {
    return (
        <FilterModalHeaderLayout>
            <FaArrowLeft/>
            <span>Filters</span>
        </FilterModalHeaderLayout>
    )
}

export default FilterModalHeader;