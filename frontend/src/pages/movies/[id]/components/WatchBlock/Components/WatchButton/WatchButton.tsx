import WatchButtonLayout from "./WatchButtonLayout";
import {FaPlay} from "react-icons/fa6";

const WatchButton = () => {
    return (
        <WatchButtonLayout>
            <FaPlay/>
            <span>Start Watching</span>
        </WatchButtonLayout>
    )
}

export default WatchButton;