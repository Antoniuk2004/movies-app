import {LayoutProps} from "@/types/LayoutProps";

const SearchbarLayout = ({children}: LayoutProps) => {
    return (
        <div className={"relative"}>
            {children}
        </div>
    )
}

export default SearchbarLayout;