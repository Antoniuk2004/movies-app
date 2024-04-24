import SloganLayout from "./ContentLayout";
import SloganHeader from "@/pages/home/components/SloganHeader/SloganHeader";
import SloganFooter from "@/pages/home/components/SloganFooter/SloganFooter";

const Slogan = () => {
    return (
        <SloganLayout>
            <SloganHeader/>
            <SloganFooter/>
        </SloganLayout>
    )
}

export default Slogan;