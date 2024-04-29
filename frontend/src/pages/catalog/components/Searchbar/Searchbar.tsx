import SearchbarLayout from "./SearchbarLayout";
import SearchButton from "@/pages/catalog/components/SearchButton/SearchButton";
import {useFormContext} from "react-hook-form";
import {IoMdClose} from "react-icons/io";
import SearchbarClearButton from "@/pages/catalog/components/SearchbarClearButton/SearchbarClearButton";
import {useSearchbarValue} from "@/pages/catalog/use-effects/use-searchbar-value";
import {handleSearch} from "@/pages/catalog/handlers";

const Searchbar = () => {
    const {searchbarValue} = useSearchbarValue();

    if(searchbarValue === null) return null;
    return (
        <SearchbarLayout>
            <SearchButton/>
            <input
                value={searchbarValue}
                onChange={handleSearch}
                autoComplete={'off'}
                className={"w-full rounded-md text-sm ring-1 ring-btn-light px-8 py-1.5 focus:outline-0  focus:border-none focus:ring-primary duration-200 ease-in-out"}
                type="text"
                placeholder="Search by title"/>
            <SearchbarClearButton/>
        </SearchbarLayout>
    )
}

export default Searchbar;