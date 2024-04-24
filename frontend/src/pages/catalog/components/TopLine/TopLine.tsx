import TopLineLayout from "./TopLineLayout";
import TitleLayout from "@/pages/catalog/components/TitleLayout";
import Searchbar from "@/pages/catalog/components/Searchbar/Searchbar";
import SortingSelect from "@/pages/catalog/components/SortingSelect/SortingSelect";

const TopLine = () => {
    return (
        <TopLineLayout>
            <TitleLayout>
                <span>Catalog</span>
                <SortingSelect/>
            </TitleLayout>
            <Searchbar/>
        </TopLineLayout>
    )
}

export default TopLine;