import SearchbarLayout from "./SearchbarLayout";
import SearchButton from "@/pages/catalog/components/SearchButton/SearchButton";

const Searchbar = () => {
    return (
        <SearchbarLayout>
            <SearchButton/>
            <input className={"w-full rounded-md text-sm ring-1 ring-btn-light pl-8 pr-3 py-1.5 focus:outline-0  focus:border-none focus:ring-primary duration-200 ease-in-out"}
                   type="text"
                   placeholder="Search by title"/>
        </SearchbarLayout>
    )
}

export default Searchbar;