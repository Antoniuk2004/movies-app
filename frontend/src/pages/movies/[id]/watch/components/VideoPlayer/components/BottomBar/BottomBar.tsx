import BottomBarLayout from "./BottomBarLayout";
import LeftSide from "@/pages/movies/[id]/watch/components/VideoPlayer/components/LeftSide/LeftSide";
import RightSide from "@/pages/movies/[id]/watch/components/VideoPlayer/components/RightSide";

const BottomBar = () => {
    return (
        <BottomBarLayout>
            <LeftSide/>
            <RightSide/>
        </BottomBarLayout>
    )
}

export default BottomBar;