import FilterBottomButtonsLayout from "./FilterBottomButtonsLayout";
import ResetButton from "@/pages/catalog/components/ResetButton/ResetButton";
import ApplyButton from "@/pages/catalog/components/ApplyButton/ApplyButton";

const FilterBottomButtons = () => {
    return (
        <FilterBottomButtonsLayout>
            <ResetButton/>
            <ApplyButton/>
        </FilterBottomButtonsLayout>
    )
}

export default FilterBottomButtons;