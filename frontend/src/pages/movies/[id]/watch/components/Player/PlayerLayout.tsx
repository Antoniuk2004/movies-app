import {LayoutProps} from "@/types/LayoutProps";
import BottomBar from "@/pages/movies/[id]/watch/components/Player/components/BottomBar/BottomBar";

const PlayerLayout = ({children}: LayoutProps) => {
    return (
        <div className={"rounded-xl relative overflow-hidden"}>
            <BottomBar/>
            {children}
        </div>
    )
}

export default PlayerLayout;