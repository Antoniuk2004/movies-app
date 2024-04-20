import {IoIosPlay} from "react-icons/io";
import IconLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/IconLayout";
import SideLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/LeftSide/SideLayout";

const LeftSide = () => {
    return (
        <SideLayout>
            <IconLayout>
                <IoIosPlay />
            </IconLayout>
        </SideLayout>
    )
}

export default LeftSide;