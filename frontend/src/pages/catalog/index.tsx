import CatalogLayout from "./CatalogLayout";
import LeftSide from "@/pages/catalog/components/LeftSide/LeftSide";
import RightSide from "@/pages/catalog/components/RightSide/RightSide";
import {useInitialMovies} from "@/pages/catalog/use-effects/use-initial-movies";
import Loader from "@/common-components/Loader/Loader";
import CatalogHeader from "@/pages/catalog/components/CatalogHeader/CatalogHeader";
import FilterModal from "@/pages/catalog/components/FilterModal/FilterModal";
import SortingModal from "@/pages/catalog/components/SortingModal/SortingModal";
import SearchModal from "@/common-components/SearchModal/SearchModal";

const Catalog = () => {
    const movies = useInitialMovies();

    if (!movies) return <Loader/>;
    return (
        <>
            <SearchModal/>
            <CatalogHeader/>
            <CatalogLayout>
                <SortingModal/>
                <FilterModal/>
                <LeftSide/>
                <RightSide/>
            </CatalogLayout>
        </>
    )
}

export default Catalog;