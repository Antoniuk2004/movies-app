import CatalogLayout from "./CatalogLayout";
import LeftSide from "@/pages/catalog/components/LeftSide/LeftSide";
import RightSide from "@/pages/catalog/components/RightSide/RightSide";
import {useInitialMovies} from "@/pages/catalog/use-initial-movies";

const Catalog = () => {
    const movies = useInitialMovies();

    if(!movies) return null;
    return (
        <CatalogLayout>
            <LeftSide/>
            <RightSide/>
        </CatalogLayout>
    )
}

export default Catalog;