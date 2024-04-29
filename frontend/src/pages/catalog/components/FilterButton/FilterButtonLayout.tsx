import {LayoutProps} from "@/types/LayoutProps";
import {filterModalOpenSignal} from "@/pages/catalog/components/FilterModal/filter-modal-open-signal";

const FilterButtonLayout = ({children}: LayoutProps) => {
    return (
        <button
            type={"button"}
            onClick={() => filterModalOpenSignal.value = true}
            className={"active:scale-95 flex text-sm font-normal gap-x-2 px-3 items-center py-1.5 hover:bg-primary-hovered duration-200 ease-in-out rounded-full movies-grid-sm:hover:bg-transparent"}>
            {children}
        </button>
    )
}

export default FilterButtonLayout;