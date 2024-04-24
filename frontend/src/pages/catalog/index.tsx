import CatalogLayout from "./CatalogLayout";
import LeftSide from "@/pages/catalog/components/LeftSide/LeftSide";
import RightSide from "@/pages/catalog/components/RightSide/RightSide";
import {useMovies} from "@/pages/catalog/use-movies";

const Catalog = () => {
    const movies = useMovies();

    if(!movies) return null;
    return (
        <CatalogLayout>
            <LeftSide/>
            <RightSide/>
        </CatalogLayout>
    )
}

export default Catalog;