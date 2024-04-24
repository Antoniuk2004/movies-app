import {LayoutProps} from "@/types/LayoutProps";

const SearchButtonLayout = ({children}: LayoutProps) => {
    return (
        <button type={"submit"} className={"absolute text-gray-400 active:scale-95 size-8 flex items-center justify-center"}>
            {children}
        </button>
    )
}

export default SearchButtonLayout;