import {LayoutProps} from "@/types/LayoutProps";
import {sortingModalOpenSignal} from "@/pages/catalog/components/SortingModal/sorting-modal-open-signal";

const ModalCloseButtonLayout = ({children}: LayoutProps) => {
    return (
        <div
            onClick={() => sortingModalOpenSignal.value = false}
            className={"size-[26px] cursor-pointer flex items-center justify-center"}>
            {children}
        </div>
    )
}

export default ModalCloseButtonLayout;