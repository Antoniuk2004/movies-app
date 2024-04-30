import {LayoutProps} from "@/types/LayoutProps";
import {handleSearchModalClose} from "@/common-components/SearchModal/handlers";

type SearchModalHeaderLayoutProps = LayoutProps & {
    close: () => void;
}

const SearchModalHeaderLayout = (props: SearchModalHeaderLayoutProps) => {
    const {children, close} = props;

    return (
        <div
            onClick={() => handleSearchModalClose(close)}
            className={"flex gap-x-3 px-5 py-3.5 cursor-pointer items-center"}>
            {children}
        </div>
    )
}

export default SearchModalHeaderLayout;