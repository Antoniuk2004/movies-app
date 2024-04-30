import MainHeaderLayout from "./MainHeaderLayout";
import Wrapper from "@/common-components/Wrapper";
import Searchbar from "@/pages/main/components/Searchbar/Searchbar";
import MainHeaderContent from "@/pages/main/components/MainHeaderContent";

const MainHeader = () => {
    return (
        <MainHeaderLayout>
            <Wrapper>
                <MainHeaderContent>
                    <Searchbar/>
                </MainHeaderContent>
            </Wrapper>
        </MainHeaderLayout>
    )
}

export default MainHeader;