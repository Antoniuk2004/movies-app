import {LayoutProps} from "@/types/LayoutProps";
import {sortingModalOpenSignal} from "@/pages/catalog/components/SortingModal/sorting-modal-open-signal";

const SortingButtonLayout = ({children}: LayoutProps) => {
    return (
        <button
            onClick={() => sortingModalOpenSignal.value = true}
            type={"button"}
            className={"active:scale-95 flex text-sm font-normal gap-x-2 px-3 items-center py-1.5 hover:bg-primary-hovered duration-200 ease-in-out rounded-full movies-grid-sm:hover:bg-transparent"}>
            {children}
        </button>
    )
}

export default SortingButtonLayout;