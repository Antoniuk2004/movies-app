import SearchbarLayout from "./SearchbarLayout";
import {FaSearch} from "react-icons/fa";

const Searchbar = () => {
    return (
        <SearchbarLayout>
            <FaSearch className={"text-neutral-700"}/>
            <span>Search</span>
        </SearchbarLayout>
    )
}

export default Searchbar;