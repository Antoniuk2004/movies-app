import LeftSideLayout from "./LeftSideLayout";
import TopLine from "@/pages/catalog/components/TopLine/TopLine";
import MoviesGrid from "@/pages/catalog/components/MoviesGrid/MoviesGrid";

const LeftSide = () => {
    return (
        <LeftSideLayout>
            <TopLine/>
            <MoviesGrid/>
        </LeftSideLayout>
    )
}

export default LeftSide;