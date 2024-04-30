import SearchModalHeaderLayout from "./SearchModalHeaderLayout";
import {FaArrowLeft} from "react-icons/fa6";

type SearchModalHeaderProps = {
    close: () => void;
}

const SearchModalHeader = (props: SearchModalHeaderProps) => {
    const {close} = props;

    return (
        <SearchModalHeaderLayout close={close}>
            <FaArrowLeft/>
            <span>Search</span>
        </SearchModalHeaderLayout>
    )
}

export default SearchModalHeader;