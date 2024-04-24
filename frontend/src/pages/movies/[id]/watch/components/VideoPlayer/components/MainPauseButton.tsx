import {handleTouchStart} from "@/pages/movies/[id]/watch/handlers";
import {IoIosPause} from "react-icons/io";

const MainPauseButton = () => {
    return (
        <div
            onTouchStart={handleTouchStart}
            className={`size-20 basis-1/3 bg-transparent duration-200 ease-in-out flex items-center justify-center text-white rounded-full text-6xl responsive:bg-transparent responsive:hover:bg-transparent `}>
            <IoIosPause className={"hidden responsive:flex"}/>
        </div>
    )
}

export default MainPauseButton;