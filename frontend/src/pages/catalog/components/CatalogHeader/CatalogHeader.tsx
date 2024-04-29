import CatalogHeaderLayout from "./CatalogHeaderLayout";
import {FaArrowLeft} from "react-icons/fa6";
import IconLayout from "@/pages/catalog/components/IconLayout";
import HeaderSideLayout from "@/pages/catalog/components/HeaderSideLayout";
import FilterButton from "@/pages/catalog/components/FilterButton/FilterButton";
import SortingButton from "@/pages/catalog/components/SortingButton/SortingButton";

const CatalogHeader = () => {
    return (
        <CatalogHeaderLayout>
            <HeaderSideLayout>
                <IconLayout>
                    <FaArrowLeft/>
                </IconLayout>
                <span>Catalog</span>
            </HeaderSideLayout>
            <HeaderSideLayout>
                <SortingButton/>
                <FilterButton/>
            </HeaderSideLayout>
        </CatalogHeaderLayout>
    )
}

export default CatalogHeader;