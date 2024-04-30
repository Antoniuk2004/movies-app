import {LayoutProps} from "@/types/LayoutProps";
import {searchValueSignal} from "@/common-components/SearchModal/signals/search-value-signal";

type ClearInputButtonLayoutProps = LayoutProps & {
    searchValue: string;
}

const ClearInputButtonLayout = (props: ClearInputButtonLayoutProps) => {
    const {searchValue, children} = props;

    if (searchValue === "") return null;
    return (
        <button
            type={"button"}
            onClick={() => searchValueSignal.value = ""}
            className={"hover:bg-btn-hover rounded-full p-0.5 duration-200 ease-in-out"}>
            {children}
        </button>
    )
}

export default ClearInputButtonLayout;