import HomePageLayout from "@/pages/home/HomePageLayout";
import HomeBanner from "@/pages/home/components/HomeBanner/HomeBanner";
import Header from "@/pages/home/components/Header/Header";
import Devices from "@/pages/home/components/Devices/Devices";
import {useValidate} from "@/utils/use-validate";
import {useStatus} from "@/utils/use-statuts";
import Loader from "@/common-components/Loader/Loader";

export default function Home() {
    const status = useStatus();

    if(!status) return <Loader/>;
    return (
        <HomePageLayout>
            <Header/>
            <HomeBanner/>
            <Devices/>
        </HomePageLayout>
    );
}
