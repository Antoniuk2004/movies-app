import BottomMenuLayout from "./BottomMenuLayout";
import BottomMenuItem from "./components/BottomMenuItem/BottomMenuItem";
import {IoLayers, IoMenu} from "react-icons/io5";
import {SiWondersharefilmora} from "react-icons/si";
import {useRouter} from "next/navigation";

const BottomMenu = () => {
    const router = useRouter();

    return (
        <BottomMenuLayout>
            <BottomMenuItem
                text={"Catalog"}
                icon={<IoLayers/>}
                colStart={"col-start-2"}
                clickAction={() => router.push("/catalog?order=DESC&orderType=RATING")}
            />
            <BottomMenuItem
                icon={<SiWondersharefilmora/>}
                colStart={"col-start-3"}
                iconSize={"text-2xl"}
                clickAction={() => router.push("/main")}
            />
            <BottomMenuItem
                text={"Menu"}
                icon={<IoMenu/>}
                colStart={"col-start-4"}
                clickAction={() => console.log("Menu")}
            />
        </BottomMenuLayout>
    )
}

export default BottomMenu;