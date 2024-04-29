import {LayoutProps} from "@/types/LayoutProps";
import {filterModalOpenSignal} from "@/pages/catalog/components/FilterModal/filter-modal-open-signal";

const SortModalHeaderLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full px-3.5 pt-2 pb-1 flex items-center justify-between text-base font-semibold"}>
            {children}
        </div>
    )
}

export default SortModalHeaderLayout;