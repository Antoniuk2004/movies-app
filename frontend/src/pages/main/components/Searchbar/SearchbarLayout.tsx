import {LayoutProps} from "@/types/LayoutProps";
import {openSearchModalSignal} from "@/common-components/SearchModal/signals/open-search-modal-signal";

const SearchbarLayout = ({children}: LayoutProps) => {
    return (
        <div
            onClick={() => openSearchModalSignal.value = true}
            className={"rounded select-none bg-hover-light mx-1.5 px-3 text-sm flex gap-x-3 w-full items-center leading-8 text-neutral-600"}>
            {children}
        </div>
    )
}

export default SearchbarLayout;