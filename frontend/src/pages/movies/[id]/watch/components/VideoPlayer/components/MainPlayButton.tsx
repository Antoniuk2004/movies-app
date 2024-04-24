import {handleTouchStart} from "@/pages/movies/[id]/watch/handlers";
import {IoIosPlay} from "react-icons/io";

type MainPlayButtonProps = {
    isStopped: boolean;
}

const MainPlayButton = (props: MainPlayButtonProps) => {
    const {isStopped} = props;

    return (
        <div
            onTouchStart={handleTouchStart}
            className={`responsive:basis-1/3 flex w-full responsive:w-fit items-center justify-center text-white text-6xl 
                    `}>
            <div className={`${!isStopped ? '' : 'cursor-pointer'}
                    size-20 responsive:w-fit responsive:h-fit duration-200 flex rounded-full items-center justify-center ease-in-out responsive:hover:bg-transparent hover:bg-play-button-hovered bg-play-button responsive:bg-transparent`}>
                <IoIosPlay/>
            </div>
        </div>
    )
}

export default MainPlayButton;