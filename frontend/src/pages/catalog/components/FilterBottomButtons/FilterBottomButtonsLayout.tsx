import {LayoutProps} from "@/types/LayoutProps";
import {filterModalOpenSignal} from "@/pages/catalog/components/FilterModal/filter-modal-open-signal";

const FilterBottomButtonsLayout = ({children}: LayoutProps) => {
    return (
        <div
            onClick={() => filterModalOpenSignal.value = false}
            className={"absolute w-full grid grid-cols-2 bottom-0 px-3 py-2 gap-x-3"}>
            {children}
        </div>
    )
}

export default FilterBottomButtonsLayout;