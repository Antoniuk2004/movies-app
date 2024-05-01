import {LayoutProps} from "@/types/LayoutProps";
import {searchValueSignal} from "@/common-components/SearchModal/signals/search-value-signal";
import {Dispatch, SetStateAction} from "react";
import {Movie} from "@/types/Movie";
import {handleSearchbarClear} from "@/common-components/SearchModal/handlers";

type ClearInputButtonLayoutProps = LayoutProps & {
    searchValue: string;
    setMovies: Dispatch<SetStateAction<Movie[]>>
}

const ClearInputButtonLayout = (props: ClearInputButtonLayoutProps) => {
    const {searchValue, children, setMovies} = props;

    if (searchValue === "") return null;
    return (
        <button
            type={"button"}
            onClick={() => handleSearchbarClear(setMovies)}
            className={"hover:bg-btn-hover rounded-full p-0.5 duration-200 ease-in-out"}>
            {children}
        </button>
    )
}

export default ClearInputButtonLayout;