import {LayoutProps} from "@/types/LayoutProps";
import {filterModalOpenSignal} from "@/pages/catalog/components/FilterModal/filter-modal-open-signal";

const FilterModalHeaderLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full border-b border-b-btn-light"}>
            <div
                onClick={() => filterModalOpenSignal.value = false}
                className={"px-3 cursor-pointer.5 font-semibold text-sm h-10 flex gap-x-2.5 items-center cursor-pointer w-fit"}>
                {children}
            </div>
        </div>
    )
}

export default FilterModalHeaderLayout;