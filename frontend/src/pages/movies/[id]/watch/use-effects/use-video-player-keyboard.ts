import {useEffect} from "react";
import {handleFullScreenChange, handleKeyDown} from "@/pages/movies/[id]/watch/handlers";

export const useVideoPlayerKeyboard = () => {
    useEffect(() => {
        document.addEventListener('keydown',
            (e) => handleKeyDown(e));
        document.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => {
            document.removeEventListener('keydown',
                handleKeyDown);
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        }
    }, []);
}